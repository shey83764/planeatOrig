import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation/AppNavigator';

type FavoritosNavProp = NativeStackNavigationProp<RootStackParamList, 'Favoritos'>;
type FavoritosRouteProp = RouteProp<RootStackParamList, 'Favoritos'>;

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

// Misma lista de recetas que DesayunoScreen
const recipes: Recipe[] = [
  {
    id: 'tostadas-palha-huevo',
    title: 'Tostadas integrales con palta y huevo',
    description: 'Nutritiva para empezar el día',
    image: require('../../assets/desayunos/tostadas-palta-huevo.jpg'),
  },
  {
    id: 'avena-frutas-frutos-secos',
    title: 'Avena con frutas y frutos secos',
    description: 'Energía y fibra para la mañana',
    image: require('../../assets/desayunos/avena.jpg'),
  },
  {
    id: 'yogur-granola-frutos-rojos',
    title: 'Yogur natural con granola y frutos rojos',
    description: 'Proteínas y antioxidantes naturales',
    image: require('../../assets/desayunos/yogur.jpg'),
  },
  {
    id: 'batido-banana-avena-yogur',
    title: 'Batido de banana, avena y yogur',
    description: 'Refrescante y saciante',
    image: require('../../assets/desayunos/batido.jpg'),
  },
  {
    id: 'pan-ricota-miel',
    title: 'Pan con ricota y miel',
    description: 'Dulce y nutritivo para comenzar el día',
    image: require('../../assets/desayunos/pan.jpg'),
  },
];

export default function FavoritosScreen() {
  const navigation = useNavigation<FavoritosNavProp>();
  const route = useRoute<FavoritosRouteProp>();

  // IDs de favoritos recibidos desde params
  const initialFavoritosIds = route.params?.favoritosIds || [];
  const [favoritosIds, setFavoritosIds] = useState<string[]>(initialFavoritosIds);

  // Filtrar recetas favoritas
  const favoritas = recipes.filter(r => favoritosIds.includes(r.id));

  // Alternar favoritos (quitar)
  const toggleFavorito = (id: string) => {
    setFavoritosIds(prev => prev.filter(fav => fav !== id));
  };

  const handleRecipePress = (item: Recipe) => {
    // Ejemplo: navegar a la pantalla de detalle (modifica según tus pantallas)
    navigation.navigate('Desayuno', { mealType: 'Desayuno' });
  };

  if (favoritas.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyText}>No hay recetas favoritas aún 💔</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoritas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleRecipePress(item)}
          >
            <Image source={item.image} style={styles.image} />
            
            {/* Corazón para quitar favorito */}
            <TouchableOpacity
              style={styles.favButton}
              onPress={() => toggleFavorito(item.id)}
            >
              <Ionicons name="heart" size={28} color="red" />
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
  container: { flex: 1, padding: 16, backgroundColor: '#B9FBC0' },
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
  emptyText: { fontSize: 16, color: '#555', textAlign: 'center', marginTop: 50 },
});
