import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const nutrients = [
  { name: 'Tortilla integral', hc: 42.0, protein: 7.2, lipid: 0.0, weight: 60 },
  { name: 'Atún en agua', hc: 0.0, protein: 16.0, lipid: 4.0, weight: 80 },
  { name: 'Queso untable descremado', hc: 1.0, protein: 1.8, lipid: 1.2, weight: 20 },
  { name: 'Vegetales (lechuga y tomate)', hc: 5.1, protein: 0.8, lipid: 0.0, weight: 80 }, // 50g+30g
  { name: 'Aceite de oliva', hc: 0.0, protein: 0.0, lipid: 5.0, weight: 5 },
];

const portionNutrition = [
  { nutrient: 'Carbohidratos (g)', amount: 48.1 },
  { nutrient: '  - azúcares (g)', amount: 41.25 },
  { nutrient: '  - fibra (g)', amount: 0.5 },
  { nutrient: 'Proteínas (g)', amount: 25.8 },
  { nutrient: 'Grasas totales (g)', amount: 5.2 },
];

export default function WrapAtunScreen() {
  const totalHC = nutrients.reduce((sum, n) => sum + n.hc, 0);
  const totalProtein = nutrients.reduce((sum, n) => sum + n.protein, 0);
  const totalLipid = nutrients.reduce((sum, n) => sum + n.lipid, 0);
  const totalKcal = 192 + 103 + 47; // 342 kcal según tabla

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🌯 Wrap integral de atún</Text>

      <Text style={styles.subtitle}>Alimentos:</Text>
      <Text style={styles.text}>• Tortilla integral 60 g</Text>
      <Text style={styles.text}>• Atún en agua 80 g</Text>
      <Text style={styles.text}>• Queso untable descremado 20 g</Text>
      <Text style={styles.text}>• Lechuga y tomate a gusto</Text>
      <Text style={styles.text}>• Aceite de oliva 5 g</Text>

      <Text style={styles.subtitle}>Procedimiento:</Text>
      <Text style={styles.text}>1. Untar la tortilla con queso.</Text>
      <Text style={styles.text}>2. Colocar el atún escurrido, lechuga y tomate.</Text>
      <Text style={styles.text}>3. Enrollar y dorar en sartén.</Text>

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
