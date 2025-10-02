// 📁 app/screens/LoginScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withRepeat, withSequence, withTiming, Easing } from 'react-native-reanimated';
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

  // Animación del logo
  const scale = useSharedValue(0);
  useEffect(() => {
    scale.value = withSpring(1, { damping: 5, stiffness: 150 });
    scale.value = withRepeat(
      withSequence(
        withTiming(1.05, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
        withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  // 🔑 handleLogin integrado
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Por favor completa email y contraseña");
      return;
    }

    try {
      console.log("Datos que se envían al backend:", { email, password });

      const response = await fetch("http://192.168.1.103:3000/api/v1/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log("Error en login:", data);
        Alert.alert(data.message || "Error al iniciar sesión");
        return;
      }

      Alert.alert("Login exitoso");
      console.log("Token recibido:", data.token);
      // Aquí podrías guardar el token en AsyncStorage o en Context
     navigation.reset({index: 0,routes: [{ name: "MainDrawer" }],});


    } catch (error) {
      console.error("Error en login:", error);
      Alert.alert("Error al iniciar sesión. Revisa la conexión al servidor.");
    }
  };

  return (
    <LinearGradient colors={[colors.lightBackground, colors.primary]} style={styles.container}>
      <View style={styles.logoContainer}>
        <Animated.Image 
          source={require('../../assets/PlanEat.png')} 
          style={[styles.logoImage, animatedStyle]} 
          resizeMode="cover"
        />
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

      <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerButtonText}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>

      <Text style={styles.extraText}>¿Olvidaste tu contraseña?</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 30 },
  logoContainer: { alignItems: 'center', marginBottom: 40 },
  logoImage: { width: 160, height: 160, borderRadius: 80, marginBottom: 10, borderWidth: 3, borderColor: colors.white },
  logoText: { color: colors.white, fontSize: 28, fontFamily: fontConfig.title },
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