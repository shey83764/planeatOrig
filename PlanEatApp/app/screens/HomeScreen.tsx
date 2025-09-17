import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated';
import AnimatedCard from '../components/AnimatedCard';
import { theme } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const userName = 'Sheyla';
  const [greeting, setGreeting] = useState('Hola');

  // Obtener hora según zona horaria LATAM
  useEffect(() => {
    const getHourInTimeZone = (timeZone: string) => {
      const formatter = new Intl.DateTimeFormat('es-AR', {
        timeZone,
        hour12: false,
        hour: 'numeric',
      });
      const parts = formatter.formatToParts(new Date());
      const hourPart = parts.find(p => p.type === 'hour');
      return hourPart ? Number(hourPart.value) : new Date().getHours();
    };

    const hour = getHourInTimeZone('America/Mexico_City');
    if (hour < 12) setGreeting('Buenos días');
    else if (hour < 19) setGreeting('Buenas tardes');
    else setGreeting('Buenas noches');
  }, []);

  const greetingOpacity = useSharedValue(0);
  const greetingTranslateY = useSharedValue(10);

  useEffect(() => {
    greetingOpacity.value = withDelay(
      100,
      withTiming(1, { duration: 500, easing: Easing.out(Easing.exp) })
    );
    greetingTranslateY.value = withDelay(
      100,
      withTiming(0, { duration: 500, easing: Easing.out(Easing.exp) })
    );
  }, []);

  const animatedGreetingStyle = useAnimatedStyle(() => ({
    opacity: greetingOpacity.value,
    transform: [{ translateY: greetingTranslateY.value }],
  }));

  // 🔹 Handler cuando se toca una card
  const handleCardPress = (mealType: 'Desayuno' | 'Merienda' | 'Almuerzo' | 'Cena') => {
    if (mealType === 'Desayuno') {
      navigation.navigate('Desayuno'); // Navega a DesayunoScreen
    } else {
      navigation.navigate('MealRecipes', { mealType }); // Las demás comidas
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Animated.Text style={[styles.greeting, animatedGreetingStyle]}>
        {greeting}, {userName} 👋
      </Animated.Text>

      <Text style={styles.sectionTitle}>Tu plan de hoy</Text>

      <TouchableOpacity onPress={() => handleCardPress('Desayuno')}>
        <AnimatedCard
          index={0}
          title="Desayuno"
          description="Avena con frutas y nueces"
          image="https://source.unsplash.com/400x200/?breakfast,healthy"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCardPress('Merienda')}>
        <AnimatedCard
          index={1}
          title="Merienda"
          description="Yogur con frutos secos"
          image="https://source.unsplash.com/400x200/?snack,healthy"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCardPress('Almuerzo')}>
        <AnimatedCard
          index={2}
          title="Almuerzo"
          description="Quinoa con pollo y verduras"
          image="https://source.unsplash.com/400x200/?lunch,healthy"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCardPress('Cena')}>
        <AnimatedCard
          index={3}
          title="Cena"
          description="Sopa de lentejas"
          image="https://source.unsplash.com/400x200/?dinner,healthy"
        />
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Recetas destacadas</Text>

      <TouchableOpacity onPress={() => handleCardPress('Desayuno')}>
        <AnimatedCard
          index={4}
          title="Smoothie energizante"
          description="Perfecto para empezar tu día"
          image="https://source.unsplash.com/400x200/?smoothie,breakfast"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCardPress('Almuerzo')}>
        <AnimatedCard
          index={5}
          title="Ensalada fresca"
          description="Ligera y deliciosa"
          image="https://source.unsplash.com/400x200/?salad,lunch"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCardPress('Cena')}>
        <AnimatedCard
          index={6}
          title="Sopa reconfortante"
          description="Ideal para la noche"
          image="https://source.unsplash.com/400x200/?soup,dinner"
        />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: theme.colors.background,
  },
  greeting: {
    fontSize: 26,
    fontFamily: theme.fonts.title,
    color: theme.colors.body,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: theme.fonts.subtitle,
    marginTop: 30,
    marginBottom: 15,
    color: theme.colors.title,
  },
});
