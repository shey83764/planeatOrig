import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const ObjetivosUsuario: React.FC = () => {
  const [pesoObjetivo, setPesoObjetivo] = useState<string>('');
  const [tiempoEstimado, setTiempoEstimado] = useState<string>('');
  const [objetivo, setObjetivo] = useState<string>('');

  const handleSubmit = () => {
    // Validación de peso
    const pesoNum = pesoObjetivo ? parseFloat(pesoObjetivo) : undefined;
    if (pesoNum === undefined || isNaN(pesoNum) || pesoNum <= 0) {
      Alert.alert('Peso objetivo inválido', 'Debe ser un número válido mayor a 0.');
      return;
    }

    // Validación de tiempo
    const tiempoNum = tiempoEstimado ? parseInt(tiempoEstimado) : undefined;
    if (tiempoNum === undefined || isNaN(tiempoNum) || tiempoNum <= 0) {
      Alert.alert('Tiempo inválido', 'Ingresá una cantidad válida de semanas o meses.');
      return;
    }

    if (!objetivo.trim()) {
      Alert.alert('Objetivo vacío', 'Ingresá un objetivo específico.');
      return;
    }

    // Aquí llamás a tu API para enviar los datos
    // enviarObjetivosUsuario({ peso: pesoNum, tiempo: tiempoNum, objetivo });
    Alert.alert('Éxito', `Objetivo guardado:\nPeso: ${pesoNum} kg\nTiempo: ${tiempoNum} semanas\nObjetivo: ${objetivo}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Peso objetivo (kg)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={pesoObjetivo}
        onChangeText={setPesoObjetivo}
        placeholder="Ej: 65"
      />

      <Text style={styles.label}>Tiempo estimado (semanas)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={tiempoEstimado}
        onChangeText={setTiempoEstimado}
        placeholder="Ej: 8"
      />

      <Text style={styles.label}>Objetivo</Text>
      <TextInput
        style={styles.input}
        value={objetivo}
        onChangeText={setObjetivo}
        placeholder="Ej: Perder grasa"
      />

      <Button title="Guardar objetivo" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginTop: 15,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
});

export default ObjetivosUsuario;
