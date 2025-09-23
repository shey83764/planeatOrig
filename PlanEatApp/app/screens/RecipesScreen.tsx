import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RecipesStackParamList } from '../navigation/RecipesStackNavigator';
import AnimatedCard from '../components/AnimatedCard';

type NavigationProp = NativeStackNavigationProp<RecipesStackParamList, 'RecipesList'>;

type Recipe = {
  id: string;
  title: string;
  description?: string;
  image?: string;
};

type Meal = {
  name: string;
  recipes: Recipe[];
};

export default function RecipesScreen() {
  const navigation = useNavigation<NavigationProp>();

  const meals: Meal[] = [
    {
      name: 'Desayuno',
      recipes: [
        { id: 'd1', title: 'Tostadas integrales con palta y huevo' },
        { id: 'd2', title: 'Avena con frutas y frutos secos' },
        { id: 'd3', title: 'Yogur natural con granola y frutos rojos' },
        { id: 'd4', title: 'Batido de banana, avena y yogur' },
        { id: 'd5', title: 'Pan con ricota y miel' },
      ],
    },
    {
      name: 'Almuerzo',
      recipes: [
        { id: 'a1', title: 'Ensalada de arroz integral y pollo' },
        { id: 'a2', title: 'Arroz integral con filet de merluza y vegetales' },
        { id: 'a3', title: 'Wrap integral de atún' },
        { id: 'a4', title: 'Lentejas guisadas con vegetales' },
        { id: 'a5', title: 'Pasta integral con salsa de tomate y queso' },
      ],
    },
    {
      name: 'Merienda',
      recipes: [
        { id: 'm1', title: 'Tostadas con mantequilla de maní' },
        { id: 'm2', title: 'Yogur con avena y frutas' },
        { id: 'm3', title: 'Smoothie verde' },
        { id: 'm4', title: 'Galletas caseras integrales' },
        { id: 'm5', title: 'Pan con queso y tomate' },
      ],
    },
    {
      name: 'Cena',
      recipes: [
        { id: 'c1', title: 'Tortilla de espinaca y papas' },
        { id: 'c2', title: 'Sopa de verduras con huevo' },
        { id: 'c3', title: 'Pescado al horno con batata' },
        { id: 'c4', title: 'Ensalada tibia de garbanzos' },
        { id: 'c5', title: 'Omelette de champiñones' },
      ],
    },
  ];

  const handlePress = (recipe: Recipe) => {
    navigation.navigate('RecipeDetail', { recipeId: recipe.id, title: recipe.title });
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {meals.map((meal, mealIndex) =>
        meal.recipes.map((recipe, index) => (
          <AnimatedCard
            key={recipe.id}
            index={mealIndex * 5 + index} // animación escalonada general
            title={recipe.title}
            description={`Receta de ${meal.name.toLowerCase()}`}
            image={`https://source.unsplash.com/400x200/?food,${recipe.title}`}
            onPress={() => handlePress(recipe)}
          />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
