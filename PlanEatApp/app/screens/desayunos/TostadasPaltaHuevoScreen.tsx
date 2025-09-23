import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

export default function TostadasPaltaHuevoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tostadas integrales con palta y huevo</Text>

      <Text style={styles.subtitle}>Alimentos:</Text>
      <View style={styles.list}>
        <Text>• Pan integral 60 g (2 rebanadas)</Text>
        <Text>• Palta 50 g</Text>
        <Text>• Huevo 1 grande (50 g)</Text>
        <Text>• Queso untable descremado 20 g</Text>
        <Text>• Café o té sin azúcar</Text>
      </View>

      <Text style={styles.subtitle}>Procedimiento:</Text>
      <View style={styles.list}>
        <Text>1. Tostar el pan integral.</Text>
        <Text>2. Pisar la palta con un poco de sal.</Text>
        <Text>3. Cocinar el huevo (hervido o a la plancha).</Text>
        <Text>4. Untar una tostada con queso, la otra con palta y colocar el huevo encima.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
  },
  list: {
    paddingLeft: 8,
  },
});
