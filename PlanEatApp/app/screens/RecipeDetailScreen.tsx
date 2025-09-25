// app/screens/RecipeDetailScreen.tsx
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { allRecipes, Recipe } from '../data/recipes';

interface RouteParams {
  recipeId: string;
  title: string;
}

const RecipeDetailScreen = () => {
  const route = useRoute();
  const { recipeId } = route.params as RouteParams;

  // Buscar la receta correspondiente
  const recipe: Recipe | undefined = allRecipes.find(r => r.id === recipeId);

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Receta no encontrada 😅</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={recipe.image} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>

      {recipe.ingredients.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ingredientes</Text>
          {recipe.ingredients.map((item, index) => (
            <Text key={index} style={styles.textItem}>• {item}</Text>
          ))}
        </View>
      )}

      {recipe.procedure.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preparación</Text>
          {recipe.procedure.map((step, index) => (
            <Text key={index} style={styles.textItem}>
              {index + 1}. {step}
            </Text>
          ))}
        </View>
      )}

      {recipe.nutrition && (
        <View style={styles.nutritionCard}>
          <Text style={styles.sectionTitle}>Información nutricional</Text>
          <View style={styles.nutritionRow}>
            <Text style={styles.nutritionLabel}>Carbohidratos:</Text>
            <Text style={styles.nutritionValue}>{recipe.nutrition.carbohydrates} g</Text>
          </View>
          {recipe.nutrition.sugars !== undefined && (
            <View style={styles.nutritionRow}>
              <Text style={styles.nutritionLabel}>Azúcares:</Text>
              <Text style={styles.nutritionValue}>{recipe.nutrition.sugars} g</Text>
            </View>
          )}
          {recipe.nutrition.fiber !== undefined && (
            <View style={styles.nutritionRow}>
              <Text style={styles.nutritionLabel}>Fibra:</Text>
              <Text style={styles.nutritionValue}>{recipe.nutrition.fiber} g</Text>
            </View>
          )}
          <View style={styles.nutritionRow}>
            <Text style={styles.nutritionLabel}>Proteínas:</Text>
            <Text style={styles.nutritionValue}>{recipe.nutrition.proteins} g</Text>
          </View>
          <View style={styles.nutritionRow}>
            <Text style={styles.nutritionLabel}>Grasas:</Text>
            <Text style={styles.nutritionValue}>{recipe.nutrition.fats} g</Text>
          </View>
          <View style={styles.nutritionRow}>
            <Text style={styles.nutritionLabel}>Calorías:</Text>
            <Text style={styles.nutritionValue}>{recipe.nutrition.calories} kcal</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 30,
    paddingBottom: 24,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  section: {
    width: '100%',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  textItem: {
    fontSize: 16,
    marginBottom: 4,
  },
  nutritionCard: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  nutritionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  nutritionLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  nutritionValue: {
    fontSize: 16,
    fontWeight: '400',
  },
});

export default RecipeDetailScreen;
