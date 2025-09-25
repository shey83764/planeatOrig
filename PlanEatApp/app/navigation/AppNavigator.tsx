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
import RegisterForm from '../screens/RegisterScreen';
import EditarPerfilScreen from '../screens/EditarPerfilScreen';

// Screens de categorías
import DesayunoScreen from '../screens/desayunos/DesayunoScreen';
import AlmuerzoScreen from '../screens/almuerzo/AlmuerzoScreen';
import MeriendaScreen from '../screens/merienda/MeriendaScreen';
import CenaScreen from '../screens/cena/CenaScreen';

// Screens individuales de recetas
// --- Desayuno
import TostadasPaltaHuevoScreen from '../screens/desayunos/TostadasPaltaHuevoScreen';
import AvenaFrutasScreen from '../screens/desayunos/AvenaFrutasScreen';
import YogurGranolaScreen from '../screens/desayunos/YogurGranolaScreen';
import BatidoBananaScreen from '../screens/desayunos/BatidoBananaScreen';
import PanRicotaScreen from '../screens/desayunos/PanRicotaScreen';

// --- Almuerzo
import EnsaladaArrozPolloScreen from '../screens/almuerzo/EnsaladaArrozPolloScreen';
import ArrozMerluzaVegetalesScreen from '../screens/almuerzo/ArrozMerluzaVegetalesScreen';
import WrapAtunScreen from '../screens/almuerzo/WrapAtunScreen';
import LentejasVegetalesScreen from '../screens/almuerzo/LentejasGuisadasScreen';
import PastaSalsaQuesoScreen from '../screens/almuerzo/PastaTomateQuesoScreen';

// --- Merienda
import TostadasMantequillaManiScreen from '../screens/merienda/TostadasMantequillaManiScreen';
import YogurAvenaFrutasScreen from '../screens/merienda/YogurAvenaFrutasScreen';
import SmoothieVerdeScreen from '../screens/merienda/SmoothieVerdeScreen';
import GalletasCaserasIntegralesScreen from '../screens/merienda/GalletasCaserasIntegralesScreen';
import PanQuesoTomateScreen from '../screens/merienda/PanQuesoTomateScreen';

// --- Cena
import TortillaEspinacaPapasScreen from '../screens/cena/TortillaEspinacaPapasScreen';
import SopaVerdurasHuevoScreen from '../screens/cena/SopaVerdurasHuevoScreen';
import PescadoBatataScreen from '../screens/cena/PescadoBatataScreen';
import EnsaladaGarbanzosScreen from '../screens/cena/EnsaladaGarbanzosScreen';
import OmeletteChampinonesScreen from '../screens/cena/OmeletteChampinonesScreen';

import CustomDrawer from './CustomDrawer';

// ------------------ TYPES ------------------
export type TabParamList = {
  Inicio: undefined;
  Recetas: undefined;
  Planificador: undefined;
};

export type DrawerParamList = {
  Tabs: undefined;
  Perfil: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  MainDrawer: undefined;
  EditarPerfil: undefined;

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

  // Screens individuales Almuerzo
  EnsaladaArrozPollo: undefined;
  ArrozMerluzaVegetales: undefined;
  WrapAtun: undefined;
  LentejasVegetales: undefined;
  PastaSalsaQueso: undefined;

  // Screens individuales Merienda
  TostadasMantequillaMani: undefined;
  YogurAvenaFrutas: undefined;
  SmoothieVerde: undefined;
  GalletasCaserasIntegrales: undefined;
  PanQuesoTomate: undefined;

  // Screens individuales Cena
  TortillaEspinacaPapas: undefined;
  SopaVerdurasHuevo: undefined;
  PescadoBatata: undefined;
  EnsaladaGarbanzos: undefined;
  OmeletteChampinones: undefined;

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
          let iconName: string;
          switch (route.name) {
            case 'Inicio': iconName = 'home'; break;
            case 'Recetas': iconName = 'restaurant-menu'; break;
            case 'Planificador': iconName = 'calendar-today'; break;
            default: iconName = 'help-outline';
          }
          return <MaterialIcons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
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
      <Stack.Screen name="Register" component={RegisterForm} options={{ title: 'Registro' }} />
      <Stack.Screen name="MainDrawer" component={MainDrawer} options={{ headerShown: false }} />
      <Stack.Screen name="EditarPerfil" component={EditarPerfilScreen} options={{ title: 'Editar Perfil' }} />

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

      {/* Screens individuales Almuerzo */}
      <Stack.Screen name="EnsaladaArrozPollo" component={EnsaladaArrozPolloScreen} options={{ title: 'Ensalada de arroz integral y pollo' }} />
      <Stack.Screen name="ArrozMerluzaVegetales" component={ArrozMerluzaVegetalesScreen} options={{ title: 'Arroz integral con filet de merluza y vegetales' }} />
      <Stack.Screen name="WrapAtun" component={WrapAtunScreen} options={{ title: 'Wrap integral de atún' }} />
      <Stack.Screen name="LentejasVegetales" component={LentejasVegetalesScreen} options={{ title: 'Lentejas guisadas con vegetales' }} />
      <Stack.Screen name="PastaSalsaQueso" component={PastaSalsaQuesoScreen} options={{ title: 'Pasta integral con salsa de tomate y queso' }} />

      {/* Screens individuales Merienda */}
      <Stack.Screen name="TostadasMantequillaMani" component={TostadasMantequillaManiScreen} options={{ title: 'Tostadas con mantequilla de maní' }} />
      <Stack.Screen name="YogurAvenaFrutas" component={YogurAvenaFrutasScreen} options={{ title: 'Yogur con avena y frutas' }} />
      <Stack.Screen name="SmoothieVerde" component={SmoothieVerdeScreen} options={{ title: 'Smoothie verde' }} />
      <Stack.Screen name="GalletasCaserasIntegrales" component={GalletasCaserasIntegralesScreen} options={{ title: 'Galletas caseras integrales' }} />
      <Stack.Screen name="PanQuesoTomate" component={PanQuesoTomateScreen} options={{ title: 'Pan con queso y tomate' }} />

      {/* Screens individuales Cena */}
      <Stack.Screen name="TortillaEspinacaPapas" component={TortillaEspinacaPapasScreen} options={{ title: 'Tortilla de espinaca y papas' }} />
      <Stack.Screen name="SopaVerdurasHuevo" component={SopaVerdurasHuevoScreen} options={{ title: 'Sopa de verduras con huevo' }} />
      <Stack.Screen name="PescadoBatata" component={PescadoBatataScreen} options={{ title: 'Pescado al horno con batata' }} />
      <Stack.Screen name="EnsaladaGarbanzos" component={EnsaladaGarbanzosScreen} options={{ title: 'Ensalada tibia de garbanzos' }} />
      <Stack.Screen name="OmeletteChampinones" component={OmeletteChampinonesScreen} options={{ title: 'Omelette de champiñones' }} />

      {/* Screens genéricos */}
      <Stack.Screen name="RecipesList" component={RecipesScreen} options={{ title: 'Recetas' }} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} options={{ title: 'Detalle de receta' }} />
    </Stack.Navigator>
  );
}