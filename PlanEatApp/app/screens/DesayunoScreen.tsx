import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';

type DesayunoNavProp = NativeStackNavigationProp<RootStackParamList, 'Desayuno'>;

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
}

const recipes: Recipe[] = [
  {
    id: 'tostadas-palha-huevo',
    title: 'Tostadas integrales con palta y huevo',
    description: 'Nutritiva para empezar el día',
    image: 'https://source.unsplash.com/400x200/?toast,avocado,egg',
  },
];

export default function DesayunoScreen() {
  const navigation = useNavigation<DesayunoNavProp>();

  const handleRecipePress = (item: Recipe) => {
    navigation.navigate('RecipeDetail', { recipeId: item.id, title: item.title });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handleRecipePress(item)}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  card: { marginBottom: 16, borderRadius: 12, overflow: 'hidden', backgroundColor: '#f9f9f9', padding: 12 },
  image: { width: '100%', height: 150, borderRadius: 8, marginBottom: 8 },
  title: { fontSize: 18, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#555' },
});
