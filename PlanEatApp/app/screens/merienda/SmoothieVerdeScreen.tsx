import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function SmoothieVerdeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Smoothie verde</Text>

      <Text style={styles.subtitle}>Alimentos:</Text>
      <Text>• Leche 200 ml</Text>
      <Text>• Espinaca 30 g</Text>
      <Text>• Durazno 100 g</Text>
      <Text>• Avena 20 g</Text>

      <Text style={styles.subtitle}>Procedimiento:</Text>
      <Text>1. Licuar hasta obtener una mezcla homogénea.</Text>

      {/* Tabla Macronutrientes por alimento */}
      <Text style={styles.subtitle}>Macronutrientes por alimento (por 100 g):</Text>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Alimento</Text>
          <Text style={styles.tableCell}>HC (g)</Text>
          <Text style={styles.tableCell}>Proteínas (g)</Text>
          <Text style={styles.tableCell}>Lípidos (g)</Text>
          <Text style={styles.tableCell}>Peso (g)</Text>
          <Text style={styles.tableCell}>HC</Text>
          <Text style={styles.tableCell}>Proteínas</Text>
          <Text style={styles.tableCell}>Lípidos</Text>
        </View>

        <View style={[styles.tableRow, styles.rowEven]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Leche Entera</Text>
          <Text style={styles.tableCell}>5</Text>
          <Text style={styles.tableCell}>3</Text>
          <Text style={styles.tableCell}>3</Text>
          <Text style={styles.tableCell}>200.0</Text>
          <Text style={styles.tableCell}>10.0</Text>
          <Text style={styles.tableCell}>6.0</Text>
          <Text style={styles.tableCell}>6.0</Text>
        </View>

        <View style={[styles.tableRow, styles.rowOdd]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Vegetales A {`{promedio}`}</Text>
          <Text style={styles.tableCell}>3</Text>
          <Text style={styles.tableCell}>1</Text>
          <Text style={styles.tableCell}>0</Text>
          <Text style={styles.tableCell}>30.0</Text>
          <Text style={styles.tableCell}>0.9</Text>
          <Text style={styles.tableCell}>0.3</Text>
          <Text style={styles.tableCell}>0.0</Text>
        </View>

        <View style={[styles.tableRow, styles.rowEven]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Frutas Frescas {`{promedio}`}</Text>
          <Text style={styles.tableCell}>12</Text>
          <Text style={styles.tableCell}>1</Text>
          <Text style={styles.tableCell}>0</Text>
          <Text style={styles.tableCell}>100.0</Text>
          <Text style={styles.tableCell}>12.0</Text>
          <Text style={styles.tableCell}>1.0</Text>
          <Text style={styles.tableCell}>0.0</Text>
        </View>

        <View style={[styles.tableRow, styles.rowOdd]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Cereales {`{promedio}`}</Text>
          <Text style={styles.tableCell}>70</Text>
          <Text style={styles.tableCell}>12</Text>
          <Text style={styles.tableCell}>0</Text>
          <Text style={styles.tableCell}>20.0</Text>
          <Text style={styles.tableCell}>14.0</Text>
          <Text style={styles.tableCell}>2.4</Text>
          <Text style={styles.tableCell}>0.0</Text>
        </View>

        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Total (g total)</Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}></Text>
          <Text style={styles.tableCell}>36.9</Text>
          <Text style={styles.tableCell}>9.7</Text>
          <Text style={styles.tableCell}>6.0</Text>
        </View>

        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Kcal</Text>
          <Text style={styles.tableCell}>148</Text>
          <Text style={styles.tableCell}>39</Text>
          <Text style={styles.tableCell}>54</Text>
          <Text style={styles.tableCell}>240</Text>
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
  text: { fontSize: 14, marginBottom: 4, lineHeight: 20 },

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
