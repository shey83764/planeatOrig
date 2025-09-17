import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { theme } from '../theme';
// import { API } from '../api_conex/api';

type Recipe = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export default function DesayunoScreen() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchRecipes = async () => {
    try {
      // Aquí va tu fetch cuando la API esté lista
      // const res = await fetch(`${API}/recipes?mealType=Desayuno`);
      // const data = await res.json();
      // setRecipes(data);
    } catch (error) {
      console.error('Error fetching breakfast recipes:', error);
    } finally {
      setLoading(false); // Esto hace que el loader desaparezca aunque la API no esté
    }
  };

  fetchRecipes();
}, []);

  if (loading) return <ActivityIndicator size="large" style={{ marginTop: 50 }} />;

  if (!recipes.length)
    return (
      <View style={styles.container}>
        <Text style={styles.noRecipes}>No hay recetas de desayuno</Text>
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
