// 📁 app/screens/RegisterScreen.tsx
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
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const handleRegister = async () => {
    if (!formData.nombre || !formData.apellido || !formData.email || !formData.password || !formData.confirmPassword) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      console.log("Payload que se envía:", formData);

      const response = await axios.post("http://192.168.1.103:3000/api/v1/auth/register", {
        nombre: formData.nombre.trim() || null,
        apellido: formData.apellido.trim() || null,
        email: formData.email.trim() || null,
        password: formData.password,
        sexo: formData.sexo || null,
        edad: formData.edad ? Number(formData.edad) : null,
        peso: formData.peso ? Number(formData.peso) : null,
        altura: formData.altura ? Number(formData.altura) : null,
        actividad: formData.actividad || null,
        objetivo: formData.objetivo || null,
        deficit: formData.deficit || null,
        ganarNivel: formData.ganarNivel || null,
        mantenerNivel: formData.mantenerNivel || null,
      });

      console.log("Respuesta del backend:", response.data);

      if (response.status !== 200 && response.status !== 201) {
        alert(response.data.message || "Error al registrar usuario");
        return;
      }

      // 🔹 Guardar datos del usuario en AsyncStorage
      const usuario = {
        nombre: formData.nombre,
        apellido: formData.apellido,
        correo: formData.email,
        sexo: formData.sexo,
      };
      await AsyncStorage.setItem('user', JSON.stringify(usuario));

      // 🔹 Registro exitoso, navegamos al Home (MainDrawer)
     navigation.reset({
  index: 0,
  routes: [{ name: "MainDrawer" }],
});

    } catch (error: any) {
      console.error("Error al registrar usuario:", error);
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Error al registrar usuario. Revisa la conexión al servidor.");
      }
    }
  };

  return (
    <LinearGradient colors={[colors.lightBackground, colors.primary]} style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView contentContainerStyle={{ padding: 30 }}>
          <Text style={styles.title}>Registro</Text>

          {/* Campos básicos */}
          <TextInput label="Nombre" value={formData.nombre} onChangeText={(val) => handleInputChange('nombre', val)} style={styles.input} />
          <TextInput label="Apellido" value={formData.apellido} onChangeText={(val) => handleInputChange('apellido', val)} style={styles.input} />
          <TextInput label="Email" value={formData.email} onChangeText={(val) => handleInputChange('email', val)} keyboardType="email-address" style={styles.input} />
          <TextInput label="Contraseña" value={formData.password} onChangeText={(val) => handleInputChange('password', val)} secureTextEntry style={styles.input} />
          <TextInput label="Confirmar Contraseña" value={formData.confirmPassword} onChangeText={(val) => handleInputChange('confirmPassword', val)} secureTextEntry style={styles.input} />

          {/* Sexo */}
          <Text style={styles.label}>Sexo</Text>
          <Picker selectedValue={formData.sexo} onValueChange={(val) => handleInputChange('sexo', val)} style={styles.picker}>
            <Picker.Item label="Selecciona sexo" value="" />
            <Picker.Item label="Mujer" value="F" />
            <Picker.Item label="Hombre" value="M" />
          </Picker>

          {/* Edad, peso y altura */}
          <TextInput label="Edad" value={formData.edad} onChangeText={(val) => handleInputChange('edad', val)} keyboardType="numeric" style={styles.input} />
          <TextInput label="Peso (kg)" value={formData.peso} onChangeText={(val) => handleInputChange('peso', val)} keyboardType="numeric" style={styles.input} />
          <TextInput label="Altura (cm)" value={formData.altura} onChangeText={(val) => handleInputChange('altura', val)} keyboardType="numeric" style={styles.input} />

          {/* Nivel de actividad */}
          <Text style={styles.label}>Nivel de actividad</Text>
          <Picker selectedValue={formData.actividad} onValueChange={(val) => handleInputChange('actividad', val)} style={styles.picker}>
            <Picker.Item label="Selecciona nivel" value="" />
            <Picker.Item label="Sedentario" value="1.2" />
            <Picker.Item label="Ligero" value="1.375" />
            <Picker.Item label="Moderado" value="1.55" />
            <Picker.Item label="Intenso" value="1.725" />
            <Picker.Item label="Muy intenso" value="1.9" />
          </Picker>

          {/* Objetivo */}
          <Text style={styles.label}>Objetivo</Text>
          <Picker selectedValue={formData.objetivo} onValueChange={(val) => handleInputChange('objetivo', val)} style={styles.picker}>
            <Picker.Item label="Selecciona objetivo" value="" />
            <Picker.Item label="Perder grasa" value="perder" />
            <Picker.Item label="Ganar masa muscular" value="ganar" />
            <Picker.Item label="Mantenimiento" value="mantener" />
          </Picker>

          {/* Subopciones según objetivo */}
          {formData.objetivo === 'perder' && (
            <>
              <Text style={styles.label}>Déficit calórico</Text>
              <Picker selectedValue={formData.deficit} onValueChange={(val) => handleInputChange('deficit', val)} style={styles.picker}>
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
              <Picker selectedValue={formData.ganarNivel} onValueChange={(val) => handleInputChange('ganarNivel', val)} style={styles.picker}>
                <Picker.Item label="Ligero" value="ligero" />
                <Picker.Item label="Moderado" value="moderado" />
                <Picker.Item label="Agresivo" value="agresivo" />
              </Picker>
            </>
          )}
          {formData.objetivo === 'mantener' && (
            <>
              <Text style={styles.label}>Nivel de mantenimiento</Text>
              <Picker selectedValue={formData.mantenerNivel} onValueChange={(val) => handleInputChange('mantenerNivel', val)} style={styles.picker}>
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
