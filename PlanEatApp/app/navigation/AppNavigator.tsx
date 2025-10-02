import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

// Screens principales
import HomeScreen from '../screens/HomeScreen';
import PerfilScreen from '../screens/PerfilScreen';
import PlannerScreen from '../screens/PlannerScreen';
import RecipesScreen from '../screens/RecipesScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

// Screens de categorías
import DesayunoScreen from '../screens/desayunos/DesayunoScreen';
import AlmuerzoScreen from '../screens/almuerzo/AlmuerzoScreen';
import MeriendaScreen from '../screens/merienda/MeriendaScreen';
import CenaScreen from '../screens/cena/CenaScreen';

// Screens individuales de recetas (solo ejemplos)
import TostadasPaltaHuevoScreen from '../screens/desayunos/TostadasPaltaHuevoScreen';
import AvenaFrutasScreen from '../screens/desayunos/AvenaFrutasScreen';
import YogurGranolaScreen from '../screens/desayunos/YogurGranolaScreen';
import BatidoBananaScreen from '../screens/desayunos/BatidoBananaScreen';
import PanRicotaScreen from '../screens/desayunos/PanRicotaScreen';

import CustomDrawer from './CustomDrawer';

// ------------------ TYPES ------------------
export type TabParamList = {
  Home: undefined;          // 👈 cambié Inicio → Home
  Recetas: undefined;
  Planificador: undefined;
};

export type DrawerParamList = {
  Tabs: undefined;
  Perfil: undefined;
  Settings: undefined;
  Home: undefined;          // 👈 agregado Home directo al Drawer
};

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  MainDrawer: {
    screen?: keyof DrawerParamList;
    params?: {
      screen?: keyof TabParamList;
      params?: any;
    };
  };
  Perfil: undefined;         // 👈 agregado Home directo al Stack

  Desayuno: { mealType?: 'Desayuno' };
  Almuerzo: { mealType?: 'Almuerzo' };
  Merienda: { mealType?: 'Merienda' };
  Cena: { mealType?: 'Cena' };

  // Screens individuales Desayuno
  TostadasPaltaHuevo: undefined;
  AvenaFrutas: undefined;
  YogurGranola: undefined;
  BatidoBanana: undefined;
  PanRicota: undefined;

  // Screens genéricos
  RecipesList: undefined;
  RecipeDetail: { recipeId: string; title: string };
};

// ------------------ NAVIGATORS ------------------
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#00c39a',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: string = 'help-outline';
          if (route.name === 'Home') iconName = 'home';
          if (route.name === 'Recetas') iconName = 'restaurant-menu';
          if (route.name === 'Planificador') iconName = 'calendar-today';
          return <MaterialIcons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Recetas" component={RecipesScreen} />
      <Tab.Screen name="Planificador" component={PlannerScreen} />
    </Tab.Navigator>
  );
}

function MainDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Tabs"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{ drawerActiveTintColor: '#00c39a', drawerInactiveTintColor: 'gray' }}
    >
      {/* Tabs con Home adentro */}
      <Drawer.Screen
        name="Tabs"
        component={BottomTabs}
        options={{
          title: 'Inicio',
          drawerIcon: ({ color, size }) => <MaterialIcons name="apps" size={size} color={color} />,
          headerShown: false,
        }}
      />


      <Drawer.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{ drawerIcon: ({ color, size }) => <MaterialIcons name="person" size={size} color={color} /> }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ drawerIcon: ({ color, size }) => <MaterialIcons name="settings" size={size} color={color} /> }}
      />
    </Drawer.Navigator>
  );
}

// ------------------ STACK PRINCIPAL ------------------
export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* Autenticación */}
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Registro' }} />
      <Stack.Screen name="MainDrawer" component={MainDrawer} options={{ headerShown: false }} />
      <Stack.Screen name="Perfil" component={PerfilScreen} options={{ title: 'Perfil' }} />

      {/* Categorías */}
      <Stack.Screen name="Desayuno" component={DesayunoScreen} options={{ title: 'Desayuno' }} />
      <Stack.Screen name="Almuerzo" component={AlmuerzoScreen} options={{ title: 'Almuerzo' }} />
      <Stack.Screen name="Merienda" component={MeriendaScreen} options={{ title: 'Merienda' }} />
      <Stack.Screen name="Cena" component={CenaScreen} options={{ title: 'Cena' }} />

      {/* Screens individuales Desayuno */}
      <Stack.Screen name="TostadasPaltaHuevo" component={TostadasPaltaHuevoScreen} options={{ title: 'Tostadas con palta y huevo' }} />
      <Stack.Screen name="AvenaFrutas" component={AvenaFrutasScreen} options={{ title: 'Avena con frutas y frutos secos' }} />
      <Stack.Screen name="YogurGranola" component={YogurGranolaScreen} options={{ title: 'Yogur con granola y frutos rojos' }} />
      <Stack.Screen name="BatidoBanana" component={BatidoBananaScreen} options={{ title: 'Batido de banana, avena y yogur' }} />
      <Stack.Screen name="PanRicota" component={PanRicotaScreen} options={{ title: 'Pan con ricota y miel' }} />

      {/* Screens genéricos */}
      <Stack.Screen name="RecipesList" component={RecipesScreen} options={{ title: 'Recetas' }} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} options={{ title: 'Detalle de receta' }} />
    </Stack.Navigator>
  );
}
