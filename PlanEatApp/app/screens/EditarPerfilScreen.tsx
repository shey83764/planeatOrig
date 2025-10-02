// 📁 app/screens/EditarPerfilScreen.tsx
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/AppNavigator";
import axios from "axios";

export default function EditarPerfilScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [userData, setUserData] = useState<any>(null);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  // Cargar datos del usuario desde AsyncStorage
  useEffect(() => {
    const fetchUser = async () => {
      const savedUser = await AsyncStorage.getItem("user");
      if (!savedUser) return;
      const user = JSON.parse(savedUser);
      setUserData(user);

      setNombre(user.nombre || "");
      setApellido(user.apellido || "");
      setCorreo(user.correo || "");
      setPhotoURL(user.photo || ""); // Usamos "photo" del backend
    };

    fetchUser();
  }, []);

  // Seleccionar imagen
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setPhotoURL(result.assets[0].uri);
    }
  };

  // Guardar cambios
  const handleSave = async () => {
    try {
      if (!userData) return;

      const updatedUser = {
        ...userData,
        nombre,
        apellido,
        correo,
        photo: photoURL, // mapeamos al campo correcto para MySQL
      };

      // Actualizar en backend
      await axios.put(`http://192.168.1.103:3000/api/v1/perfil/${userData.id}`, updatedUser);

      // Guardar en AsyncStorage
      await AsyncStorage.setItem("user", JSON.stringify(updatedUser));

      Alert.alert("Éxito", "Perfil actualizado correctamente");

      // Navegar al MainDrawer automáticamente
      navigation.reset({
        index: 0,
        routes: [{ name: "MainDrawer" }],
      });
    } catch (error) {
      console.error("Error al actualizar perfil:", error);
      Alert.alert("Error", "No se pudo actualizar el perfil. Intenta nuevamente.");
    }
  };

  if (!userData) return <Text style={styles.loading}>Cargando...</Text>;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Image
          source={{ uri: photoURL || "https://i.pravatar.cc/150?u=default" }}
          style={styles.avatar}
        />
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Nombre"
      />
      <TextInput
        style={styles.input}
        value={apellido}
        onChangeText={setApellido}
        placeholder="Apellido"
      />
      <TextInput
        style={styles.input}
        value={correo}
        onChangeText={setCorreo}
        placeholder="Correo"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", padding: 20 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#00c39a",
    padding: 15,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
  loading: { textAlign: "center", marginTop: 50, fontSize: 18 },
});
