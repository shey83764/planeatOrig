import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const nutrients = [
  { name: 'Pasta integral seca', hc: 49.0, protein: 8.4, lipid: 0.0, weight: 70 },
  { name: 'Salsa de tomate natural', hc: 18.0, protein: 1.5, lipid: 0.0, weight: 150 },
  { name: 'Queso parmesano', hc: 0.0, protein: 3.3, lipid: 3.6, weight: 15 },
  { name: 'Aceite de oliva', hc: 0.0, protein: 0.0, lipid: 10.0, weight: 10 },
];

const portionNutrition = [
  { nutrient: 'Carbohidratos (g)', amount: 67.0 },
  { nutrient: '  - azúcares (g)', amount: 41.25 },
  { nutrient: '  - fibra (g)', amount: 0.5 },
  { nutrient: 'Proteínas (g)', amount: 13.2 },
  { nutrient: 'Grasas totales (g)', amount: 13.6 },
];

export default function PastaTomateQuesoScreen() {
  const totalHC = nutrients.reduce((sum, n) => sum + n.hc, 0);
  const totalProtein = nutrients.reduce((sum, n) => sum + n.protein, 0);
  const totalLipid = nutrients.reduce((sum, n) => sum + n.lipid, 0);
  const totalKcal = 268 + 53 + 32; // 353 kcal según tabla

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🍝 Pasta integral con salsa de tomate y queso</Text>

      <Text style={styles.subtitle}>Alimentos:</Text>
      <Text style={styles.text}>• Pasta integral seca 70 g</Text>
      <Text style={styles.text}>• Salsa de tomate natural 150 g</Text>
      <Text style={styles.text}>• Queso parmesano 15 g</Text>
      <Text style={styles.text}>• Aceite de oliva 10 g</Text>

      <Text style={styles.subtitle}>Procedimiento:</Text>
      <Text style={styles.text}>1. Cocinar la pasta.</Text>
      <Text style={styles.text}>2. Calentar la salsa y mezclar con la pasta.</Text>
      <Text style={styles.text}>3. Espolvorear queso y añadir aceite.</Text>

      <Text style={styles.subtitle}>Macronutrientes por alimento:</Text>
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={styles.cell}>Alimento</Text>
          <Text style={styles.cell}>HC (g)</Text>
          <Text style={styles.cell}>Proteínas (g)</Text>
          <Text style={styles.cell}>Lípidos (g)</Text>
          <Text style={styles.cell}>Peso (g)</Text>
        </View>
        {nutrients.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.hc.toFixed(1)}</Text>
            <Text style={styles.cell}>{item.protein.toFixed(1)}</Text>
            <Text style={styles.cell}>{item.lipid.toFixed(1)}</Text>
            <Text style={styles.cell}>{item.weight}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.subtitle}>Totales:</Text>
      <Text style={styles.text}>
        HC: {totalHC.toFixed(1)} g | Proteínas: {totalProtein.toFixed(1)} g | Lípidos: {totalLipid.toFixed(1)} g | Kcal: {totalKcal}
      </Text>

      <Text style={styles.subtitle}>Cuadro nutricional por porción:</Text>
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={styles.cell}>Nutriente</Text>
          <Text style={styles.cell}>Cantidad</Text>
        </View>
        {portionNutrition.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.nutrient}</Text>
            <Text style={styles.cell}>{item.amount}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFF' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
  subtitle: { fontSize: 16, fontWeight: '600', marginTop: 12, marginBottom: 6 },
  text: { fontSize: 14, marginBottom: 4, lineHeight: 20 },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  headerRow: {
    backgroundColor: '#eee',
  },
  cell: {
    flex: 1,
    padding: 6,
    fontSize: 13,
  },
});
