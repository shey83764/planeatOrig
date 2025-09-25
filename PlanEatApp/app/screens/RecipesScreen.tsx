// app/screens/RecipesScreen.tsx
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AnimatedCard from '../components/AnimatedCard';
import { RootStackParamList } from '../navigation/AppNavigator';
import { allRecipes, Recipe } from '../data/recipes';

// Tipo de navegación para esta pantalla
type RecipesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'RecipesList'
>;

const RecipesScreen = () => {
  const navigation = useNavigation<RecipesScreenNavigationProp>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {allRecipes.map((recipe: Recipe, index: number) => (
        <AnimatedCard
          key={recipe.id}
          title={recipe.title}
          description={recipe.description || ''}
          image={recipe.image}
          index={index}
          onPress={() =>
            navigation.navigate('RecipeDetail', {
              recipeId: recipe.id,
              title: recipe.title,
            })
          }
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 20,
  },
});

export default RecipesScreen;
