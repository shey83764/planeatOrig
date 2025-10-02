import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  Pressable,
  Alert,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';
import { Svg, Circle, G } from 'react-native-svg';

import type { DrawerNavigationProp } from '@react-navigation/drawer';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { DrawerParamList, RootStackParamList } from '../navigation/AppNavigator';

type SettingsScreenDrawerProp = DrawerNavigationProp<DrawerParamList, 'Settings'>;
type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

// 1️⃣ Componente gráfico circular
type ProgressCircleProps = {
  progress: number;
  color: string;
  size?: number;
  strokeWidth?: number;
};

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  progress,
  color,
  size = 80,
  strokeWidth = 8,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - circumference * progress;

  return (
    <Svg width={size} height={size}>
      <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
        <Circle
          stroke="#eee"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={color}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </G>
    </Svg>
  );
};

export default function SettingsScreen() {
  // 2️⃣ Estados de preferencias
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [reminderBreakfast, setReminderBreakfast] = useState(true);
  const [reminderLunch, setReminderLunch] = useState(true);
  const [reminderDinner, setReminderDinner] = useState(true);
  const [shoppingAlerts, setShoppingAlerts] = useState(true);
  const [recipeNotifications, setRecipeNotifications] = useState(true);
  const [dietPreference, setDietPreference] = useState('General');
  const [waterReminder, setWaterReminder] = useState(true);

  const navigation = useNavigation<SettingsScreenDrawerProp>();
  const parentNavigation = navigation.getParent<RootStackNavigationProp>();

  // 3️⃣ Funciones
  const handleSave = () => Alert.alert('Éxito', 'Cambios guardados correctamente');

  const handleLogout = () => {
    Alert.alert('Cerrar sesión', '¿Estás seguro que quieres cerrar sesión?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Cerrar sesión', style: 'destructive', onPress: () => parentNavigation?.replace('Login') },
    ]);
  };

  const handleChangePassword = () => Alert.alert('Cambio de contraseña', 'Funcionalidad a implementar');

  // 4️⃣ Objetivos diarios (solo visual)
  const objetivos = [
    { label: 'Calorías', value: 2000, color: theme.colors.primary, progress: 0.75 },
    { label: 'Proteínas', value: 100, color: '#4CAF50', progress: 0.6 },
    { label: 'Carbohidratos', value: 250, color: '#2196F3', progress: 0.8 },
    { label: 'Grasas', value: 70, color: '#FF9800', progress: 0.5 },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* 5️⃣ Preferencias */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Preferencias</Text>

        <View style={styles.switchRow}>
          <View style={{ flex: 1 }}>
            <View style={styles.labelRow}>
              <Ionicons name="notifications-outline" size={20} color={theme.colors.primary} />
              <Text style={styles.label}>Notificaciones generales</Text>
            </View>
            <Text style={styles.description}>Activa o desactiva todas las alertas de PlanEat</Text>
          </View>
          <Switch
            trackColor={{ false: '#ccc', true: theme.colors.primary }}
            thumbColor={notificationsEnabled ? theme.colors.primary : '#f4f3f4'}
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        </View>

        <Text style={[styles.subSectionTitle, { marginTop: 10 }]}>Recordatorios de comidas</Text>
        <View style={styles.switchRow}>
          <Text>Desayuno</Text>
          <Switch value={reminderBreakfast} onValueChange={setReminderBreakfast} />
        </View>
        <View style={styles.switchRow}>
          <Text>Almuerzo</Text>
          <Switch value={reminderLunch} onValueChange={setReminderLunch} />
        </View>
        <View style={styles.switchRow}>
          <Text>Cena</Text>
          <Switch value={reminderDinner} onValueChange={setReminderDinner} />
        </View>

        <Text style={[styles.subSectionTitle, { marginTop: 10 }]}>Alertas adicionales</Text>
        <View style={styles.switchRow}>
          <Text>Lista de compras</Text>
          <Switch value={shoppingAlerts} onValueChange={setShoppingAlerts} />
        </View>
        <View style={styles.switchRow}>
          <Text>Recetas nuevas</Text>
          <Switch value={recipeNotifications} onValueChange={setRecipeNotifications} />
        </View>
        <View style={styles.switchRow}>
          <Text>Recordatorio de agua</Text>
          <Switch value={waterReminder} onValueChange={setWaterReminder} />
        </View>

        <View style={styles.inputWrapper}>
          <View style={styles.labelRow}>
            <Ionicons name="restaurant-outline" size={20} color={theme.colors.primary} />
            <Text style={styles.label}>Dieta preferida</Text>
          </View>
          <Text style={styles.description}>Selecciona tu tipo de dieta para personalizar las recetas</Text>
          <Text>{dietPreference}</Text>
        </View>
      </View>

      {/* 6️⃣ Objetivos diarios (solo visual) */}
      <View style={styles.card}>
        <View style={styles.labelRow}>
          <Ionicons name="bar-chart-outline" size={20} color={theme.colors.primary} />
          <Text style={styles.sectionTitle}>Objetivos diarios</Text>
        </View>
        <View style={styles.row}>
          {objetivos.map((obj, idx) => (
            <View key={idx} style={styles.item}>
              <ProgressCircle size={80} strokeWidth={8} progress={obj.progress} color={obj.color} />
              <Text style={styles.value}>{obj.value}</Text>
              <Text style={styles.labelSmall}>{obj.label}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* 7️⃣ Botón Guardar */}
      <Pressable style={[styles.saveButton, { backgroundColor: theme.colors.primary }]} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Guardar cambios</Text>
      </Pressable>

      {/* 8️⃣ Seguridad / Logout */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Seguridad</Text>
        <Pressable style={styles.logoutButton} onPress={handleChangePassword}>
          <Ionicons name="key-outline" size={18} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.logoutText}>Cambiar contraseña</Text>
        </Pressable>
        <Pressable style={[styles.logoutButton, { marginTop: 10 }]} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={18} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.logoutText}>Cerrar sesión</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  card: { backgroundColor: '#f9f9f9', padding: 15, borderRadius: 12, marginBottom: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 2 },
  sectionTitle: { fontSize: 16, fontWeight: '700', marginBottom: 15, color: theme.colors.textDark },
  subSectionTitle: { fontSize: 14, fontWeight: '600', marginBottom: 10, color: theme.colors.textDark },
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  labelRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  label: { fontSize: 16, marginLeft: 5, fontWeight: '600' },
  labelSmall: { marginTop: 10, fontSize: 14, color: '#555' },
  description: { fontSize: 12, color: '#555', marginTop: 2 },
  row: { flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' },
  item: { alignItems: 'center', marginBottom: 15, width: '45%' },
  value: { fontSize: 16, fontWeight: '700', marginTop: -50, position: 'absolute' },
  inputWrapper: { marginTop: 10, marginBottom: 10 },
  saveButton: { borderRadius: 10, paddingVertical: 16, marginBottom: 15, alignItems: 'center' },
  saveButtonText: { fontWeight: '700', fontSize: 16, color: '#fff' },
  logoutButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#e63946', padding: 14, borderRadius: 10, justifyContent: 'center' },
  logoutText: { color: '#fff', fontWeight: '700', fontSize: 16 },
});