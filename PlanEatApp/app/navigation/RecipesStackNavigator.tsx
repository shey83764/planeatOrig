import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RecipesScreen from '../screens/RecipesScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen'; // Lo crearás para el detalle

export type RecipesStackParamList = {
  RecipesList: undefined;
  RecipeDetail: { recipeId: string; title: string };
};

const Stack = createNativeStackNavigator<RecipesStackParamList>();

export default function RecipesStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RecipesList"
        component={RecipesScreen}
        options={{ title: 'Recetas' }}
      />
      <Stack.Screen
        name="RecipeDetail"
        component={RecipeDetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}
