import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function SopaVerdurasHuevoScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sopa de verduras con huevo</Text>

      <Text style={styles.subtitle}>Alimentos:</Text>
      <Text>• Caldito de verduras</Text>
      <Text>• Zapallo 150 g</Text>
      <Text>• Zanahoria 50 g</Text>
      <Text>• Fideos integrales 40 g</Text>
      <Text>• Huevo 1 u</Text>

      <Text style={styles.subtitle}>Procedimiento:</Text>
      <Text>1. Hervir las verduras junto con el caldito hasta que estén cocidas.</Text>
      <Text>2. Añadir los fideos hasta cocinarlos.</Text>
      <Text>3. Añadir huevo batido.</Text>

      {/* Tabla Macronutrientes por alimento */}
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
          <Text style={[styles.tableCell, styles.cellNombre]}>Vegetales B {'{promedio}'}</Text>
          <Text style={styles.tableCell}>8</Text>
          <Text style={styles.tableCell}>1</Text>
          <Text style={styles.tableCell}>0</Text>
          <Text style={styles.tableCell}>150.0</Text>
          <Text style={styles.tableCell}>12.0</Text>
          <Text style={styles.tableCell}>1.5</Text>
          <Text style={styles.tableCell}>0.0</Text>
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
          <Text style={[styles.tableCell, styles.cellNombre]}>Cereales {'{promedio}'}</Text>
          <Text style={styles.tableCell}>70</Text>
          <Text style={styles.tableCell}>12</Text>
          <Text style={styles.tableCell}>0</Text>
          <Text style={styles.tableCell}>40.0</Text>
          <Text style={styles.tableCell}>28.0</Text>
          <Text style={styles.tableCell}>4.8</Text>
          <Text style={styles.tableCell}>0.0</Text>
        </View>

        <View style={[styles.tableRow, styles.rowOdd]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Huevo</Text>
          <Text style={styles.tableCell}>0</Text>
          <Text style={styles.tableCell}>12</Text>
          <Text style={styles.tableCell}>12</Text>
          <Text style={styles.tableCell}>65.0</Text>
          <Text style={styles.tableCell}>0.0</Text>
          <Text style={styles.tableCell}>7.8</Text>
          <Text style={styles.tableCell}>7.8</Text>
        </View>

        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>g total:</Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}>44.0</Text>
          <Text style={styles.tableCell}>14.6</Text>
          <Text style={styles.tableCell}>7.8</Text>
        </View>

        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Kcal</Text>
          <Text style={styles.tableCell}>176</Text>
          <Text style={styles.tableCell}>58</Text>
          <Text style={styles.tableCell}>70</Text>
          <Text style={styles.tableCell}>305</Text>
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
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
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
