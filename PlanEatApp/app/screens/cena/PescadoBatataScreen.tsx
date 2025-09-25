import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function PescadoBatataScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Pescado al horno con batata</Text>

      <Text style={styles.subtitle}>Alimentos:</Text>
      <Text>• Filete de merluza 100 g</Text>
      <Text>• Batata 150 g</Text>
      <Text>• Aceite 10 g</Text>

      <Text style={styles.subtitle}>Procedimiento:</Text>
      <Text>1. Pincelar con aceite la fuente.</Text>
      <Text>2. Hornear la batata y el pescado juntos.</Text>

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
          <Text style={[styles.tableCell, styles.cellNombre]}>Carne {'{promedio}'}</Text>
          <Text style={styles.tableCell}>0</Text>
          <Text style={styles.tableCell}>20</Text>
          <Text style={styles.tableCell}>5</Text>
          <Text style={styles.tableCell}>100.0</Text>
          <Text style={styles.tableCell}>0.0</Text>
          <Text style={styles.tableCell}>20.0</Text>
          <Text style={styles.tableCell}>5.0</Text>
        </View>

        <View style={[styles.tableRow, styles.rowOdd]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Vegetales C {'{promedio}'}</Text>
          <Text style={styles.tableCell}>20</Text>
          <Text style={styles.tableCell}>2</Text>
          <Text style={styles.tableCell}>0</Text>
          <Text style={styles.tableCell}>150.0</Text>
          <Text style={styles.tableCell}>30.0</Text>
          <Text style={styles.tableCell}>3.0</Text>
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
          <Text style={styles.tableCell}>30.0</Text>
          <Text style={styles.tableCell}>23.0</Text>
          <Text style={styles.tableCell}>15.0</Text>
        </View>

        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Kcal</Text>
          <Text style={styles.tableCell}>120</Text>
          <Text style={styles.tableCell}>92</Text>
          <Text style={styles.tableCell}>135</Text>
          <Text style={styles.tableCell}>347</Text>
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
