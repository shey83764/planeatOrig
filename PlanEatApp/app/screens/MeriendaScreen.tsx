import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { theme } from '../theme';
import { RootStackParamList } from '../navigation/AppNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Recipe = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type RouteParams = {
  mealType: 'Desayuno' | 'Almuerzo' | 'Merienda' | 'Cena';
};

export default function MealRecipesScreen() {
  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { mealType } = route.params as RouteParams;

  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 👇 temporal: recetas dummy
    const dummyRecipes: Recipe[] = [
      { id: '1', title: `${mealType} 1`, description: 'Deliciosa receta', image: 'https://source.unsplash.com/400x200/?food' },
      { id: '2', title: `${mealType} 2`, description: 'Rica y saludable', image: 'https://source.unsplash.com/400x200/?food' },
      { id: '3', title: `${mealType} 3`, description: 'Perfecta para tu día', image: 'https://source.unsplash.com/400x200/?food' },
    ];
    setRecipes(dummyRecipes);
    setLoading(false);
  }, [mealType]);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  return (
    <FlatList
      style={styles.container}
      data={recipes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { recipeId: item.id, title: item.title })}>
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        </TouchableOpacity>
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
});
