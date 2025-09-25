import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

const nutrients = [
  { name: "Pan integral", hc: 36, protein: 6.0, lipid: 0.0, weight: 60 },
  { name: "Ricota magra", hc: 0.0, protein: 10.4, lipid: 4.8, weight: 40 },
  { name: "Miel", hc: 8.2, protein: 0.0, lipid: 0.0, weight: 10 },
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

const PanRicotaScreen = () => {
  const totalHC = nutrients.reduce((acc, n) => acc + n.hc, 0);
  const totalProtein = nutrients.reduce((acc, n) => acc + n.protein, 0);
  const totalLipid = nutrients.reduce((acc, n) => acc + n.lipid, 0);
  const totalKcal = 177 + 66 + 43; // según el cuadro: 286 kcal

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.title}>🍯 Pan con ricota y miel</Text>

      <Text style={styles.section}>Alimentos:</Text>
      <Text style={styles.text}>• Pan integral 60 g</Text>
      <Text style={styles.text}>• Ricota magra 40 g</Text>
      <Text style={styles.text}>• Miel 10 g</Text>
      <Text style={styles.text}>• Infusión caliente a gusto</Text>

      <Text style={styles.section}>Procedimiento:</Text>
      <Text style={styles.text}>1. Tostar el pan.</Text>
      <Text style={styles.text}>2. Untar la ricota y bañar con miel.</Text>
      <Text style={styles.text}>3. Acompañar con la infusión.</Text>

      {/* Tabla de macronutrientes por alimento */}
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
            <Text style={styles.cell}>{item.hc.toFixed(1)}</Text>
            <Text style={styles.cell}>{item.protein.toFixed(1)}</Text>
            <Text style={styles.cell}>{item.lipid.toFixed(1)}</Text>
            <Text style={styles.cell}>{item.weight}</Text>
          </View>
        ))}
      </View>

      {/* Totales */}
      <Text style={styles.section}>Totales:</Text>
      <Text style={styles.text}>
        HC: {totalHC.toFixed(1)} g | Proteínas: {totalProtein.toFixed(1)} g | Lípidos: {totalLipid.toFixed(1)} g | Kcal: {totalKcal}
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

export default PanRicotaScreen;

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
