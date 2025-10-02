import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const nutrients = [
  { name: "Yogur descremado", hc: 12, protein: 8, lipid: 6, weight: 200 },
  { name: "Cereales (promedio)", hc: 21, protein: 3.6, lipid: 0, weight: 30 },
  { name: "Frutas frescas", hc: 9.6, protein: 0.8, lipid: 0, weight: 80 },
  { name: "Miel", hc: 4.1, protein: 0, lipid: 0, weight: 5 },
];

const YogurGranolaScreen = () => {
  const totalHC = nutrients.reduce((acc, n) => acc + n.hc, 0);
  const totalProtein = nutrients.reduce((acc, n) => acc + n.protein, 0);
  const totalLipid = nutrients.reduce((acc, n) => acc + n.lipid, 0);
  const totalKcal = totalHC * 4 + totalProtein * 4 + totalLipid * 9;

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text style={styles.title}>🍓 Yogur con granola y frutos rojos</Text>

      <Text style={styles.section}>Alimentos:</Text>
      <Text style={styles.text}>• Yogur natural descremado 200 g</Text>
      <Text style={styles.text}>• Granola sin azúcar 30 g</Text>
      <Text style={styles.text}>• Frutos rojos 80 g</Text>
      <Text style={styles.text}>• Miel 5 g</Text>

      <Text style={styles.section}>Procedimiento:</Text>
      <Text style={styles.text}>1. Colocar el yogur en un bol.</Text>
      <Text style={styles.text}>2. Añadir la granola y frutos rojos.</Text>
      <Text style={styles.text}>3. Endulzar con miel.</Text>

      <Text style={styles.section}>Macronutrientes por alimento:</Text>
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
            <Text style={styles.cell}>{item.hc}</Text>
            <Text style={styles.cell}>{item.protein}</Text>
            <Text style={styles.cell}>{item.lipid}</Text>
            <Text style={styles.cell}>{item.weight}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.section}>Totales:</Text>
      <Text style={styles.text}>
        HC: {totalHC} g | Proteínas: {totalProtein.toFixed(1)} g | Lípidos:{" "}
        {totalLipid.toFixed(1)} g | Kcal: {totalKcal}
      </Text>
    </ScrollView>
  );
};

export default YogurGranolaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
  },
  section: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 6,
  },
  text: {
    fontSize: 14,
    marginBottom: 4,
    lineHeight: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 8,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  headerRow: {
    backgroundColor: "#eee",
  },
  cell: {
    flex: 1,
    padding: 6,
    fontSize: 13,
  },
});
