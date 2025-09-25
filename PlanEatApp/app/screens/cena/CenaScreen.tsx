import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';

type CenaNavProp = NativeStackNavigationProp<RootStackParamList, 'Cena'>;

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: any; // al usar require(), el tipo es `any`
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
  container: { flex: 1, padding: 16, backgroundColor: '#BDB2FF' },
  card: { marginBottom: 16, borderRadius: 12, overflow: 'hidden', backgroundColor: '#f9f9f9', padding: 12 },
  image: { width: '100%', height: 150, borderRadius: 8, marginBottom: 8 },
  title: { fontSize: 18, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#555' },
});
