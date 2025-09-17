// 📁 app/forms/registro/RegistroUsuario.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { registerUser } from '../api_conex/registroApi';
import { colors } from '../theme/colors';
import { fontConfig } from '../theme/fonts';

const RegistroUsuario: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validarYEnviar = async () => {
    if (!nombre || !apellido || !email || !password) {
      Alert.alert('Campos incompletos', 'Por favor completá todos los campos.');
      return;
    }

    try {
      const data = await registerUser({
        firstName: nombre,
        lastName: apellido,
        email,
        password,
      });
      Alert.alert('Registro exitoso', data.mensaje || 'Usuario registrado');
      // Navegar al login después de registrarse
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo registrar el usuario');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Nombre"
        placeholderTextColor={colors.gray}
      />

      <Text style={styles.label}>Apellido</Text>
      <TextInput
        style={styles.input}
        value={apellido}
        onChangeText={setApellido}
        placeholder="Apellido"
        placeholderTextColor={colors.gray}
      />

      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor={colors.gray}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        placeholderTextColor={colors.gray}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={validarYEnviar}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginLink}>
        <Text style={styles.loginText}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: colors.background },
  label: { fontSize: 16, fontFamily: fontConfig.body, marginBottom: 4, color: colors.text },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontFamily: fontConfig.body,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { color: colors.white, fontFamily: fontConfig.button, fontWeight: 'bold' },
  loginLink: { marginTop: 15, alignItems: 'center' },
  loginText: { color: colors.primary, fontFamily: fontConfig.body },
});

export default RegistroUsuario;
