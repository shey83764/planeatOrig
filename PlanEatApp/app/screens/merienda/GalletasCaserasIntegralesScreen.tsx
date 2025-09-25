import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function GalletasCaserasIntegralesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Galletas caseras integrales</Text>

      <Text style={styles.subtitle}>Alimentos:</Text>
      <Text>• Galletas integrales 40 g</Text>
      <Text>• Queso untable 20 g</Text>
      <Text>• Frutos rojos 80 g</Text>

      <Text style={styles.subtitle}>Procedimiento:</Text>
      <Text>1. Servir untando el queso y decorando con frutas.</Text>

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
          <Text style={[styles.tableCell, styles.cellNombre]}>Queso Untable entero</Text>
          <Text style={styles.tableCell}>5</Text>
          <Text style={styles.tableCell}>7</Text>
          <Text style={styles.tableCell}>17</Text>
          <Text style={styles.tableCell}>20.0</Text>
          <Text style={styles.tableCell}>1.0</Text>
          <Text style={styles.tableCell}>1.4</Text>
          <Text style={styles.tableCell}>3.4</Text>
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
          <Text style={styles.tableCell}>38.6</Text>
          <Text style={styles.tableCell}>7.0</Text>
          <Text style={styles.tableCell}>3.4</Text>
        </View>

        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.cellNombre]}>Kcal</Text>
          <Text style={styles.tableCell}>154</Text>
          <Text style={styles.tableCell}>28</Text>
          <Text style={styles.tableCell}>31</Text>
          <Text style={styles.tableCell}>213</Text>
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
