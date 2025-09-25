import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

const nutrients = [
  { name: "Frutas frescas (banana)", hc: 12, protein: 1, lipid: 0, weight: 100 },
  { name: "Cereales (avena)", hc: 21, protein: 3.6, lipid: 0, weight: 30 },
  { name: "Yogur descremado", hc: 12, protein: 8, lipid: 6, weight: 200 },
];

const portionNutrition = [
  { nutrient: "Carbohidratos (g)", amount: 70 },
  { nutrient: "  - azúcares (g)", amount: 41.25 },
  { nutrient: "  - fibra (g)", amount: 0.5 },
  { nutrient: "Proteínas (g)", amount: 10 },
  { nutrient: "Grasas totales (g)", amount: 5 },
];

const dailyValues = [
  { nutrient: "Carbohidratos", kcal: 1100, vd: "100%VD" },
  { nutrient: "Proteínas", kcal: 300, vd: "100%VD" },
  { nutrient: "Lípidos", kcal: 600, vd: "100%VD" },
];

const BatidoBananaScreen = () => {
  const totalHC = nutrients.reduce((acc, n) => acc + n.hc, 0);
  const totalProtein = nutrients.reduce((acc, n) => acc + n.protein, 0);
  const totalLipid = nutrients.reduce((acc, n) => acc + n.lipid, 0);
  const totalKcal = totalHC * 4 + totalProtein * 4 + totalLipid * 9;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.title}>🥤 Batido de banana, avena y yogur</Text>

      <Text style={styles.section}>Alimentos:</Text>
      <Text style={styles.text}>• Banana madura 100 g</Text>
      <Text style={styles.text}>• Avena arrollada 30 g</Text>
      <Text style={styles.text}>• Yogur natural descremado 200 ml</Text>
      <Text style={styles.text}>• Semillas de chía 10 g</Text>
      <Text style={styles.text}>• Esencia de vainilla a gusto</Text>

      <Text style={styles.section}>Procedimiento:</Text>
      <Text style={styles.text}>1. Pelar la banana y cortarla en rodajas.</Text>
      <Text style={styles.text}>2. Colocar en la licuadora junto con la avena, el yogur y la chía.</Text>
      <Text style={styles.text}>3. Licuar hasta obtener una textura suave.</Text>
      <Text style={styles.text}>4. Añadir vainilla para aromatizar.</Text>
      <Text style={styles.text}>5. Servir frío.</Text>

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

      {/* Totales */}
      <Text style={styles.section}>Totales:</Text>
      <Text style={styles.text}>
        HC: {totalHC} g | Proteínas: {totalProtein.toFixed(1)} g | Lípidos: {totalLipid.toFixed(1)} g | Kcal: {totalKcal}
      </Text>

      {/* Cuadro nutricional */}
      <Text style={styles.section}>Cuadro nutricional por porción:</Text>
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={styles.cell}>Nutriente</Text>
          <Text style={styles.cell}>Cantidad</Text>
          <Text style={styles.cell}>%VD</Text>
        </View>
        {portionNutrition.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.nutrient}</Text>
            <Text style={styles.cell}>{item.amount}</Text>
            <Text style={styles.cell}></Text>
          </View>
        ))}
      </View>

      {/* Ingesta diaria */}
      <Text style={styles.section}>Para una dieta basada en 2000 kcal:</Text>
      <View style={styles.table}>
        <View style={[styles.row, styles.headerRow]}>
          <Text style={styles.cell}>Macronutriente</Text>
          <Text style={styles.cell}>Kcal</Text>
          <Text style={styles.cell}>%VD</Text>
        </View>
        {dailyValues.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.cell}>{item.nutrient}</Text>
            <Text style={styles.cell}>{item.kcal}</Text>
            <Text style={styles.cell}>{item.vd}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default BatidoBananaScreen;

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
