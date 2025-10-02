// 📁 app/screens/EditarPerfilScreen.tsx
import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { colors } from "../theme/colors";
import { fontConfig } from "../theme/fonts";

export default function EditarPerfilScreen() {
  const [userData, setUserData] = useState<any>(null);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        if (!user) return;
        const { id } = JSON.parse(user);

        const res = await axios.get(`http://192.168.1.103:3000/api/v1/users/${id}`);
        setUserData(res.data);
        setNombre(res.data.nombre);
        setApellido(res.data.apellido);
        setCorreo(res.data.correo);
      } catch (error) {
        console.log("Error al obtener datos del usuario:", error);
      }
    };

    fetchUser();
  }, []);

  const handleSave = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      if (!user) return;
      const { id } = JSON.parse(user);

      const res = await axios.put(`http://192.168.1.103:3000/api/v1/users/${id}`, {
        nombre,
        apellido,
        correo,
      });

      // Actualizamos AsyncStorage
      const updatedUser = { ...userData, nombre, apellido, correo };
      await AsyncStorage.setItem("user", JSON.stringify(updatedUser));

      Alert.alert("Éxito", "Datos actualizados correctamente");
      setUserData(updatedUser);
    } catch (error) {
      console.log("Error al actualizar usuario:", error);
      Alert.alert("Error", "No se pudo actualizar el perfil");
    }
  };

  if (!userData) return <Text>Cargando...</Text>;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: userData.photoURL || "https://i.pravatar.cc/150?u=default" }}
        style={styles.avatar}
      />

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        value={nombre}
        onChangeText={setNombre}
        style={styles.input}
      />

      <Text style={styles.label}>Apellido</Text>
      <TextInput
        value={apellido}
        onChangeText={setApellido}
        style={styles.input}
      />

      <Text style={styles.label}>Correo</Text>
      <TextInput
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar cambios</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: "center", padding: 30, backgroundColor: colors.lightBackground },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  label: { fontSize: 16, marginTop: 10, color: colors.white, fontFamily: fontConfig.body },
  input: { width: "100%", height: 40, borderBottomWidth: 1, borderBottomColor: colors.white, color: colors.white, marginBottom: 15, fontFamily: fontConfig.body },
  button: { backgroundColor: colors.primary, padding: 15, borderRadius: 30, alignItems: "center", marginTop: 20 },
  buttonText: { color: colors.white, fontWeight: "bold", fontFamily: fontConfig.button },
});
