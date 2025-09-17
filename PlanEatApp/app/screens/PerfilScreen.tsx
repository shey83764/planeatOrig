import React from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { guardarPerfilUsuario } from 'app/api_conex/userApi';


export default function ProfileForm() {
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      nombre: '',
      edad: '',
      objetivo: '',
    },
  });

  const onSubmit = async (data: any) => {
    try {
      await guardarPerfilUsuario(data);
      alert('Perfil guardado con éxito');
      reset(); // limpia el form
    } catch (error) {
      console.error('Error al guardar perfil:', error);
      alert('Error al guardar perfil');
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <Text variant="titleLarge">Tu Perfil</Text>

      <Controller
        control={control}
        name="nombre"
        rules={{ required: 'Este campo es obligatorio' }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextInput
            label="Nombre"
            value={value}
            onChangeText={onChange}
            error={!!error}
            style={{ marginBottom: 16 }}
          />
        )}
      />

      <Controller
        control={control}
        name="edad"
        rules={{ required: 'Obligatorio', pattern: { value: /^\d+$/, message: 'Solo números' } }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextInput
            label="Edad"
            value={value}
            onChangeText={onChange}
            keyboardType="numeric"
            error={!!error}
            style={{ marginBottom: 16 }}
          />
        )}
      />

      <Controller
        control={control}
        name="objetivo"
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Objetivo Alimenticio"
            value={value}
            onChangeText={onChange}
            multiline
            numberOfLines={3}
            style={{ marginBottom: 16 }}
          />
        )}
      />

      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Guardar Perfil
      </Button>
    </View>
  );
}
