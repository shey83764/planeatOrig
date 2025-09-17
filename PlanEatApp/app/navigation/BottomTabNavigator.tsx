// navigation/BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import PlannerScreen from '../screens/PlannerScreen';
import RecipesScreen from '../screens/RecipesScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="Planificador" component={PlannerScreen} options={{ title: 'Planificador' }} />
      <Tab.Screen name="Recetas" component={RecipesScreen} options={{ title: 'Recetas' }} />
    </Tab.Navigator>
  );
}
