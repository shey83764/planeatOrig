import React, { useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  withTiming, 
  withRepeat, 
  withSequence, 
  Easing 
} from 'react-native-reanimated';
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
  // ⚠️ Hooks siempre al inicio
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [rememberMe, setRememberMe] = React.useState(false);

  const fontsLoaded = useAppFonts();

  // ⚠️ Animación del logo
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

  const handleLogin = async () => {
    if (email && password) {
      navigation.navigate('MainDrawer'); // Login exitoso
    } else {
      Alert.alert('Error', 'Por favor ingresa email y contraseña');
    }
  };

  // ⚠️ Placeholder mientras cargan las fuentes
  if (!fontsLoaded) {
    return (
      <LinearGradient colors={[colors.lightBackground, colors.primary]} style={styles.container}>
        <Text style={{ color: 'white', textAlign: 'center', marginTop: 50 }}>Cargando fuentes...</Text>
      </LinearGradient>
    );
  }

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
  logoImage: { 
    width: 160, 
    height: 160, 
    borderRadius: 80, 
    marginBottom: 10, 
    borderWidth: 3, 
    borderColor: colors.white,
  },
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