export interface Ingredient {
  nombre: string;
  cantidad: string;
}

export interface RecipeStep {
  numero: number;
  instruccion: string;
}

export interface Recipe {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  imagen: string;
  videoUrl: string;
  ingredientes: Ingredient[];
  pasos: RecipeStep[];
  valoracion: number;
  tiempo: string;
  porciones: number;
}