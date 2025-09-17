import React from "react";
import { View, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { TextInput, Button, HelperText, Text } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

type FormData = {
  sexo: string;
  edad: string;
  peso: string;
  altura: string;
  actividad: string;
  objetivo: string;
};

export default function RegisterForm() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

  // 🔹 Enviar datos al backend
  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("http://10.0.2.2:3000/api/register", { 
        // ⚠️ Android Emulator usa 10.0.2.2
        // Si probás en dispositivo físico, cambiá por la IP local de tu PC
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("✅ Respuesta del backend:", result);
      alert("Usuario registrado con éxito");
    } catch (error) {
      console.error("❌ Error al registrar usuario:", error);
      alert("Hubo un error al registrarte");
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Registro en PlanEat</Text>

      {/* Sexo */}
      <Controller
        control={control}
        name="sexo"
        rules={{ required: "Elige tu sexo" }}
        render={({ field: { onChange, value } }) => (
          <Picker selectedValue={value} onValueChange={onChange}>
            <Picker.Item label="Selecciona tu sexo" value="" />
            <Picker.Item label="Femenino" value="femenino" />
            <Picker.Item label="Masculino" value="masculino" />
            <Picker.Item label="Otro" value="otro" />
          </Picker>
        )}
      />
      {errors.sexo && <HelperText type="error">{errors.sexo.message}</HelperText>}

      {/* Edad */}
      <Controller
        control={control}
        name="edad"
        rules={{ required: "Introduce tu edad" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Edad"
            keyboardType="numeric"
            value={value}
            onChangeText={onChange}
            mode="outlined"
          />
        )}
      />
      {errors.edad && <HelperText type="error">{errors.edad.message}</HelperText>}

      {/* Peso */}
      <Controller
        control={control}
        name="peso"
        rules={{ required: "Introduce tu peso" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Peso (kg)"
            keyboardType="numeric"
            value={value}
            onChangeText={onChange}
            mode="outlined"
          />
        )}
      />
      {errors.peso && <HelperText type="error">{errors.peso.message}</HelperText>}

      {/* Altura */}
      <Controller
        control={control}
        name="altura"
        rules={{ required: "Introduce tu altura" }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            label="Altura (cm)"
            keyboardType="numeric"
            value={value}
            onChangeText={onChange}
            mode="outlined"
          />
        )}
      />
      {errors.altura && <HelperText type="error">{errors.altura.message}</HelperText>}

      {/* Actividad */}
      <Controller
        control={control}
        name="actividad"
        rules={{ required: "Selecciona tu nivel de actividad" }}
        render={({ field: { onChange, value } }) => (
          <Picker selectedValue={value} onValueChange={onChange}>
            <Picker.Item label="Selecciona tu actividad" value="" />
            <Picker.Item label="Sedentario" value="sedentario" />
            <Picker.Item label="Ligero (1–3 días/semana)" value="ligero" />
            <Picker.Item label="Moderado (3–5 días/semana)" value="moderado" />
            <Picker.Item label="Intenso (6–7 días/semana)" value="intenso" />
            <Picker.Item label="Muy intenso" value="muy_intenso" />
          </Picker>
        )}
      />
      {errors.actividad && <HelperText type="error">{errors.actividad.message}</HelperText>}

      {/* Objetivo */}
      <Controller
        control={control}
        name="objetivo"
        rules={{ required: "Selecciona tu objetivo" }}
        render={({ field: { onChange, value } }) => (
          <Picker selectedValue={value} onValueChange={onChange}>
            <Picker.Item label="Selecciona tu objetivo" value="" />
            <Picker.Item label="Bajar de peso" value="bajar_peso" />
            <Picker.Item label="Mantener peso" value="mantener_peso" />
            <Picker.Item label="Ganar músculo" value="ganar_musculo" />
          </Picker>
        )}
      />
      {errors.objetivo && <HelperText type="error">{errors.objetivo.message}</HelperText>}

      {/* Botón */}
      <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.btn}>
        Registrarse
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 12,
  },
  btn: {
    marginTop: 20,
  },
});
