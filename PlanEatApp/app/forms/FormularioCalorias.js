import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const FormularioCalorias = () => {
  const [sexo, setSexo] = useState('');
  const [edad, setEdad] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [actividad, setActividad] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [deficit, setDeficit] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularCalorias = () => {
    const edadNum = parseInt(edad);
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    const actividadNum = parseFloat(actividad);

    let tmb = sexo === 'mujer'
      ? 655 + (9.6 * pesoNum) + (1.8 * alturaNum) - (4.7 * edadNum)
      : 66 + (13.7 * pesoNum) + (5 * alturaNum) - (6.8 * edadNum);

    const mantenimiento = tmb * actividadNum;

    let calorias = mantenimiento;

    if (objetivo === 'perder') {
      const ajustes = {
        ligero: 0.95,
        moderado: 0.85,
        agresivo: 0.75,
        muy_agresivo: 0.65
      };
      calorias = mantenimiento * ajustes[deficit];
    } else if (objetivo === 'ganar') {
      calorias += 300;
    }

    setResultado(Math.round(calorias));
    
    // Aquí podrías enviar al backend si lo deseas
    // enviarAlBackend({ sexo, edadNum, pesoNum, alturaNum, actividadNum, objetivo, deficit, calorias });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Tu sexo</Text>
      <Picker selectedValue={sexo} onValueChange={setSexo}>
        <Picker.Item label="Mujer" value="mujer" />
        <Picker.Item label="Hombre" value="hombre" />
      </Picker>

      <Text style={styles.label}>Tu edad</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={edad} onChangeText={setEdad} />

      <Text style={styles.label}>Tu peso (kg)</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={peso} onChangeText={setPeso} />

      <Text style={styles.label}>Tu altura (cm)</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={altura} onChangeText={setAltura} />

      <Text style={styles.label}>Nivel de actividad física diaria</Text>
      <Picker selectedValue={actividad} onValueChange={setActividad}>
        <Picker.Item label="Sedentario: poco o nada de ejercicio" value="1.2" />
        <Picker.Item label="Actividad ligera: 1-3 días/semana" value="1.375" />
        <Picker.Item label="Actividad moderada: 3-5 días/semana" value="1.55" />
        <Picker.Item label="Actividad intensa: 6-7 días/semana" value="1.725" />
        <Picker.Item label="Muy intensa: ejercicio/trabajo físico diario" value="1.9" />
      </Picker>

      <Text style={styles.label}>Objetivo</Text>
      <Picker selectedValue={objetivo} onValueChange={setObjetivo}>
        <Picker.Item label="Perder grasa" value="perder" />
        <Picker.Item label="Ganar masa muscular" value="ganar" />
        <Picker.Item label="Mantenimiento" value="mantener" />
      </Picker>

      <Text style={styles.label}>Déficit calórico</Text>
      <Picker selectedValue={deficit} onValueChange={setDeficit}>
        <Picker.Item label="Déficit ligero" value="ligero" />
        <Picker.Item label="Déficit moderado" value="moderado" />
        <Picker.Item label="Déficit agresivo" value="agresivo" />
        <Picker.Item label="Déficit muy agresivo" value="muy_agresivo" />
      </Picker>

      <Button title="Calcular Calorías" onPress={calcularCalorias} />

      {resultado && (
        <Text style={styles.resultado}>Calorías recomendadas: {resultado} kcal/día</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { fontWeight: 'bold', marginTop: 10 },
  input: { borderWidth: 1, padding: 8, marginBottom: 10 },
  resultado: { marginTop: 20, fontSize: 18, fontWeight: 'bold', color: 'green' }
});

export default FormularioCalorias;
