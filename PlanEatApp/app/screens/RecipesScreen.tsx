import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';

type Recipe = {
  id: string;
  title: string;
  description: string;
};

const recipesData: Recipe[] = [
  { id: '1', title: 'Ensalada César', description: 'Fresca y ligera con aderezo clásico.' },
  { id: '2', title: 'Pasta al Pesto', description: 'Pasta con salsa de albahaca y nueces.' },
  { id: '3', title: 'Tacos Veganos', description: 'Rellenos de vegetales y salsa picante.' },
  // Agregá más recetas si querés
];

export default function RecipesScreen() {
  const renderItem = ({ item }: { item: Recipe }) => (
    <View style={styles.recipeCard}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={recipesData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  recipeCard: {
  backgroundColor: '#dc9d9dff',
  padding: 16,
  marginBottom: 10, // bajé el margen para que quede más centrado visualmente
  borderRadius: 12,
  shadowColor: '#000',
  shadowOpacity: 0.15,
  shadowRadius: 8,
  shadowOffset: { width: 0, height: 0 },
  elevation: 4, // para Android
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});
