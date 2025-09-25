import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View, ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LottieView from "lottie-react-native";
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withSequence, withTiming, Easing, withSpring } from 'react-native-reanimated';

import { RootStackParamList } from '../navigation/AppNavigator';
import AnimatedCard from '../components/AnimatedCard';

import sunAnimation from '../../assets/lottie/sun.json';
import cloudAnimation from '../../assets/lottie/cloud.json';
import moonAnimation from '../../assets/lottie/moon.json';

type MealScreens = 'Desayuno' | 'Almuerzo' | 'Merienda' | 'Cena';

interface Meal {
  name: string;
  description: string;
  image: ImageSourcePropType;
  screen: MealScreens;
}

type HomeNavProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavProp>();

  const meals: Meal[] = [
    { name: 'Desayuno', description: 'Recetas saludables para empezar el día', image: require('../../assets/desayuno.jpg'), screen: 'Desayuno' },
    { name: 'Almuerzo', description: 'Comidas equilibradas para tu mediodía', image: require('../../assets/almuerzo.jpg'), screen: 'Almuerzo' },
    { name: 'Merienda', description: 'Snacks y meriendas nutritivas', image: require('../../assets/merienda.jpg'), screen: 'Merienda' },
    { name: 'Cena', description: 'Platos ligeros y saludables para la noche', image: require('../../assets/cena.jpg'), screen: 'Cena' },
  ];

  // 🔧 Type-safe handlePress sin genéricos
  const handlePress = (screen: MealScreens) => {
    switch(screen) {
      case 'Desayuno':
        navigation.navigate('Desayuno', { mealType: 'Desayuno' });
        break;
      case 'Almuerzo':
        navigation.navigate('Almuerzo', { mealType: 'Almuerzo' });
        break;
      case 'Merienda':
        navigation.navigate('Merienda', { mealType: 'Merienda' });
        break;
      case 'Cena':
        navigation.navigate('Cena', { mealType: 'Cena' });
        break;
    }
  };

  // Saludo según hora Argentina
  const hour = new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires', hour: '2-digit', hour12: false });
  const hourNum = parseInt(hour);

  let greeting = '';
  let animationSource: any = sunAnimation;
  let emoji = '';

  if (hourNum >= 6 && hourNum < 12) { greeting = '¡Buenos días!'; animationSource = sunAnimation; emoji = '🌞'; }
  else if (hourNum >= 12 && hourNum < 18) { greeting = '¡Buenas tardes!'; animationSource = cloudAnimation; emoji = '🌤️'; }
  else { greeting = '¡Buenas noches!'; animationSource = moonAnimation; emoji = '🌙'; }

  // Animación del emoji
  const scale = useSharedValue(0);
  useEffect(() => {
    scale.value = withSpring(1, { damping: 5, stiffness: 150 });
    scale.value = withRepeat(
      withSequence(
        withTiming(1.2, { duration: 600, easing: Easing.inOut(Easing.ease) }),
        withTiming(1, { duration: 600, easing: Easing.inOut(Easing.ease) })
      ),
      -1,
      true
    );
  }, []);

  const animatedEmojiStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.greetingContainer}>
        <LottieView source={animationSource} autoPlay loop style={styles.lottie} />
        <Text style={styles.greeting}>
          {greeting}{' '}
          <Animated.Text style={animatedEmojiStyle}>{emoji}</Animated.Text>
        </Text>
      </View>

      {meals.map((meal, index) => (
        <AnimatedCard
          key={meal.name}
          index={index}
          title={meal.name}
          description={meal.description}
          image={meal.image}
          onPress={() => handlePress(meal.screen)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  greetingContainer: { marginTop: 60, marginBottom: 20, alignItems: 'center' },
  lottie: { width: 80, height: 80 },
  greeting: { fontSize: 28, fontWeight: 'bold', marginTop: 10 },
});
