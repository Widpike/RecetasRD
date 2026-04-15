import { Recipe } from '../interfaces/recipe.interface';

export const RECIPES: Recipe[] = [
  {
    id: 1,
    nombre: 'Mangú',
    categoria: 'Platos principales',
    descripcion: 'Puré tradicional dominicano hecho a base de plátanos verdes hervidos.',
    imagen: 'assets/img/mangu.jpg',
    videoUrl: 'assets/videos/mangu.mp4',
    ingredientes: [
      { nombre: 'Plátanos verdes', cantidad: '4 unidades' },
      { nombre: 'Agua', cantidad: 'Suficiente para hervir' },
      { nombre: 'Sal', cantidad: '1 cucharadita' },
      { nombre: 'Mantequilla', cantidad: '2 cucharadas' },
      { nombre: 'Cebolla roja', cantidad: '1 unidad' }
    ],
    pasos: [
      { numero: 1, instruccion: 'Pelar y hervir los plátanos en agua con sal.' },
      { numero: 2, instruccion: 'Retirar del agua y triturar con mantequilla.' },
      { numero: 3, instruccion: 'Saltear la cebolla y colocarla encima.' }
    ],
    valoracion: 4.8,
    tiempo: '25 min',
    porciones: 4
  },
  {
    id: 2,
    nombre: 'Sancocho',
    categoria: 'Sopas',
    descripcion: 'Sopa dominicana espesa preparada con carnes, víveres y vegetales.',
    imagen: 'assets/img/sancocho.jpg',
    videoUrl: 'assets/videos/sancocho.mp4',
    ingredientes: [
      { nombre: 'Carne de res', cantidad: '1 libra' },
      { nombre: 'Pollo', cantidad: '1 libra' },
      { nombre: 'Yuca', cantidad: '1 unidad' },
      { nombre: 'Plátano', cantidad: '2 unidades' },
      { nombre: 'Auyama', cantidad: '2 tazas' }
    ],
    pasos: [
      { numero: 1, instruccion: 'Sazonar y cocinar las carnes.' },
      { numero: 2, instruccion: 'Agregar agua y los víveres.' },
      { numero: 3, instruccion: 'Cocinar hasta que espese y servir caliente.' }
    ],
    valoracion: 4.9,
    tiempo: '1 h 30 min',
    porciones: 6
  },
  {
    id: 3,
    nombre: 'Habichuelas con dulce',
    categoria: 'Postres',
    descripcion: 'Postre dominicano tradicional elaborado con habichuelas, leche y especias.',
    imagen: 'assets/img/habichuelas.jpg',
    videoUrl: 'assets/videos/habichuelas.mp4',
    ingredientes: [
      { nombre: 'Habichuelas rojas', cantidad: '2 tazas' },
      { nombre: 'Leche evaporada', cantidad: '2 latas' },
      { nombre: 'Azúcar', cantidad: '1 taza' },
      { nombre: 'Canela', cantidad: '2 ramas' },
      { nombre: 'Galletitas', cantidad: '1 paquete' }
    ],
    pasos: [
      { numero: 1, instruccion: 'Hervir las habichuelas y licuarlas.' },
      { numero: 2, instruccion: 'Agregar leche, azúcar y especias.' },
      { numero: 3, instruccion: 'Cocinar a fuego lento y servir con galletitas.' }
    ],
    valoracion: 4.7,
    tiempo: '50 min',
    porciones: 5
  },
  {
    id: 4,
    nombre: 'Jugo de chinola',
    categoria: 'Bebidas',
    descripcion: 'Bebida refrescante tropical hecha con pulpa de chinola.',
    imagen: 'assets/img/chinola.jpg',
    videoUrl: 'assets/videos/chinola.mp4',
    ingredientes: [
      { nombre: 'Chinolas', cantidad: '4 unidades' },
      { nombre: 'Agua', cantidad: '4 tazas' },
      { nombre: 'Azúcar', cantidad: 'Al gusto' },
      { nombre: 'Hielo', cantidad: 'Al gusto' }
    ],
    pasos: [
      { numero: 1, instruccion: 'Extraer la pulpa de las chinolas.' },
      { numero: 2, instruccion: 'Licuar con agua y azúcar.' },
      { numero: 3, instruccion: 'Colar y servir con hielo.' }
    ],
    valoracion: 4.6,
    tiempo: '10 min',
    porciones: 4
  }
];