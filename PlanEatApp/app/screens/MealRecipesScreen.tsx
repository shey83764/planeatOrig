import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { theme } from '../theme';
import { apiFetch } from '../api_conex/api'; // usamos la función genérica

type Recipe = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type RouteParams = {
  mealType: 'Desayuno' | 'Almuerzo' | 'Merienda' | 'Cena';
};

export default function MealRecipesScreen() {
  const route = useRoute();
  const { mealType } = route.params as RouteParams;

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // usamos apiFetch, que ya maneja la URL base y headers
        const data: Recipe[] = await apiFetch(`/recipes?mealType=${mealType}`);
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [mealType]);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  if (!recipes.length)
    return (
      <View style={styles.container}>
        <Text style={styles.noRecipes}>No hay recetas para {mealType}</Text>
      </View>
    );

  return (
    <FlatList
      style={styles.container}
      data={recipes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: theme.colors.background },
  card: { marginBottom: 20, backgroundColor: theme.colors.surface, borderRadius: 12, overflow: 'hidden' },
  image: { width: '100%', height: 150 },
  textContainer: { padding: 10 },
  title: { fontSize: 18, fontFamily: theme.fonts.subtitle, color: theme.colors.title },
  description: { fontSize: 14, fontFamily: theme.fonts.body, color: theme.colors.body, marginTop: 5 },
  noRecipes: { fontSize: 16, fontFamily: theme.fonts.body, color: theme.colors.body, textAlign: 'center', marginTop: 50 },
});
