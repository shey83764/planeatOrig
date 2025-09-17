// app/forms/DatosFisicos.tsx
import React from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import { Button, TextInput, HelperText, RadioButton, Text } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { enviarDatosFisicos, DatosFisicosPayload } from '../api_conex/datos/datosFisicosApi';

// Tipos del formulario
type DatosFisicosForm = {
  peso: string;
  altura: string;
  edad: string;
  sexo: 'M' | 'F';
  nivelActividad: 'Bajo' | 'Medio' | 'Alto';
  objetivo: 'PerderPeso' | 'MantenerPeso' | 'GanarMusculo';
};

export const DatosFisicos: React.FC = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<DatosFisicosForm>({
    defaultValues: {
      peso: '',
      altura: '',
      edad: '',
      sexo: 'M',
      nivelActividad: 'Medio',
      objetivo: 'MantenerPeso',
    }
  });

  const onSubmit = async (formData: DatosFisicosForm) => {
    try {
      // Parseamos strings a números antes de enviar
      const payload: DatosFisicosPayload = {
        peso: parseFloat(formData.peso),
        altura: parseFloat(formData.altura),
        edad: parseInt(formData.edad, 10),
        sexo: formData.sexo,
        nivelActividad: formData.nivelActividad,
        objetivo: formData.objetivo,
      };

      const result = await enviarDatosFisicos(payload);
      Alert.alert('Éxito', 'Datos enviados correctamente');
      console.log('Respuesta backend:', result);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Peso */}
      <Controller
        control={control}
        name="peso"
        rules={{
          required: 'El peso es obligatorio',
          pattern: { value: /^\d+(\.\d{1,2})?$/, message: 'Debe ser un número válido' }
        }}
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              label="Peso (kg)"
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
            {errors.peso && <HelperText type="error">{errors.peso.message}</HelperText>}
          </>
        )}
      />

      {/* Altura */}
      <Controller
        control={control}
        name="altura"
        rules={{
          required: 'La altura es obligatoria',
          pattern: { value: /^\d+(\.\d{1,2})?$/, message: 'Debe ser un número válido' }
        }}
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              label="Altura (cm)"
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
            {errors.altura && <HelperText type="error">{errors.altura.message}</HelperText>}
          </>
        )}
      />

      {/* Edad */}
      <Controller
        control={control}
        name="edad"
        rules={{
          required: 'La edad es obligatoria',
          pattern: { value: /^\d+$/, message: 'Debe ser un número entero' },
          min: { value: 1, message: 'La edad debe ser mayor a 0' },
          max: { value: 120, message: 'Edad inválida' }
        }}
        render={({ field: { onChange, value } }) => (
          <>
            <TextInput
              label="Edad"
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
              mode="outlined"
              style={styles.input}
            />
            {errors.edad && <HelperText type="error">{errors.edad.message}</HelperText>}
          </>
        )}
      />

      {/* Sexo */}
      <Controller
        control={control}
        name="sexo"
        render={({ field: { onChange, value } }) => (
          <View style={styles.radioGroup}>
            <Text>Sexo</Text>
            <RadioButton.Group onValueChange={onChange} value={value}>
              <RadioButton.Item label="Masculino" value="M" />
              <RadioButton.Item label="Femenino" value="F" />
            </RadioButton.Group>
          </View>
        )}
      />

      {/* Nivel de actividad */}
      <Controller
        control={control}
        name="nivelActividad"
        render={({ field: { onChange, value } }) => (
          <View style={styles.radioGroup}>
            <Text>Nivel de actividad</Text>
            <RadioButton.Group onValueChange={onChange} value={value}>
              <RadioButton.Item label="Bajo" value="Bajo" />
              <RadioButton.Item label="Medio" value="Medio" />
              <RadioButton.Item label="Alto" value="Alto" />
            </RadioButton.Group>
          </View>
        )}
      />

      {/* Objetivo */}
      <Controller
        control={control}
        name="objetivo"
        render={({ field: { onChange, value } }) => (
          <View style={styles.radioGroup}>
            <Text>Objetivo</Text>
            <RadioButton.Group onValueChange={onChange} value={value}>
              <RadioButton.Item label="Perder peso" value="PerderPeso" />
              <RadioButton.Item label="Mantener peso" value="MantenerPeso" />
              <RadioButton.Item label="Ganar músculo" value="GanarMusculo" />
            </RadioButton.Group>
          </View>
        )}
      />

      {/* Botón enviar */}
      <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
        Enviar
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  radioGroup: {
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
  },
});
