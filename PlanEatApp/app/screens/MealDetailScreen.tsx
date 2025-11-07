import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-paper';

export default function MealDetailScreen() {
  const meal = {
    title: 'Tostadas con palta y huevo',
    image: require('../../assets/desayunos/tostadas-palta-huevo.jpg'),
    ingredients: [
      '2 rebanadas de pan integral',
      '1 palta madura',
      '1 huevo',
      'Sal y pimienta al gusto',
      'Un chorrito de aceite de oliva',
    ],
    steps: [
      'Tostar el pan.',
      'Aplastar la palta con sal, pimienta y aceite de oliva.',
      'Freír el huevo a gusto.',
      'Colocar la palta sobre el pan y luego el huevo.',
    ],
    nutrition: {
      calorías: '320 kcal',
      proteínas: '14 g',
      grasas: '22 g',
      carbohidratos: '18 g',
    },
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Card style={{ marginBottom: 20, borderRadius: 16 }}>
        <Image source={meal.image} style={{ width: '100%', height: 200, borderRadius: 16 }} />
      </Card>

      <Text variant="headlineSmall" style={{ fontWeight: 'bold', marginBottom: 10 }}>
        {meal.title}
      </Text>

      <Divider style={{ marginVertical: 10 }} />
      <Text variant="titleMedium">Ingredientes</Text>
      {meal.ingredients.map((item, index) => (
        <Text key={index} style={{ marginVertical: 2 }}>• {item}</Text>
      ))}

      <Divider style={{ marginVertical: 10 }} />
      <Text variant="titleMedium">Pasos</Text>
      {meal.steps.map((step, index) => (
        <Text key={index} style={{ marginVertical: 2 }}>{index + 1}. {step}</Text>
      ))}

      <Divider style={{ marginVertical: 10 }} />
      <Text variant="titleMedium">Información nutricional</Text>
      {Object.entries(meal.nutrition).map(([key, value]) => (
        <Text key={key}>{`${key}: ${value}`}</Text>
      ))}

      <Button mode="contained" style={{ marginTop: 20, borderRadius: 12 }} onPress={() => {}}>
        Agregar al plan semanal
      </Button>
    </ScrollView>
  );
}
