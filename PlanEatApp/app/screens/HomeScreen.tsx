import React from 'react';
import { View, Text, Button } from 'react-native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { TabParamList } from '../navigation/AppNavigator';

type HomeScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Inicio'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla Inicio</Text>
      <Button title="Ir a Perfil" onPress={() => navigation.navigate('Perfil')} />
    </View>
  );
}
