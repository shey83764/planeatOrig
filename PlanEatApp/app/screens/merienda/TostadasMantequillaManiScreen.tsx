import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function TostadasMantequillaManiScreen() {
  const nutrientes = [
    { nombre: 'Pan integral', hc: 36.0, proteinas: 6.0, lipidos: 0.0, peso: 60 },
    { nombre: 'Yogur entero', hc: 3.0, proteinas: 0.8, lipidos: 0.6, peso: 20 },
    { nombre: 'Frutas frescas (banana)', hc: 0.4, proteinas: 0.0, lipidos: 0.0, peso: 3 },
    { nombre: 'Mantequilla de maní', hc: 0, proteinas: 0, lipidos: 5, peso: 15 }, // si querés, lo ajustamos
  ];

  const totalHC = nutrientes.reduce((acc, i) => acc + i.hc, 0);
  const totalProteinas = nutrientes.reduce((acc, i) => acc + i.proteinas, 0);
  const totalLipidos = nutrientes.reduce((acc, i) => acc + i.lipidos, 0);
  const totalKcal = 157 + 27 + 5; // 190 kcal aprox según tu tabla

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🥪 Tostadas con mantequilla de maní</Text>

      <Text style={styles.subtitle}>Alimentos:</Text>
      <Text style={styles.text}>• Pan integral 60 g</Text>
      <Text style={styles.text}>• Mantequilla de maní 15 g</Text>
      <Text style={styles.text}>• Banana 80 g</Text>

      <Text style={styles.subtitle}>Procedimiento:</Text>
      <Text style={styles.text}>1. Tostar pan, untar mantequilla, añadir rodajas de banana.</Text>

      <Text style={styles.subtitle}>Macronutrientes por alimento:</Text>
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={styles.cell}>Alimento</Text>
          <Text style={styles.cell}>HC (g)</Text>
          <Text style={styles.cell}>Proteínas (g)</Text>
          <Text style={styles.cell}>Lípidos (g)</Text>
          <Text style={styles.cell}>Peso (g)</Text>
        </View>
        {nutrientes.map((item, idx) => (
          <View key={idx} style={styles.row}>
            <Text style={styles.cell}>{item.nombre}</Text>
            <Text style={styles.cell}>{item.hc.toFixed(1)}</Text>
            <Text style={styles.cell}>{item.proteinas.toFixed(1)}</Text>
            <Text style={styles.cell}>{item.lipidos.toFixed(1)}</Text>
            <Text style={styles.cell}>{item.peso}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.subtitle}>Totales:</Text>
      <Text style={styles.text}>
        HC: {totalHC.toFixed(1)} g | Proteínas: {totalProteinas.toFixed(1)} g | Lípidos: {totalLipidos.toFixed(1)} g | Kcal: {totalKcal}
      </Text>

      <Text style={styles.subtitle}>Cuadro nutricional por porción:</Text>
      <Text style={styles.text}>Carbohidratos: 70 g</Text>
      <Text style={styles.text}>Azúcares: 41.25 g</Text>
      <Text style={styles.text}>Fibra: 0.5 g</Text>
      <Text style={styles.text}>Proteínas: 10 g</Text>
      <Text style={styles.text}>Grasas totales: 5 g</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFF' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
  subtitle: { fontSize: 16, fontWeight: '600', marginTop: 12, marginBottom: 6 },
  text: { fontSize: 14, marginBottom: 4, lineHeight: 20 },
  table: { borderWidth: 1, borderColor: '#ccc', marginVertical: 8 },
  row: { flexDirection: 'row', borderBottomWidth: 1, borderColor: '#ccc' },
  headerRow: { backgroundColor: '#eee' },
  cell: { flex: 1, padding: 6, fontSize: 13 },
});
