import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../navigation/AppNavigator';

type AlmuerzoNavProp = NativeStackNavigationProp<RootStackParamList, 'Almuerzo'>;

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: any;
}

const recipes: Recipe[] = [
  { id: 'ensalada-arroz-pollo', title: 'Ensalada de arroz integral y pollo', description: 'Fresca y ligera', image: require('../../../assets/almuerzo/ensalada-arroz-pollo.jpg') },
  { id: 'arroz-merluza-vegetales', title: 'Arroz integral con filet de merluza y vegetales', description: 'Proteínas y fibra', image: require('../../../assets/almuerzo/arroz-merluza-vegetales.jpg') },
  { id: 'wrap-atun', title: 'Wrap integral de atún', description: 'Rápido y saludable', image: require('../../../assets/almuerzo/wrap-atun.jpg') },
  { id: 'lentejas-vegetales', title: 'Lentejas guisadas con vegetales', description: 'Caliente y nutritivo', image: require('../../../assets/almuerzo/lentejas-vegetales.jpg') },
  { id: 'pasta-salsa-queso', title: 'Pasta integral con salsa de tomate y queso', description: 'Rápido y reconfortante', image: require('../../../assets/almuerzo/pasta-salsa-queso.jpg') },
];

export default function AlmuerzoScreen() {
  const navigation = useNavigation<AlmuerzoNavProp>();

  const [favoritos, setFavoritos] = useState<string[]>([]);

  const toggleFavorito = (id: string) => {
    setFavoritos(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const handleRecipePress = (item: Recipe) => {
    switch (item.id) {
      case 'ensalada-arroz-pollo': navigation.navigate('EnsaladaArrozPollo'); break;
      case 'arroz-merluza-vegetales': navigation.navigate('ArrozMerluzaVegetales'); break;
      case 'wrap-atun': navigation.navigate('WrapAtun'); break;
      case 'lentejas-vegetales': navigation.navigate('LentejasVegetales'); break;
      case 'pasta-salsa-queso': navigation.navigate('PastaSalsaQueso'); break;
    }
  };

  return (
    <View style={styles.container}>
      {/* Botón para ver favoritos */}
      <TouchableOpacity
        style={styles.verFavoritosButton}
        onPress={() => navigation.navigate('Favoritos', { favoritosIds: favoritos })}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Ver Favoritos ❤️</Text>
      </TouchableOpacity>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handleRecipePress(item)}>
            <Image source={item.image} style={styles.image} />

            {/* Corazón para marcar favorito */}
            <TouchableOpacity
              style={styles.favButton}
              onPress={() => toggleFavorito(item.id)}
            >
              <Ionicons
                name={favoritos.includes(item.id) ? 'heart' : 'heart-outline'}
                size={28}
                color={favoritos.includes(item.id) ? 'red' : 'gray'}
              />
            </TouchableOpacity>

            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFF1B5' },
  verFavoritosButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  card: { marginBottom: 16, borderRadius: 12, overflow: 'hidden', backgroundColor: '#f9f9f9', padding: 12 },
  image: { width: '100%', height: 150, borderRadius: 8, marginBottom: 8 },
  title: { fontSize: 18, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#555' },
  favButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    padding: 4,
  },
});
