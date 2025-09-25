import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const nutrients = [
  { name: "Cereales (promedio)", hc: 28, protein: 4.8, lipid: 0, weight: 40 },
  { name: "Leche parcialmente descremada", hc: 10, protein: 6, lipid: 3, weight: 200 },
  { name: "Frutas frescas (promedio)", hc: 12, protein: 1, lipid: 0, weight: 100 },
  { name: "Frutas secas", hc: 2.6, protein: 3, lipid: 8.1, weight: 15 },
];

const portionNutrition = [
  { nutrient: "Carbohidratos (g)", amount: 70 },
  { nutrient: "- Azúcares (g)", amount: 41.25 },
  { nutrient: "- Fibra (g)", amount: 0.5 },
  { nutrient: "Proteínas (g)", amount: 10 },
  { nutrient: "Grasas totales (g)", amount: 5 },
  { nutrient: "Vitamina", amount: "-" },
  { nutrient: "Mineral", amount: "-" },
];

const dailyDiet = [
  { nutrient: "Carbohidratos", kcal: 1100, percent: "100% VD" },
  { nutrient: "Proteínas", kcal: 300, percent: "100% VD" },
  { nutrient: "Lípidos", kcal: 600, percent: "100% VD" },
];

const AvenaFrutasScreen = () => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text style={styles.title}>🥣 Avena con frutas y frutos secos</Text>

      <Text style={styles.section}>Alimentos:</Text>
      <Text style={styles.text}>• Avena arrollada 40 g</Text>
      <Text style={styles.text}>• Leche descremada 200 ml</Text>
      <Text style={styles.text}>• Banana 100 g</Text>
      <Text style={styles.text}>• Almendras 15 g</Text>
      <Text style={styles.text}>• Canela a gusto</Text>

      <Text style={styles.section}>Procedimiento:</Text>
      <Text style={styles.text}>
        1. Calentar la leche y añadir la avena, cocinando 5 min.
      </Text>
      <Text style={styles.text}>
        2. Servir en bol, añadir rodajas de banana y almendras picadas.
      </Text>
      <Text style={styles.text}>3. Espolvorear con canela.</Text>

      {/* Tabla de macronutrientes */}
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

      {/* Cuadro nutricional por porción */}
      <Text style={styles.section}>Cuadro nutricional por porción:</Text>
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={styles.cell}>Nutriente</Text>
          <Text style={styles.cell}>Cantidad</Text>
        </View>
        {portionNutrition.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.nutrient}</Text>
            <Text style={styles.cell}>{item.amount}</Text>
          </View>
        ))}
      </View>

      {/* Porcentaje de dieta diaria */}
      <Text style={styles.section}>Para una dieta de 2000 kcal:</Text>
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={styles.cell}>Nutriente</Text>
          <Text style={styles.cell}>Kcal</Text>
          <Text style={styles.cell}>%VD</Text>
        </View>
        {dailyDiet.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.nutrient}</Text>
            <Text style={styles.cell}>{item.kcal}</Text>
            <Text style={styles.cell}>{item.percent}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default AvenaFrutasScreen;

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
