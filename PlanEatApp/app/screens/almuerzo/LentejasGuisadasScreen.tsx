import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const nutrients = [
  { name: 'Lentejas (secas)', hc: 41.3, protein: 14.0, lipid: 1.4, weight: 70 },
  { name: 'Zanahoria (Vegetal A)', hc: 1.5, protein: 0.5, lipid: 0.0, weight: 50 },
  { name: 'Cebolla (Vegetal B)', hc: 4.0, protein: 0.5, lipid: 0.0, weight: 50 },
  { name: 'Aceite de oliva', hc: 0.0, protein: 0.0, lipid: 10.0, weight: 10 },
];

const portionNutrition = [
  { nutrient: 'Carbohidratos (g)', amount: 46.8 },
  { nutrient: '  - azúcares (g)', amount: 41.25 },
  { nutrient: '  - fibra (g)', amount: 0.5 },
  { nutrient: 'Proteínas (g)', amount: 15.0 },
  { nutrient: 'Grasas totales (g)', amount: 11.4 }, // Aceite + lentejas
];

export default function LentejasGuisadasScreen() {
  const totalHC = nutrients.reduce((sum, n) => sum + n.hc, 0);
  const totalProtein = nutrients.reduce((sum, n) => sum + n.protein, 0);
  const totalLipid = nutrients.reduce((sum, n) => sum + n.lipid, 0);
  const totalKcal = 187 + 60 + 13; // 260 kcal según tabla

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🍲 Lentejas guisadas con vegetales</Text>

      <Text style={styles.subtitle}>Alimentos:</Text>
      <Text style={styles.text}>• Lentejas secas 70 g</Text>
      <Text style={styles.text}>• Zanahoria 50 g</Text>
      <Text style={styles.text}>• Cebolla 50 g</Text>
      <Text style={styles.text}>• Aceite de oliva 10 g</Text>

      <Text style={styles.subtitle}>Procedimiento:</Text>
      <Text style={styles.text}>1. Hervir las lentejas hasta que estén tiernas.</Text>
      <Text style={styles.text}>2. Saltear cebolla y zanahoria, añadir las lentejas.</Text>
      <Text style={styles.text}>3. Servir caliente.</Text>

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
