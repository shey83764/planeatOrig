import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const nutrients = [
  { name: 'Arroz integral cocido', hc: 49.0, protein: 8.4, lipid: 0.0, weight: 70 },
  { name: 'Filet de merluza', hc: 0.0, protein: 20.0, lipid: 5.0, weight: 100 },
  { name: 'Brócoli', hc: 3.0, protein: 1.0, lipid: 0.0, weight: 100 },
  { name: 'Aceite de oliva', hc: 0.0, protein: 0.0, lipid: 10.0, weight: 10 },
];

const portionNutrition = [
  { nutrient: 'Carbohidratos (g)', amount: 70 },
  { nutrient: '  - azúcares (g)', amount: 41.25 },
  { nutrient: '  - fibra (g)', amount: 0.5 },
  { nutrient: 'Proteínas (g)', amount: 10 },
  { nutrient: 'Grasas totales (g)', amount: 5 },
];

const dailyValues = [
  { nutrient: 'Carbohidratos', kcal: 1100, vd: '100%VD' },
  { nutrient: 'Proteínas', kcal: 300, vd: '100%VD' },
  { nutrient: 'Lípidos', kcal: 600, vd: '100%VD' },
];

export default function ArrozMerluzaVegetalesScreen() {
  const totalHC = nutrients.reduce((sum, n) => sum + n.hc, 0);
  const totalProtein = nutrients.reduce((sum, n) => sum + n.protein, 0);
  const totalLipid = nutrients.reduce((sum, n) => sum + n.lipid, 0);
  const totalKcal = 208 + 118 + 45; // 371 kcal según imagen

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🍚 Arroz integral con filet de merluza y vegetales</Text>

      <Text style={styles.subtitle}>Alimentos:</Text>
      <Text style={styles.text}>• Arroz integral cocido 70 g (en seco)</Text>
      <Text style={styles.text}>• Filet de merluza 100 g</Text>
      <Text style={styles.text}>• Brócoli 100 g</Text>
      <Text style={styles.text}>• Aceite de oliva 10 g</Text>

      <Text style={styles.subtitle}>Procedimiento:</Text>
      <Text style={styles.text}>1. Cocinar el arroz integral.</Text>
      <Text style={styles.text}>2. Cocinar el pescado a la plancha o al horno.</Text>
      <Text style={styles.text}>3. Hervir el brócoli.</Text>
      <Text style={styles.text}>4. Servir todo junto y rociar con aceite.</Text>

      {/* Tabla de macronutrientes por alimento */}
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

      {/* Totales */}
      <Text style={styles.subtitle}>Totales:</Text>
      <Text style={styles.text}>
        HC: {totalHC.toFixed(1)} g | Proteínas: {totalProtein.toFixed(1)} g | Lípidos: {totalLipid.toFixed(1)} g | Kcal: {totalKcal}
      </Text>

      {/* Cuadro nutricional */}
      <Text style={styles.subtitle}>Cuadro nutricional por porción:</Text>
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={styles.cell}>Nutriente</Text>
          <Text style={styles.cell}>Cantidad</Text>
          <Text style={styles.cell}>%VD</Text>
        </View>
        {portionNutrition.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.nutrient}</Text>
            <Text style={styles.cell}>{item.amount}</Text>
            <Text style={styles.cell}></Text>
          </View>
        ))}
      </View>

      {/* Valores diarios recomendados */}
      <Text style={styles.subtitle}>Para una dieta basada en 2000 kcal:</Text>
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={styles.cell}>Macronutriente</Text>
          <Text style={styles.cell}>Kcal</Text>
          <Text style={styles.cell}>%VD</Text>
        </View>
        {dailyValues.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.nutrient}</Text>
            <Text style={styles.cell}>{item.kcal}</Text>
            <Text style={styles.cell}>{item.vd}</Text>
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
