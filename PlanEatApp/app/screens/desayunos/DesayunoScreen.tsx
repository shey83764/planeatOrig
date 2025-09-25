import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';

type DesayunoNavProp = NativeStackNavigationProp<RootStackParamList, 'Desayuno'>;

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

// Recetas con imágenes locales usando require con rutas correctas
const recipes: Recipe[] = [
  {
    id: 'tostadas-palha-huevo',
    title: 'Tostadas integrales con palta y huevo',
    description: 'Nutritiva para empezar el día',
    image: require('../../../assets/desayunos/tostadas-palta-huevo.jpg'),
  },
  {
    id: 'avena-frutas-frutos-secos',
    title: 'Avena con frutas y frutos secos',
    description: 'Energía y fibra para la mañana',
    image: require('../../../assets/desayunos/avena.jpg'),
  },
  {
    id: 'yogur-granola-frutos-rojos',
    title: 'Yogur natural con granola y frutos rojos',
    description: 'Proteínas y antioxidantes naturales',
    image: require('../../../assets/desayunos/yogur.jpg'),
  },
  {
    id: 'batido-banana-avena-yogur',
    title: 'Batido de banana, avena y yogur',
    description: 'Refrescante y saciante',
    image: require('../../../assets/desayunos/batido.jpg'),
  },
  {
    id: 'pan-ricota-miel',
    title: 'Pan con ricota y miel',
    description: 'Dulce y nutritivo para comenzar el día',
    image: require('../../../assets/desayunos/pan.jpg'),
  },
];

export default function DesayunoScreen() {
  const navigation = useNavigation<DesayunoNavProp>();

  const handleRecipePress = (item: Recipe) => {
    switch (item.id) {
      case 'tostadas-palha-huevo':
        navigation.navigate('TostadasPaltaHuevo');
        break;
      case 'avena-frutas-frutos-secos':
        navigation.navigate('AvenaFrutas');
        break;
      case 'yogur-granola-frutos-rojos':
        navigation.navigate('YogurGranola');
        break;
      case 'batido-banana-avena-yogur':
        navigation.navigate('BatidoBanana');
        break;
      case 'pan-ricota-miel':
        navigation.navigate('PanRicota');
        break;
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
  container: { flex: 1, padding: 16, backgroundColor: '#B9FBC0' },
  card: { marginBottom: 16, borderRadius: 12, overflow: 'hidden', backgroundColor: '#f9f9f9', padding: 12 },
  image: { width: '100%', height: 150, borderRadius: 8, marginBottom: 8 },
  title: { fontSize: 18, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#555' },
});
