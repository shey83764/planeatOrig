import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function EnsaladaGarbanzosScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ensalada tibia de garbanzos</Text>

      <Text style={styles.subtitle}>Alimentos:</Text>
      <Text>• Garbanzos cocidos 100 g</Text>
      <Text>• Pimiento 50 g</Text>
      <Text>• Cebolla 50 g</Text>
      <Text>• Aceite 10 g</Text>

      <Text style={styles.subtitle}>Procedimiento:</Text>
      <Text>1. Saltear vegetales.</Text>
      <Text>2. Añadir garbanzos.</Text>

      {/* Tabla Macronutrientes */}
      <Text style={styles.subtitle}>Macronutrientes por alimento (por 100 g):</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Alimentos</Text>
          <Text style={styles.tableCell}>HC (g)</Text>
          <Text style={styles.tableCell}>Proteínas (g)</Text>
          <Text style={styles.tableCell}>Lípidos (g)</Text>
          <Text style={styles.tableCell}>Peso (g)</Text>
          <Text style={styles.tableCell}>HC</Text>
          <Text style={styles.tableCell}>Proteínas</Text>
          <Text style={styles.tableCell}>Lípidos</Text>
        </View>

        <View style={[styles.tableRow, styles.rowEven]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Legumbres {'{promedio}'}</Text>
          <Text style={styles.tableCell}>59</Text>
          <Text style={styles.tableCell}>20</Text>
          <Text style={styles.tableCell}>2</Text>
          <Text style={styles.tableCell}>100.0</Text>
          <Text style={styles.tableCell}>59.0</Text>
          <Text style={styles.tableCell}>20.0</Text>
          <Text style={styles.tableCell}>2.0</Text>
        </View>

        <View style={[styles.tableRow, styles.rowOdd]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Vegetales B {'{promedio}'}</Text>
          <Text style={styles.tableCell}>8</Text>
          <Text style={styles.tableCell}>1</Text>
          <Text style={styles.tableCell}>0</Text>
          <Text style={styles.tableCell}>50.0</Text>
          <Text style={styles.tableCell}>4.0</Text>
          <Text style={styles.tableCell}>0.5</Text>
          <Text style={styles.tableCell}>0.0</Text>
        </View>

        <View style={[styles.tableRow, styles.rowEven]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Aceites</Text>
          <Text style={styles.tableCell}>0</Text>
          <Text style={styles.tableCell}>0</Text>
          <Text style={styles.tableCell}>100</Text>
          <Text style={styles.tableCell}>10.0</Text>
          <Text style={styles.tableCell}>0.0</Text>
          <Text style={styles.tableCell}>0.0</Text>
          <Text style={styles.tableCell}>10.0</Text>
        </View>

        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>g total:</Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}>63.0</Text>
          <Text style={styles.tableCell}>20.5</Text>
          <Text style={styles.tableCell}>12.0</Text>
        </View>

        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Kcal</Text>
          <Text style={styles.tableCell}>252</Text>
          <Text style={styles.tableCell}>82</Text>
          <Text style={styles.tableCell}>108</Text>
          <Text style={styles.tableCell}>442</Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFF' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  subtitle: { fontSize: 16, fontWeight: '600', marginTop: 12, marginBottom: 6 },

  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginBottom: 20,
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
