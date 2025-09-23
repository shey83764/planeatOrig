// 📁 app/forms/RegisterScreen.tsx
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';
import { fontConfig } from '../theme/fonts';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

export default function RegisterScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: '',
    sexo: '',
    edad: '',
    peso: '',
    altura: '',
    actividad: '',
    objetivo: '',
    deficit: '',
    ganarNivel: '',
    mantenerNivel: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleRegister = () => {
    console.log('Registrando usuario:', formData);
  };

  return (
    <LinearGradient colors={[colors.lightBackground, colors.primary]} style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={{ padding: 30 }}>
          <Text style={styles.title}>Registro</Text>

          {/* Campos básicos */}
          <TextInput
            label="Nombre"
            value={formData.nombre}
            onChangeText={(val) => handleInputChange('nombre', val)}
            style={styles.input}
            placeholderTextColor={colors.white}
          />
          <TextInput
            label="Apellido"
            value={formData.apellido}
            onChangeText={(val) => handleInputChange('apellido', val)}
            style={styles.input}
            placeholderTextColor={colors.white}
          />
          <TextInput
            label="Email"
            value={formData.email}
            onChangeText={(val) => handleInputChange('email', val)}
            keyboardType="email-address"
            style={styles.input}
            placeholderTextColor={colors.white}
          />
          <TextInput
            label="Contraseña"
            value={formData.password}
            onChangeText={(val) => handleInputChange('password', val)}
            secureTextEntry
            style={styles.input}
            placeholderTextColor={colors.white}
          />
          <TextInput
            label="Confirmar Contraseña"
            value={formData.confirmPassword}
            onChangeText={(val) => handleInputChange('confirmPassword', val)}
            secureTextEntry
            style={styles.input}
            placeholderTextColor={colors.white}
          />

          {/* Sexo */}
          <Text style={styles.label}>Sexo</Text>
          <Picker
            selectedValue={formData.sexo}
            onValueChange={(val) => handleInputChange('sexo', val)}
            style={styles.picker}
            itemStyle={{ color: colors.primary }}
          >
            <Picker.Item label="Selecciona sexo" value="" />
            <Picker.Item label="Mujer" value="mujer" />
            <Picker.Item label="Hombre" value="hombre" />
          </Picker>

          {/* Edad, peso y altura */}
          <TextInput
            label="Edad"
            value={formData.edad}
            onChangeText={(val) => handleInputChange('edad', val)}
            keyboardType="numeric"
            style={styles.input}
            placeholderTextColor={colors.white}
          />
          <TextInput
            label="Peso (kg)"
            value={formData.peso}
            onChangeText={(val) => handleInputChange('peso', val)}
            keyboardType="numeric"
            style={styles.input}
            placeholderTextColor={colors.white}
          />
          <TextInput
            label="Altura (cm)"
            value={formData.altura}
            onChangeText={(val) => handleInputChange('altura', val)}
            keyboardType="numeric"
            style={styles.input}
            placeholderTextColor={colors.white}
          />

          {/* Nivel de actividad */}
          <Text style={styles.label}>Nivel de actividad</Text>
          <Picker
            selectedValue={formData.actividad}
            onValueChange={(val) => handleInputChange('actividad', val)}
            style={styles.picker}
            itemStyle={{ color: colors.primary }}
          >
            <Picker.Item label="Selecciona nivel" value="" />
            <Picker.Item label="Sedentario" value="1.2" />
            <Picker.Item label="Ligero" value="1.375" />
            <Picker.Item label="Moderado" value="1.55" />
            <Picker.Item label="Intenso" value="1.725" />
            <Picker.Item label="Muy intenso" value="1.9" />
          </Picker>

          {/* Objetivo */}
          <Text style={styles.label}>Objetivo</Text>
          <Picker
            selectedValue={formData.objetivo}
            onValueChange={(val) => handleInputChange('objetivo', val)}
            style={styles.picker}
            itemStyle={{ color: colors.primary }}
          >
            <Picker.Item label="Selecciona objetivo" value="" />
            <Picker.Item label="Perder grasa" value="perder" />
            <Picker.Item label="Ganar masa muscular" value="ganar" />
            <Picker.Item label="Mantenimiento" value="mantener" />
          </Picker>

          {/* Subopciones según objetivo */}
          {formData.objetivo === 'perder' && (
            <>
              <Text style={styles.label}>Déficit calórico</Text>
              <Picker
                selectedValue={formData.deficit}
                onValueChange={(val) => handleInputChange('deficit', val)}
                style={styles.picker}
                itemStyle={{ color: colors.primary }}
              >
                <Picker.Item label="Ligero" value="ligero" />
                <Picker.Item label="Moderado" value="moderado" />
                <Picker.Item label="Agresivo" value="agresivo" />
                <Picker.Item label="Muy agresivo" value="muy_agresivo" />
              </Picker>
            </>
          )}

          {formData.objetivo === 'ganar' && (
            <>
              <Text style={styles.label}>Nivel de ganancia muscular</Text>
              <Picker
                selectedValue={formData.ganarNivel}
                onValueChange={(val) => handleInputChange('ganarNivel', val)}
                style={styles.picker}
                itemStyle={{ color: colors.primary }}
              >
                <Picker.Item label="Ligero" value="ligero" />
                <Picker.Item label="Moderado" value="moderado" />
                <Picker.Item label="Agresivo" value="agresivo" />
              </Picker>
            </>
          )}

          {formData.objetivo === 'mantener' && (
            <>
              <Text style={styles.label}>Nivel de mantenimiento</Text>
              <Picker
                selectedValue={formData.mantenerNivel}
                onValueChange={(val) => handleInputChange('mantenerNivel', val)}
                style={styles.picker}
                itemStyle={{ color: colors.primary }}
              >
                <Picker.Item label="Estándar" value="estandar" />
                <Picker.Item label="Ligero ajuste" value="ligero" />
                <Picker.Item label="Moderado ajuste" value="moderado" />
              </Picker>
            </>
          )}

          {/* Botones */}
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.registerButton}>
            <Text style={styles.registerButtonText}>¿Ya tienes cuenta? Inicia sesión</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, alignSelf: 'center', color: colors.white, fontFamily: fontConfig.title },
  label: { fontSize: 16, marginTop: 10, marginBottom: 5, fontFamily: fontConfig.body, color: colors.white },
  input: { height: 40, borderBottomWidth: 1, borderBottomColor: colors.white, marginBottom: 20, color: colors.white, fontFamily: fontConfig.body },
  picker: { marginBottom: 15, color: colors.white },
  button: { backgroundColor: colors.white, padding: 15, borderRadius: 30, alignItems: 'center', marginTop: 10 },
  buttonText: { color: colors.primary, fontFamily: fontConfig.button, fontWeight: 'bold' },
  registerButton: { marginTop: 15, alignItems: 'center' },
  registerButtonText: { color: colors.white, textDecorationLine: 'underline', fontFamily: fontConfig.body },
});