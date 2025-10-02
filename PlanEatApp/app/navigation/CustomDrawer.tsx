// 📁 app/navigation/CustomDrawer.tsx
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "./AppNavigator";

export default function CustomDrawer(props: any) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const savedUser = await AsyncStorage.getItem("user");
      if (savedUser) setUser(JSON.parse(savedUser));
    };

    const unsubscribe = navigation.addListener("focus", fetchUser);
    fetchUser();

    return unsubscribe;
  }, [navigation]);

  const handleLogout = async () => {
    Alert.alert("Cerrar sesión", "¿Estás seguro que quieres cerrar sesión?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Cerrar sesión",
        style: "destructive",
        onPress: async () => {
          await AsyncStorage.removeItem("user");
          await AsyncStorage.removeItem("token");
          navigation.reset({ index: 0, routes: [{ name: "Login" }] });
        },
      },
    ]);
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.header}>
        <Image
          source={{ uri: user?.photoURL || "https://i.pravatar.cc/150?u=default" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>
          {user?.nombre ? `${user.nombre} ${user.apellido || ""}` : "Usuario"}
        </Text>
        <Text style={styles.email}>{user?.correo || "Correo no disponible"}</Text>
      </View>

      <DrawerItemList {...props} />

      <DrawerItem
        label="Cerrar sesión"
        onPress={handleLogout}
        labelStyle={{ color: "#e74c3c", fontWeight: "bold" }}
        icon={() => (
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/000000/logout-rounded.png" }}
            style={{ width: 24, height: 24, tintColor: "#e74c3c" }}
          />
        )}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f5f5f5",
    padding: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  avatar: { width: 70, height: 70, borderRadius: 35, marginBottom: 12 },
  name: { fontWeight: "700", fontSize: 18 },
  email: { fontSize: 14, color: "#666" },
});
