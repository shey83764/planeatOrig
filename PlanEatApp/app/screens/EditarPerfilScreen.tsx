import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { theme } from "../theme"; // ← Importamos el theme centralizado

const schema = yup.object().shape({
  userName: yup.string().required("El nombre es obligatorio"),
  userEmail: yup
    .string()
    .email("Formato de email inválido")
    .required("El email es obligatorio"),
  userAge: yup
    .number()
    .typeError("Debe ser un número")
    .positive("Debe ser mayor a 0")
    .integer("Debe ser un número entero")
    .required("La edad es obligatoria"),
  userHeight: yup.string().required("La altura es obligatoria"),
  userSex: yup.string().required("El sexo es obligatorio"),
});

export default function PerfilScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "UsuarioEjemplo",
      userEmail: "usuario@mail.com",
      userHeight: "170",
      userSex: "Femenino",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    alert(`Datos guardados:\n${JSON.stringify(data, null, 2)}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Editar perfil</Text>

      {/* Usuario */}
      <Text style={styles.label}>Usuario</Text>
      <Controller
        control={control}
        name="userName"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} value={value} onChangeText={onChange} />
        )}
      />
      {errors.userName && <Text style={styles.error}>{errors.userName.message}</Text>}

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        name="userEmail"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            value={value}
            onChangeText={onChange}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
      />
      {errors.userEmail && <Text style={styles.error}>{errors.userEmail.message}</Text>}

      {/* Edad */}
      <Text style={styles.label}>Edad</Text>
      <Controller
        control={control}
        name="userAge"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            value={value !== undefined ? String(value) : ""}
            onChangeText={onChange}
            keyboardType="numeric"
          />
        )}
      />
      {errors.userAge && <Text style={styles.error}>{errors.userAge.message}</Text>}

      {/* Altura */}
      <Text style={styles.label}>Altura</Text>
      <Controller
        control={control}
        name="userHeight"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} value={value} onChangeText={onChange} />
        )}
      />
      {errors.userHeight && <Text style={styles.error}>{errors.userHeight.message}</Text>}

      {/* Sexo */}
      <Text style={styles.label}>Sexo</Text>
      <Controller
        control={control}
        name="userSex"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} value={value} onChangeText={onChange} />
        )}
      />
      {errors.userSex && <Text style={styles.error}>{errors.userSex.message}</Text>}

      {/* Botón Guardar */}
      <Pressable style={styles.saveButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.saveButtonText}>Guardar</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: theme.colors.background,
    flexGrow: 1,
  },
  title: {
    fontFamily: theme.fonts.title,
    color: theme.colors.title,
    fontSize: 24,
    marginBottom: 30,
    textAlign: "center",
  },
  label: {
    fontFamily: theme.fonts.subtitle,
    color: theme.colors.body,
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#F4F6F6",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginBottom: 10,
    fontSize: 16,
    color: theme.colors.body,
    fontFamily: theme.fonts.body,
  },
  error: {
    color: "red",
    fontSize: 13,
    marginBottom: 10,
    fontFamily: theme.fonts.body,
  },
  saveButton: {
    marginTop: 20,
     backgroundColor: theme.colors.primary,
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: "center",
  },
  saveButtonText: {
    fontFamily: theme.fonts.button,
    color: "#fff",
    fontSize: 16,
  },
});
