import React from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RecipesStackParamList } from '../navigation/RecipesStackNavigator';

type NavigationProp = NativeStackNavigationProp<RecipesStackParamList, 'RecipesList'>;

type Recipe = {
  id: string;
  title: string;
  description: string;
};

const recipesData: Recipe[] = [
  { id: '1', title: 'Ensalada César', description: 'Fresca y ligera con aderezo clásico.' },
  { id: '2', title: 'Pasta al Pesto', description: 'Pasta con salsa de albahaca y nueces.' },
  { id: '3', title: 'Tacos Veganos', description: 'Rellenos de vegetales y salsa picante.' },
];

export default function RecipesScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = (item: Recipe) => {
    navigation.navigate('RecipeDetail', { recipeId: item.id, title: item.title });
  };

  const renderItem = ({ item }: { item: Recipe }) => (
    <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={recipesData}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#dc9d9dff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
