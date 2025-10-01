// 📁 utils/calculadoraNutricional.ts

// Definimos la estructura de datos que recibimos
export interface DatosUsuario {
  genero: "hombre" | "mujer";
  edad: number;
  peso: number;      // kg
  estatura: number;  // cm
  nivelActividad: "sedentario" | "ligero" | "moderado" | "intenso" | "muy_intenso";
  objetivo: "perder_peso" | "mantener_peso" | "ganar_peso";
}

// Calcula TMB y macros
export const calcularTMBYMacros = ({
  genero,
  edad,
  peso,
  estatura,
  nivelActividad,
  objetivo,
}: DatosUsuario) => {
  let tmb: number;

  if (genero === "hombre") {
    tmb = 88.36 + 13.4 * peso + 4.8 * estatura - 5.7 * edad;
  } else {
    tmb = 447.6 + 9.2 * peso + 3.1 * estatura - 4.3 * edad;
  }

  const factores: Record<DatosUsuario["nivelActividad"], number> = {
    sedentario: 1.2,
    ligero: 1.375,
    moderado: 1.55,
    intenso: 1.725,
    muy_intenso: 1.9,
  };

  const tdee = tmb * factores[nivelActividad];

  let calorias = tdee;
  if (objetivo === "perder_peso") calorias *= 0.85;
  if (objetivo === "ganar_peso") calorias *= 1.15;

  const proteinas = (calorias * 0.2) / 4;
  const carbohidratos = (calorias * 0.5) / 4;
  const grasas = (calorias * 0.3) / 9;

  return {
    calorias: Math.round(calorias),
    proteinas: Math.round(proteinas),
    carbohidratos: Math.round(carbohidratos),
    grasas: Math.round(grasas),
  };
};

// Separado: calcular solo calorías
export const calcularCalorias = ({
  genero,
  edad,
  peso,
  estatura,
  nivelActividad,
  objetivo,
}: DatosUsuario): number => {
  let tmb: number;

  if (genero === "hombre") {
    tmb = 88.36 + 13.4 * peso + 4.8 * estatura - 5.7 * edad;
  } else {
    tmb = 447.6 + 9.2 * peso + 3.1 * estatura - 4.3 * edad;
  }

  const factores: Record<DatosUsuario["nivelActividad"], number> = {
    sedentario: 1.2,
    ligero: 1.375,
    moderado: 1.55,
    intenso: 1.725,
    muy_intenso: 1.9,
  };

  let calorias = tmb * factores[nivelActividad];

  if (objetivo === "perder_peso") calorias *= 0.85;
  if (objetivo === "ganar_peso") calorias *= 1.15;

  return Math.round(calorias);
};

// Separado: calcular macros desde calorías
export const calcularMacros = (calorias: number) => {
  const proteinas = (calorias * 0.2) / 4;
  const carbohidratos = (calorias * 0.5) / 4;
  const grasas = (calorias * 0.3) / 9;

  return {
    proteinas: Math.round(proteinas),
    carbohidratos: Math.round(carbohidratos),
    grasas: Math.round(grasas),
  };
};
