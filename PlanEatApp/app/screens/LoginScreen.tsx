import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors } from '../theme/colors';
import { fontConfig, useAppFonts } from '../theme/fonts';
import { RootStackParamList } from '../navigation/AppNavigator';

const SimpleCheckbox: React.FC<{ checked: boolean; onChange: (value: boolean) => void }> = ({ checked, onChange }) => (
  <TouchableOpacity
    onPress={() => onChange(!checked)}
    style={[styles.checkboxBox, { backgroundColor: checked ? colors.primary : 'transparent' }]}
  />
);

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const fontsLoaded = useAppFonts();
  if (!fontsLoaded) return null;

  const handleLogin = async () => {
    if (email && password) {
      navigation.navigate('MainDrawer'); // Login exitoso
    } else {
      Alert.alert('Error', 'Por favor ingresa email y contraseña');
    }
  };

  return (
    <LinearGradient colors={[colors.lightBackground, colors.primary]} style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoShape} />
        <Text style={styles.logoText}>PlanEat</Text>
      </View>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholderTextColor={colors.white}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor={colors.white}
      />

      <View style={styles.checkboxContainer}>
        <SimpleCheckbox checked={rememberMe} onChange={setRememberMe} />
        <Text style={styles.checkboxLabel}>Recordarme</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      {/* Botón para ir a registro */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.registerButtonText}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>

      <Text style={styles.extraText}>¿Olvidaste tu contraseña?</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 30 },
  logoContainer: { alignItems: 'center', marginBottom: 40 },
  logoShape: { width: 50, height: 50, borderWidth: 4, borderColor: colors.white, transform: [{ rotate: '45deg' }], marginBottom: 10 },
  logoText: { color: colors.white, fontSize: 24, fontFamily: fontConfig.title },
  input: { height: 40, borderBottomWidth: 1, borderBottomColor: colors.white, marginBottom: 20, color: colors.white, fontFamily: fontConfig.body },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  checkboxBox: { width: 20, height: 20, borderWidth: 1, borderColor: colors.white, marginRight: 8 },
  checkboxLabel: { color: colors.white, fontFamily: fontConfig.body },
  button: { backgroundColor: colors.white, padding: 15, borderRadius: 30, alignItems: 'center', marginTop: 10 },
  buttonText: { color: colors.primary, fontFamily: fontConfig.button, fontWeight: 'bold' },
  registerButton: { marginTop: 15, alignItems: 'center' },
  registerButtonText: { color: colors.white, textDecorationLine: 'underline', fontFamily: fontConfig.body },
  extraText: { textAlign: 'center', marginTop: 15, color: colors.white, fontFamily: fontConfig.body },
});

export default LoginScreen;
