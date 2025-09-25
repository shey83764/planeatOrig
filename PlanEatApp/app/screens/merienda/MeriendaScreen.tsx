import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';

type MeriendaNavProp = NativeStackNavigationProp<RootStackParamList, 'Merienda'>;

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: any; // usamos `any` porque `require()` devuelve un número (internamente en RN)
}

const recipes: Recipe[] = [
  { id: 'tostadas-mantequilla-mani', title: 'Tostadas con mantequilla de maní', description: 'Rápido y energético', image: require('../../../assets/merienda/tostadas-mantequilla-mani.jpg') },
  { id: 'yogur-avena-frutas', title: 'Yogur con avena y frutas', description: 'Proteínas y fibra', image: require('../../../assets/merienda/yogur-avena-frutas.jpg') },
  { id: 'smoothie-verde', title: 'Smoothie verde', description: 'Refrescante y nutritivo', image: require('../../../assets/merienda/smoothie-verde.jpg') },
  { id: 'galletas-caseras-integrales', title: 'Galletas caseras integrales', description: 'Snack ligero', image: require('../../../assets/merienda/galletas-caseras-integrales.jpg') },
  { id: 'pan-queso-tomate', title: 'Pan con queso y tomate', description: 'Clásico y rápido', image: require('../../../assets/merienda/pan-queso-tomate.jpg') },
];

export default function MeriendaScreen() {
  const navigation = useNavigation<MeriendaNavProp>();

  const handleRecipePress = (item: Recipe) => {
    switch (item.id) {
      case 'tostadas-mantequilla-mani': navigation.navigate('TostadasMantequillaMani'); break;
      case 'yogur-avena-frutas': navigation.navigate('YogurAvenaFrutas'); break;
      case 'smoothie-verde': navigation.navigate('SmoothieVerde'); break;
      case 'galletas-caseras-integrales': navigation.navigate('GalletasCaserasIntegrales'); break;
      case 'pan-queso-tomate': navigation.navigate('PanQuesoTomate'); break;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handleRecipePress(item)}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFD6A5' },
  card: { marginBottom: 16, borderRadius: 12, overflow: 'hidden', backgroundColor: '#f9f9f9', padding: 12 },
  image: { width: '100%', height: 150, borderRadius: 8, marginBottom: 8 },
  title: { fontSize: 18, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#555' },
});
