import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import PerfilScreen from '../screens/PerfilScreen';
import PlannerScreen from '../screens/PlannerScreen';
import RecipesScreen from '../screens/RecipesScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterForm from '../screens/RegisterScreen';
import EditarPerfilScreen from '../screens/EditarPerfilScreen';

import DesayunoScreen from '../screens/DesayunoScreen';
import AlmuerzoScreen from '../screens/AlmuerzoScreen';
import MeriendaScreen from '../screens/MeriendaScreen';
import CenaScreen from '../screens/CenaScreen';
import CustomDrawer from './CustomDrawer';

// ------------------ TYPES ------------------

// Bottom Tabs
export type TabParamList = {
  Inicio: undefined;
  Recetas: undefined;
  Planificador: undefined;
};

// Drawer
export type DrawerParamList = {
  Tabs: undefined;
  Perfil: undefined;
  Settings: undefined;
};

// Stack principal
export type RootStackParamList = {
  // Autenticación
  Login: undefined;
  Register: undefined;

  // Drawer principal
  MainDrawer: undefined;
  EditarPerfil: undefined;

  // Pantallas de categorías (opcionalmente puedes pasar mealType si quieres filtrar dentro de la screen)
  Desayuno: { mealType?: 'Desayuno' };
  Almuerzo: { mealType?: 'Almuerzo' };
  Merienda: { mealType?: 'Merienda' };
  Cena: { mealType?: 'Cena' };

  // Pantalla de lista de recetas por tipo
  MealRecipes: { mealType: 'Desayuno' | 'Almuerzo' | 'Merienda' | 'Cena' };

  // Lista general de recetas
  RecipesList: undefined;

  // Detalle de receta
  RecipeDetail: { recipeId: string; title: string };
};


// Stack de recetas
export type RecipesStackParamList = {
  RecipesList: undefined;
  RecipeDetail: { recipeId: string; title: string };
};

// ------------------ NAVIGATORS ------------------

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();
const Drawer = createDrawerNavigator<DrawerParamList>();
const RecipesStack = createNativeStackNavigator<RecipesStackParamList>();

function RecipesStackNavigator() {
  return (
    <RecipesStack.Navigator>
      <RecipesStack.Screen
        name="RecipesList"
        component={RecipesScreen}
        options={{ title: 'Recetas' }}
      />
      <RecipesStack.Screen
        name="RecipeDetail"
        component={RecipeDetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </RecipesStack.Navigator>
  );
}

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#00c39a',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: string;
          switch (route.name) {
            case 'Inicio':
              iconName = 'home';
              break;
            case 'Recetas':
              iconName = 'restaurant-menu';
              break;
            case 'Planificador':
              iconName = 'calendar-today';
              break;
            default:
              iconName = 'help-outline';
          }
          return <MaterialIcons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Recetas" component={RecipesStackNavigator} />
      <Tab.Screen name="Planificador" component={PlannerScreen} />
    </Tab.Navigator>
  );
}

function MainDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Tabs"
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveTintColor: '#00c39a',
        drawerInactiveTintColor: 'gray',
      }}
    >
      <Drawer.Screen
        name="Tabs"
        component={BottomTabs}
        options={{
          title: 'Inicio',
          drawerIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />,
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          drawerIcon: ({ color, size }) => <MaterialIcons name="person" size={size} color={color} />,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color, size }) => <MaterialIcons name="settings" size={size} color={color} />,
        }}
      />
    </Drawer.Navigator>
  );
}

// ------------------ STACK PRINCIPAL ------------------

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterForm} options={{ title: 'Registro' }} />
      <Stack.Screen name="MainDrawer" component={MainDrawer} options={{ headerShown: false }} />
      <Stack.Screen name="EditarPerfil" component={EditarPerfilScreen} options={{ title: 'Editar Perfil' }} />

      {/* Screens de comidas */}
      <Stack.Screen name="Desayuno" component={DesayunoScreen} options={{ title: 'Desayuno' }} />
      <Stack.Screen name="Almuerzo" component={AlmuerzoScreen} options={{ title: 'Almuerzo' }} />
      <Stack.Screen name="Merienda" component={MeriendaScreen} options={{ title: 'Merienda' }} />
      <Stack.Screen name="Cena" component={CenaScreen} options={{ title: 'Cena' }} />

      {/* Navegación de recetas */}
      
      <Stack.Screen name="RecipesList" component={RecipesScreen} options={{ title: 'Recetas' }} />
<Stack.Screen 
  name="RecipeDetail" 
  component={RecipeDetailScreen} 
  options={({ route }) => ({ title: route.params.title })} 
/>

    </Stack.Navigator>
  );
}
