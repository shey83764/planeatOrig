import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from 'app/navigation/AppNavigator'; // o el componente raíz de navegación

import { useAppFonts } from 'app/theme';

export default function App() {
  const fontsLoaded = useAppFonts();

  if (!fontsLoaded) return null; // o un SplashScreen

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>

  );
}