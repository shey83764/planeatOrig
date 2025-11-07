import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../navigation/AppNavigator';

type CenaNavProp = NativeStackNavigationProp<RootStackParamList, 'Cena'>;

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: any;
}

const recipes: Recipe[] = [
  { id: 'tortilla-espinaca-papas', title: 'Tortilla de espinaca y papas', description: 'Clásico y nutritivo', image: require('../../../assets/cena/tortilla-espinaca-papas.jpg') },
  { id: 'sopa-verduras-huevo', title: 'Sopa de verduras con huevo', description: 'Ligera y caliente', image: require('../../../assets/cena/sopa-verduras-huevo.jpg') },
  { id: 'pescado-batata', title: 'Pescado al horno con batata', description: 'Proteínas y fibra', image: require('../../../assets/cena/pescado-batata.jpg') },
  { id: 'ensalada-garbanzos', title: 'Ensalada tibia de garbanzos', description: 'Rápida y saludable', image: require('../../../assets/cena/ensalada-garbanzos.jpg') },
  { id: 'omelette-champinones', title: 'Omelette de champiñones', description: 'Proteínas y vegetales', image: require('../../../assets/cena/omelette-champinones.jpg') },
];

export default function CenaScreen() {
  const navigation = useNavigation<CenaNavProp>();
  const [favoritos, setFavoritos] = useState<string[]>([]);

  const toggleFavorito = (id: string) => {
    setFavoritos(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const handleRecipePress = (item: Recipe) => {
    switch (item.id) {
      case 'tortilla-espinaca-papas': navigation.navigate('TortillaEspinacaPapas'); break;
      case 'sopa-verduras-huevo': navigation.navigate('SopaVerdurasHuevo'); break;
      case 'pescado-batata': navigation.navigate('PescadoBatata'); break;
      case 'ensalada-garbanzos': navigation.navigate('EnsaladaGarbanzos'); break;
      case 'omelette-champinones': navigation.navigate('OmeletteChampinones'); break;
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
  container: { flex: 1, padding: 16, backgroundColor: '#BDB2FF' },
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
    
