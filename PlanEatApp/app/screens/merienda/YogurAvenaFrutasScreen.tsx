import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function YogurAvenaFrutasScreen() {
  const alimentos = [
    { nombre: 'Yogur descremado', hc: 12.0, proteinas: 8.0, lipidos: 6.0, peso: 200 },
    { nombre: 'Avena', hc: 21.0, proteinas: 3.6, lipidos: 0.0, peso: 30 },
    { nombre: 'Manzana', hc: 12.0, proteinas: 1.0, lipidos: 0.0, peso: 100 },
    { nombre: 'Canela', hc: 0, proteinas: 0, lipidos: 0, peso: 0 }, // uso a gusto, sin aporte calórico relevante
  ];

  const totalHC = alimentos.reduce((acc, item) => acc + item.hc, 0);
  const totalProteinas = alimentos.reduce((acc, item) => acc + item.proteinas, 0);
  const totalLipidos = alimentos.reduce((acc, item) => acc + item.lipidos, 0);
  const totalKcal = 180 + 50 + 54; // Según tabla

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🥣 Yogur con avena y frutas</Text>

      <Text style={styles.subtitle}>Alimentos:</Text>
      <Text style={styles.text}>• Yogur descremado 200 g</Text>
      <Text style={styles.text}>• Avena 30 g</Text>
      <Text style={styles.text}>• Manzana 100 g</Text>
      <Text style={styles.text}>• Canela a gusto</Text>

      <Text style={styles.subtitle}>Procedimiento:</Text>
      <Text style={styles.text}>1. Mezclar todo en un bol.</Text>

      {/* Tabla Macronutrientes por alimento */}
      <Text style={styles.subtitle}>Macronutrientes por alimento:</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Alimento</Text>
          <Text style={styles.tableCell}>HC (g)</Text>
          <Text style={styles.tableCell}>Proteínas (g)</Text>
          <Text style={styles.tableCell}>Lípidos (g)</Text>
        </View>
        {alimentos.map((item, index) => (
          <View
            key={index}
            style={[styles.tableRow, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}
          >
            <Text style={[styles.tableCell, styles.cellNombre]}>{item.nombre}</Text>
            <Text style={styles.tableCell}>{item.hc.toFixed(1)}</Text>
            <Text style={styles.tableCell}>{item.proteinas.toFixed(1)}</Text>
            <Text style={styles.tableCell}>{item.lipidos.toFixed(1)}</Text>
          </View>
        ))}
      </View>

      {/* Tabla Totales aproximados */}
      <Text style={styles.subtitle}>Totales aproximados:</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={styles.tableCell}>Carbohidratos (g)</Text>
          <Text style={styles.tableCell}>Proteínas (g)</Text>
          <Text style={styles.tableCell}>Grasas totales (g)</Text>
          <Text style={styles.tableCell}>Calorías (kcal)</Text>
        </View>
        <View style={[styles.tableRow, styles.rowEven]}>
          <Text style={styles.tableCell}>{totalHC.toFixed(1)}</Text>
          <Text style={styles.tableCell}>{totalProteinas.toFixed(1)}</Text>
          <Text style={styles.tableCell}>{totalLipidos.toFixed(1)}</Text>
          <Text style={styles.tableCell}>{totalKcal}</Text>
        </View>
      </View>

      {/* Tabla Cuadro nutricional por porción */}
      <Text style={styles.subtitle}>Cuadro nutricional por porción:</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={styles.tableCell}>Nutriente</Text>
          <Text style={styles.tableCell}>Cantidad</Text>
        </View>
        <View style={[styles.tableRow, styles.rowEven]}>
          <Text style={styles.tableCell}>Carbohidratos</Text>
          <Text style={styles.tableCell}>70 g</Text>
        </View>
        <View style={[styles.tableRow, styles.rowOdd]}>
          <Text style={styles.tableCell}>Azúcares</Text>
          <Text style={styles.tableCell}>41.25 g</Text>
        </View>
        <View style={[styles.tableRow, styles.rowEven]}>
          <Text style={styles.tableCell}>Fibra</Text>
          <Text style={styles.tableCell}>0.5 g</Text>
        </View>
        <View style={[styles.tableRow, styles.rowOdd]}>
          <Text style={styles.tableCell}>Proteínas</Text>
          <Text style={styles.tableCell}>10 g</Text>
        </View>
        <View style={[styles.tableRow, styles.rowEven]}>
          <Text style={styles.tableCell}>Grasas totales</Text>
          <Text style={styles.tableCell}>5 g</Text>
        </View>
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
    borderColor: '#ddd',
    borderRadius: 4,
    marginBottom: 12,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 6,
    alignItems: 'center',
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tableCell: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
  },
  cellNombre: {
    flex: 2,
    textAlign: 'left',
    paddingLeft: 8,
  },
  rowEven: {
    backgroundColor: '#fafafa',
  },
  rowOdd: {
    backgroundColor: '#fff',
  },
});
