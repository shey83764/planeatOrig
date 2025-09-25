import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function PanQuesoTomateScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Pan con queso y tomate</Text>

      <Text style={styles.subtitle}>Alimentos:</Text>
      <Text>• Pan integral 60 g</Text>
      <Text>• Queso fresco magro 40 g</Text>
      <Text>• Tomate 80 g</Text>

      <Text style={styles.subtitle}>Procedimiento:</Text>
      <Text>1. Armar sándwich.</Text>

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
          <Text style={[styles.tableCell, styles.cellNombre]}>Pan</Text>
          <Text style={styles.tableCell}>60</Text>
          <Text style={styles.tableCell}>10</Text>
          <Text style={styles.tableCell}>0</Text>
          <Text style={styles.tableCell}>60.0</Text>
          <Text style={styles.tableCell}>36.0</Text>
          <Text style={styles.tableCell}>6.0</Text>
          <Text style={styles.tableCell}>0.0</Text>
        </View>

        <View style={[styles.tableRow, styles.rowOdd]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Queso Magro {'{promedio}'}</Text>
          <Text style={styles.tableCell}>0</Text>
          <Text style={styles.tableCell}>26</Text>
          <Text style={styles.tableCell}>12</Text>
          <Text style={styles.tableCell}>40.0</Text>
          <Text style={styles.tableCell}>0.0</Text>
          <Text style={styles.tableCell}>10.4</Text>
          <Text style={styles.tableCell}>4.8</Text>
        </View>

        <View style={[styles.tableRow, styles.rowEven]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Frutas Frescas {'{promedio}'}</Text>
          <Text style={styles.tableCell}>12</Text>
          <Text style={styles.tableCell}>1</Text>
          <Text style={styles.tableCell}>0</Text>
          <Text style={styles.tableCell}>80.0</Text>
          <Text style={styles.tableCell}>9.6</Text>
          <Text style={styles.tableCell}>0.8</Text>
          <Text style={styles.tableCell}>0.0</Text>
        </View>

        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>g total:</Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}>45.6</Text>
          <Text style={styles.tableCell}>17.2</Text>
          <Text style={styles.tableCell}>4.8</Text>
        </View>

        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Kcal</Text>
          <Text style={styles.tableCell}>182</Text>
          <Text style={styles.tableCell}>69</Text>
          <Text style={styles.tableCell}>43</Text>
          <Text style={styles.tableCell}>294</Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
        </View>
      </View>

      {/* Cuadro nutricional */}
      <Text style={styles.subtitle}>Cuadro nutricional por porción:</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Nutriente</Text>
          <Text style={styles.tableCell}>Cantidad</Text>
          <Text style={styles.tableCell}>%VD</Text>
        </View>
        <View style={[styles.tableRow, styles.rowEven]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Carbohidratos (g)</Text>
          <Text style={styles.tableCell}>70</Text>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={[styles.tableRow, styles.rowOdd]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>- Azúcares (g)</Text>
          <Text style={styles.tableCell}>41.25</Text>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={[styles.tableRow, styles.rowEven]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>- Fibra (g)</Text>
          <Text style={styles.tableCell}>0.5</Text>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={[styles.tableRow, styles.rowOdd]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Proteínas (g)</Text>
          <Text style={styles.tableCell}>10</Text>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={[styles.tableRow, styles.rowEven]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Grasas totales (g)</Text>
          <Text style={styles.tableCell}>5</Text>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={[styles.tableRow, styles.rowOdd]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Vitamina</Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={[styles.tableRow, styles.rowEven]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Mineral</Text>
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
