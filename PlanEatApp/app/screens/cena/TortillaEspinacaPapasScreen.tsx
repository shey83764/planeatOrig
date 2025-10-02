import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function TortillaEspinacaPapasScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tortilla de espinaca y papas</Text>

      <Text style={styles.subtitle}>Alimentos:</Text>
      <Text>• Papas 150 g</Text>
      <Text>• Espinaca 50 g</Text>
      <Text>• Huevo 2 u</Text>
      <Text>• Aceite 10 g</Text>

      <Text style={styles.subtitle}>Procedimiento:</Text>
      <Text>1. Cocinar papas al vapor.</Text>
      <Text>2. Saltear espinaca.</Text>
      <Text>3. Batir huevos y unir todo.</Text>
      <Text>4. Dorar en sartén.</Text>

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
          <Text style={[styles.tableCell, styles.cellNombre]}>Vegetales C {'{promedio}'}</Text>
          <Text style={styles.tableCell}>20</Text>
          <Text style={styles.tableCell}>2</Text>
          <Text style={styles.tableCell}>0</Text>
          <Text style={styles.tableCell}>150.0</Text>
          <Text style={styles.tableCell}>30.0</Text>
          <Text style={styles.tableCell}>3.0</Text>
          <Text style={styles.tableCell}>0.0</Text>
        </View>

        <View style={[styles.tableRow, styles.rowOdd]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Vegetales A {'{promedio}'}</Text>
          <Text style={styles.tableCell}>3</Text>
          <Text style={styles.tableCell}>1</Text>
          <Text style={styles.tableCell}>0</Text>
          <Text style={styles.tableCell}>50.0</Text>
          <Text style={styles.tableCell}>1.5</Text>
          <Text style={styles.tableCell}>0.5</Text>
          <Text style={styles.tableCell}>0.0</Text>
        </View>

        <View style={[styles.tableRow, styles.rowEven]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Huevo</Text>
          <Text style={styles.tableCell}>0</Text>
          <Text style={styles.tableCell}>12</Text>
          <Text style={styles.tableCell}>12</Text>
          <Text style={styles.tableCell}>120.0</Text>
          <Text style={styles.tableCell}>0.0</Text>
          <Text style={styles.tableCell}>14.4</Text>
          <Text style={styles.tableCell}>14.4</Text>
        </View>

        <View style={[styles.tableRow, styles.rowOdd]}>
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
          <Text style={styles.tableCell}>31.5</Text>
          <Text style={styles.tableCell}>17.9</Text>
          <Text style={styles.tableCell}>24.4</Text>
        </View>

        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Kcal</Text>
          <Text style={styles.tableCell}>126</Text>
          <Text style={styles.tableCell}>72</Text>
          <Text style={styles.tableCell}>220</Text>
          <Text style={styles.tableCell}>417</Text>
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
