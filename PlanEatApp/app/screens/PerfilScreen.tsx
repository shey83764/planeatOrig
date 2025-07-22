import React from 'react';
import { View, Text, Button } from 'react-native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import type { TabParamList } from '../navigation/AppNavigator';

type ProfileScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

export default function ProfileScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla Perfil</Text>
      <Button title="Ir a Inicio" onPress={() => navigation.navigate('Inicio')} />
    </View>
  );
}
