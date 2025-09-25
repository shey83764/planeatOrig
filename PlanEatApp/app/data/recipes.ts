export type Recipe = {
  id: string;
  title: string;
  category: 'Desayuno' | 'Almuerzo' | 'Merienda' | 'Cena';
  description?: string;
  image: any;
  ingredients: string[];
  procedure: string[];
  nutrition?: {
    carbohydrates: number;
    sugars?: number;
    fiber?: number;
    proteins: number;
    fats: number;
    calories: number;
    [key: string]: number | undefined;
  };
};

export const allRecipes: Recipe[] = [
  // ---------------- DESAYUNO ----------------
  {
    id: 'd1',
    title: 'Tostadas integrales con palta y huevo',
    category: 'Desayuno',
    description: 'Nutritiva para empezar el día',
    image: require('../../assets/desayunos/tostadas-palta-huevo.jpg'),
    ingredients: [
      'Pan integral 60 g (2 rebanadas)',
      'Palta 50 g',
      'Huevo 1 grande (50 g)',
      'Queso untable descremado 20 g',
      'Café o té sin azúcar'
    ],
    procedure: [
      'Tostar el pan integral.',
      'Pisar la palta con un poco de sal.',
      'Cocinar el huevo (hervido o a la plancha).',
      'Untar una tostada con queso, la otra con palta y colocar el huevo encima.'
    ],
    nutrition: {
      carbohydrates: 43.0,
      proteins: 14.3,
      fats: 7.2,
      calories: 294,
      sugars: 41.25,
      fiber: 0.5,
    }
  },
  {
    id: 'd2',
    title: 'Avena con frutas y frutos secos',
    category: 'Desayuno',
    description: 'Energética y rica en fibra',
    image: require('../../assets/desayunos/avena.jpg'),
    ingredients: [
      'Avena arrollada 40 g',
      'Leche descremada 200 ml',
      'Banana 100 g',
      'Almendras 15 g',
      'Canela a gusto'
    ],
    procedure: [
      'Calentar la leche y añadir la avena, cocinando 5 min.',
      'Servir en bol, añadir rodajas de banana y almendras picadas.',
      'Espolvorear con canela.'
    ],
    nutrition: {
      carbohydrates: 52.6,
      proteins: 14.8,
      fats: 11.1,
      calories: 369,
      sugars: 41.25,
      fiber: 0.5,
    }
  },
  {
    id: 'd3',
    title: 'Yogur natural con granola y frutos rojos',
    category: 'Desayuno',
    description: 'Refrescante y ligera',
    image: require('../../assets/desayunos/yogur.jpg'),
    ingredients: [
      'Yogur natural descremado 200 g',
      'Granola sin azúcar 30 g',
      'Frutos rojos 80 g',
      'Miel 5 g'
    ],
    procedure: [
      'Colocar el yogur en un bol.',
      'Añadir la granola y frutos rojos.',
      'Endulzar con miel.'
    ],
    nutrition: {
      carbohydrates: 46.7,
      proteins: 12.4,
      fats: 6.0,
      calories: 290,
      sugars: 41.25,
      fiber: 0.5,
    }
  },
  {
    id: 'd4',
    title: 'Batido de banana, avena y yogur',
    category: 'Desayuno',
    description: 'Proteico y saciante',
    image: require('../../assets/desayunos/batido.jpg'),
    ingredients: [
      'Banana madura 100 g',
      'Avena arrollada 30 g',
      'Yogur natural descremado 200 ml',
      'Semillas de chía 10 g',
      'Esencia de vainilla a gusto'
    ],
    procedure: [
      'Pelar la banana y cortarla en rodajas.',
      'Colocar en la licuadora junto con la avena, el yogur y la chía.',
      'Licuar hasta obtener una textura suave.',
      'Añadir vainilla para aromatizar.',
      'Servir frío.'
    ],
    nutrition: {
      carbohydrates: 45.0,
      proteins: 12.6,
      fats: 6.0,
      calories: 284,
      sugars: 41.25,
      fiber: 0.5,
    }
  },
  {
    id: 'd5',
    title: 'Pan con ricota y miel',
    category: 'Desayuno',
    description: 'Dulce y nutritivo',
    image: require('../../assets/desayunos/pan.jpg'),
    ingredients: [
      'Pan integral 60 g',
      'Ricota magra 40 g',
      'Miel 10 g',
      'Infusión caliente a gusto'
    ],
    procedure: [
      'Tostar el pan.',
      'Untar la ricota y bañar con miel.',
      'Acompañar con la infusión.'
    ],
    nutrition: {
      carbohydrates: 44.2,
      proteins: 16.4,
      fats: 4.8,
      calories: 286,
      sugars: 41.25,
      fiber: 0.5,
    }
  },

  // ---------------- ALMUERZO ----------------
  {
    id: 'l1',
    title: 'Ensalada de arroz integral y pollo',
    category: 'Almuerzo',
    description: 'Ensalada fresca y nutritiva con arroz integral y pollo',
    image: require('../../assets/almuerzo/ensalada-arroz-pollo.jpg'),
    ingredients: [
      'Cereales 70g',
      'Carne 100g',
      'Frutas frescas 40g',
      'Frutas frescas 100g',
      'Aceites 10g'
    ],
    procedure: [
      'Cocinar el arroz integral.',
      'Asar el pollo y cortarlo en tiras.',
      'Mezclar todos los ingredientes.',
      'Aliñar con aceite.'
    ],
    nutrition: {
      carbohydrates: 65.8,
      proteins: 29.8,
      fats: 5.0,
      calories: 427,
      sugars: 41.25,
      fiber: 0.5
    }
  },
  {
    id: 'l2',
    title: 'Arroz integral con filet de merluza y vegetales',
    category: 'Almuerzo',
    description: 'Plato equilibrado con pescado y vegetales',
    image: require('../../assets/almuerzo/arroz-merluza-vegetales.jpg'),
    ingredients: [
      'Cereales 70g',
      'Carne 100g',
      'Vegetales A 100g',
      'Aceites 10g'
    ],
    procedure: [
      'Cocinar arroz integral.',
      'Hornear el filet de merluza.',
      'Saltear vegetales.',
      'Servir junto y aliñar con aceite.'
    ],
    nutrition: {
      carbohydrates: 52.0,
      proteins: 29.4,
      fats: 5.0,
      calories: 371,
      sugars: 41.25,
      fiber: 0.5
    }
  },
  {
    id: 'l3',
    title: 'Wrap integral de atún',
    category: 'Almuerzo',
    description: 'Wrap saludable con atún y vegetales',
    image: require('../../assets/almuerzo/wrap-atun.jpg'),
    ingredients: [
      'Cereales 60g',
      'Carne 80g',
      'Queso untable descremado 20g',
      'Vegetales A 50g',
      'Frutas frescas 30g',
      'Aceites 5g'
    ],
    procedure: [
      'Preparar el wrap con todos los ingredientes.',
      'Enrollar y servir fresco.'
    ],
    nutrition: {
      carbohydrates: 48.1,
      proteins: 25.8,
      fats: 5.2,
      calories: 342,
      sugars: 41.25,
      fiber: 0.5
    }
  },
  {
    id: 'l4',
    title: 'Lentejas guisadas con vegetales',
    category: 'Almuerzo',
    description: 'Guiso de lentejas con verduras',
    image: require('../../assets/almuerzo/lentejas-vegetales.jpg'),
    ingredients: [
      'Legumbres 70g',
      'Vegetales A 50g',
      'Vegetales B 50g',
      'Aceites 10g'
    ],
    procedure: [
      'Cocinar lentejas con vegetales.',
      'Agregar aceite al final.'
    ],
    nutrition: {
      carbohydrates: 46.8,
      proteins: 15.0,
      fats: 1.4,
      calories: 260,
      sugars: 41.25,
      fiber: 0.5
    }
  },
  {
    id: 'l5',
    title: 'Pasta integral con salsa de tomate y queso',
    category: 'Almuerzo',
    description: 'Plato clásico con pasta integral y queso',
    image: require('../../assets/almuerzo/pasta-salsa-queso.jpg'),
    ingredients: [
      'Cereales 70g',
      'Frutas frescas 150g',
      'Queso 15g',
      'Aceites 10g'
    ],
    procedure: [
      'Cocinar pasta integral.',
      'Preparar salsa con frutas frescas y queso.',
      'Servir con aceite.'
    ],
    nutrition: {
      carbohydrates: 67.0,
      proteins: 13.2,
      fats: 3.6,
      calories: 353,
      sugars: 41.25,
      fiber: 0.5
    }
  },

  // ---------------- MERIENDA ----------------
  {
    id: 'sn1',
    title: 'Tostadas con mantequilla de maní',
    category: 'Merienda',
    description: 'Tostadas con un toque dulce y proteico',
    image: require('../../assets/merienda/tostadas-mantequilla-mani.jpg'),
    ingredients: [
      'Pan integral 60g',
      'Yogur entero 20g',
      'Frutas frescas 3g',
      'Mantequilla de maní al gusto'
    ],
    procedure: [
      'Untar mantequilla de maní en las tostadas.',
      'Agregar yogur y frutas.',
      'Servir.'
    ],
    nutrition: {
      carbohydrates: 39.4,
      proteins: 6.8,
      fats: 0.6,
      calories: 190,
      sugars: 41.25,
      fiber: 0.5
    }
  },
  {
    id: 'sn2',
    title: 'Yogurt con avena y frutas',
    category: 'Merienda',
    description: 'Clásico nutritivo y refrescante',
    image: require('../../assets/merienda/yogur-avena-frutas.jpg'),
    ingredients: [
      'Yogur descremado 200g',
      'Cereales 30g',
      'Frutas frescas 100g',
      'Canela al gusto'
    ],
    procedure: [
      'Mezclar yogur con avena y frutas.',
      'Agregar canela y servir frío.'
    ],
    nutrition: {
      carbohydrates: 45.0,
      proteins: 12.6,
      fats: 6.0,
      calories: 284,
      sugars: 41.25,
      fiber: 0.5
    }
  },
  {
    id: 'sn3',
    title: 'Smoothie verde',
    category: 'Merienda',
    description: 'Bebida saludable y llena de energía',
    image: require('../../assets/merienda/smoothie-verde.jpg'),
    ingredients: [
      'Leche entera 200g',
      'Vegetales A 30g',
      'Frutas frescas 100g',
      'Cereales 20g'
    ],
    procedure: [
      'Licuar todos los ingredientes.',
      'Servir frío.'
    ],
    nutrition: {
      carbohydrates: 36.9,
      proteins: 9.7,
      fats: 6.0,
      calories: 240,
      sugars: 41.25,
      fiber: 0.5
    }
  },
  {
    id: 'sn4',
    title: 'Galletas caseras integrales',
    category: 'Merienda',
    description: 'Galletas saludables con queso y frutas',
    image: require('../../assets/merienda/galletas-caseras-integrales.jpg'),
    ingredients: [
      'Cereales 40g',
      'Queso untable entero 20g',
      'Frutas frescas 80g'
    ],
    procedure: [
      'Preparar masa con cereales y queso.',
      'Agregar frutas.',
      'Hornear y servir.'
    ],
    nutrition: {
      carbohydrates: 38.6,
      proteins: 7.0,
      fats: 3.4,
      calories: 213,
      sugars: 41.25,
      fiber: 0.5
    }
  },
  {
    id: 'sn5',
    title: 'Pan con queso y tomate',
    category: 'Merienda',
    description: 'Simple y delicioso',
    image: require('../../assets/merienda/pan-queso-tomate.jpg'),
    ingredients: [
      'Pan 60g',
      'Queso magro 40g',
      'Frutas frescas 80g'
    ],
    procedure: [
      'Untar queso magro en el pan.',
      'Agregar tomate fresco.',
      'Servir.'
    ],
    nutrition: {
      carbohydrates: 45.6,
      proteins: 17.2,
      fats: 4.8,
      calories: 294,
      sugars: 41.25,
      fiber: 0.5
    }
  },

  // ---------------- CENA ----------------
   // ---------------- CENA ----------------
  {
  id: 'c1',
  title: 'Tortilla de espinaca y papas',
  category: 'Cena',
  description: 'Tortilla nutritiva con espinaca y papas',
  image: require('../../assets/cena/tortilla-espinaca-papas.jpg'),
  ingredients: [
    'Papas 150 g',
    'Espinaca 50 g',
    'Huevo 2 u',
    'Aceite 10 g'
  ],
  procedure: [
    'Cocinar papas al vapor.',
    'Saltear espinaca.',
    'Batir huevos y unir todo.',
    'Dorar en sartén.'
  ],
  nutrition: {
    carbohydrates: 28.0,
    proteins: 15.0,
    fats: 10.0,
    calories: 280,
    sugars: 2.5,
    fiber: 4.0,
  }
},
{
  id: 'c2',
  title: 'Sopa de verduras con huevo',
  category: 'Cena',
  description: 'Sopa de verduras con huevo',
  image: require('../../assets/cena/sopa-verduras-huevo.jpg'),
  ingredients: [
    'Caldito de verduras 500 ml',
    'Zapallo 150 g',
    'Zanahoria 50 g',
    'Fideos integrales 40 g',
    'Huevo 1 u'
  ],
  procedure: [
    'Hervir las verduras junto con el caldito hasta que estén cocidas.',
    'Añadir los fideos hasta cocinarlos.',
    'Añadir huevo batido.'
  ],
  nutrition: {
    carbohydrates: 35.0,
    proteins: 12.0,
    fats: 6.0,
    calories: 210,
    sugars: 5.0,
    fiber: 6.0,
  }
},
{
  id: 'c3',
  title: 'Pescado al horno con batata',
  category: 'Cena',
  description: 'Pescado al horno con batata',
  image: require('../../assets/cena/pescado-batata.jpg'),
  ingredients: [
    'Filete de merluza 100 g',
    'Batata 150 g',
    'Aceite 10 g'
  ],
  procedure: [
    'Pincelar con aceite la fuente.',
    'Hornear la batata y el pescado juntos.'
  ],
  nutrition: {
    carbohydrates: 30.0,
    proteins: 25.0,
    fats: 8.0,
    calories: 280,
    sugars: 3.0,
    fiber: 4.0,
  }
},
{
  id: 'c4',
  title: 'Ensalada tibia de garbanzos',
  category: 'Cena',
  description: 'Ensalada ligera y proteica',
  image: require('../../assets/cena/ensalada-garbanzos.jpg'),
  ingredients: [
    'Garbanzos cocidos 100 g',
    'Pimiento 50 g',
    'Cebolla 50 g',
    'Aceite 10 g'
  ],
  procedure: [
    'Saltear vegetales.',
    'Añadir garbanzos.'
  ],
  nutrition: {
    carbohydrates: 25.0,
    proteins: 12.0,
    fats: 6.0,
    calories: 210,
    sugars: 3.0,
    fiber: 6.0,
  }
},
{
  id: 'c5',
  title: 'Omelette de champiñones',
  category: 'Cena',
  description: 'Omelette de champiñones con pan integral',
  image: require('../../assets/cena/omelette-champinones.jpg'),
  ingredients: [
    'Huevo 2 u',
    'Clara extra 1 u',
    'Champiñones 80 g',
    'Aceite 5 g',
    'Pan integral 30 g'
  ],
  procedure: [
    'Saltear champiñones.',
    'Añadir huevos batidos y formar omelette.',
    'Servir con pan.'
  ],
  nutrition: {
    carbohydrates: 20.0,
    proteins: 18.0,
    fats: 10.0,
    calories: 250,
    sugars: 2.0,
    fiber: 4.0,
  }
}
];

