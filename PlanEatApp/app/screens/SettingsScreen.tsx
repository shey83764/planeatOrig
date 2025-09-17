import React, { useState } from 'react';
import { View, Text, TextInput, Switch, StyleSheet, Pressable, Alert } from 'react-native';
import { useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';

import type { DrawerNavigationProp } from '@react-navigation/drawer';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { DrawerParamList, RootStackParamList } from '../navigation/AppNavigator';

type SettingsScreenDrawerProp = DrawerNavigationProp<DrawerParamList, 'Settings'>;
type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function SettingsScreen() {
  const systemColorScheme = useColorScheme();
  const isDarkMode = systemColorScheme === 'dark';
  const [darkModeEnabled, setDarkModeEnabled] = useState(isDarkMode);
  const [username, setUsername] = useState('Sheyla Perez');

  const navigation = useNavigation<SettingsScreenDrawerProp>();
  const parentNavigation = navigation.getParent<RootStackNavigationProp>();

  const colors = {
    background: darkModeEnabled ? theme.colors.darkBackground : theme.colors.lightBackground,
    textPrimary: darkModeEnabled ? theme.colors.textLight : theme.colors.textDark,
    textSecondary: darkModeEnabled ? theme.colors.textSecondaryDark : theme.colors.textSecondaryLight,
    inputBackground: darkModeEnabled ? theme.colors.inputDark : theme.colors.inputLight,
    buttonBackground: theme.colors.primary,
    buttonText: '#fff',
  };

  const handleSave = () => {
    if (username.trim().length === 0) {
      Alert.alert('Error', 'El nombre de usuario no puede estar vacío');
      return;
    }
    Alert.alert('Éxito', 'Cambios guardados correctamente');
  };

  const handleLogout = () => {
    Alert.alert('Cerrar sesión', '¿Estás seguro que quieres cerrar sesión?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Cerrar sesión', style: 'destructive', onPress: () => parentNavigation?.replace('Login') },
    ]);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.buttonBackground }]}>Configuración</Text>

      <Text style={[styles.label, { color: colors.textSecondary }]}>Nombre</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={[styles.input, { backgroundColor: colors.inputBackground, color: colors.textPrimary }]}
        placeholder="Nombre de usuario"
        placeholderTextColor={darkModeEnabled ? '#888' : '#aaa'}
      />

      <View style={styles.switchRow}>
        <Text style={[styles.label, { color: colors.textSecondary }]}>Modo oscuro</Text>
        <Switch
          trackColor={{ false: '#767577', true: theme.colors.primary }}
          thumbColor={darkModeEnabled ? theme.colors.primary : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          value={darkModeEnabled}
          onValueChange={setDarkModeEnabled}
        />
      </View>

      <Pressable style={[styles.saveButton, { backgroundColor: colors.buttonBackground }]} onPress={handleSave}>
        <Text style={[styles.saveButtonText, { color: colors.buttonText }]}>Guardar cambios</Text>
      </Pressable>

      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  saveButton: {
    borderRadius: 10,
    paddingVertical: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    fontWeight: '700',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#e63946',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
