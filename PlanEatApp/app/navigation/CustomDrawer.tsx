import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from './AppNavigator'; // Ajusta la ruta

export default function CustomDrawer(props: any) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleLogout = () => {
    Alert.alert('Cerrar sesión', '¿Estás seguro que quieres cerrar sesión?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Cerrar sesión',
        style: 'destructive',
        onPress: () => {
          // Navega a Login, luego cuando tengas Firebase, aquí agrega signOut
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        },
      },
    ]);
  };

  // Datos mock para mostrar (foto, nombre, email)
  const userMock = {
    displayName: 'Sheyla Pérez',
    email: 'sheyla@example.com',
    photoURL: 'https://i.pravatar.cc/150?u=sheyla',
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.header}>
        <Image source={{ uri: userMock.photoURL }} style={styles.avatar} />
        <Text style={styles.name}>{userMock.displayName}</Text>
        <Text style={styles.email}>{userMock.email}</Text>
      </View>

      <View style={styles.content}>
        <DrawerItemList {...props} />
      </View>

      <DrawerItem
        label="Cerrar sesión"
        onPress={handleLogout}
        labelStyle={{ color: '#e74c3c', fontWeight: 'bold' }}
        icon={() => (
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-filled/50/000000/logout-rounded.png',
            }}
            style={{ width: 24, height: 24, tintColor: '#e74c3c' }}
          />
        )}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f5f5f5',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 12,
  },
  name: {
    fontWeight: '700',
    fontSize: 18,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  content: {
    flex: 1,
    paddingTop: 10,
  },
});
