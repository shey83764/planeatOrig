import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import AnimatedCard from '../components/AnimatedCard';

// Tipado específico para las pantallas de comidas
type MealScreens = 'Desayuno' | 'Almuerzo' | 'Merienda' | 'Cena';

interface Meal {
  name: string;
  description: string;
  image: string;
  screen: MealScreens;
}

// Tipado de navegación
type HomeNavProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavProp>();

  const meals: Meal[] = [
    {
      name: 'Desayuno',
      description: 'Recetas saludables para empezar el día',
      image: 'https://source.unsplash.com/400x200/?breakfast,healthy',
      screen: 'Desayuno',
    },
    {
      name: 'Almuerzo',
      description: 'Comidas equilibradas para tu mediodía',
      image: 'https://source.unsplash.com/400x200/?lunch,healthy',
      screen: 'Almuerzo',
    },
    {
      name: 'Merienda',
      description: 'Snacks y meriendas nutritivas',
      image: 'https://source.unsplash.com/400x200/?snack,healthy',
      screen: 'Merienda',
    },
    {
      name: 'Cena',
      description: 'Platos ligeros y saludables para la noche',
      image: 'https://source.unsplash.com/400x200/?dinner,healthy',
      screen: 'Cena',
    },
  ];

  const handlePress = (screen: MealScreens) => {
    // Usamos switch para que TS sepa exactamente qué string literal se pasa
    switch (screen) {
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

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
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
  container: {
    padding: 16,
  },
});
