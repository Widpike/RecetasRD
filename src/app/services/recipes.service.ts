import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';
import { RECIPES } from '../data/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = RECIPES;

  constructor() {}

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getCategories(): string[] {
    return [...new Set(this.recipes.map(recipe => recipe.categoria))];
  }

  getRecipesByCategory(category: string): Recipe[] {
    return this.recipes.filter(recipe => recipe.categoria === category);
  }

  getRecipeById(id: number): Recipe | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }

  searchRecipes(term: string): Recipe[] {
    return this.recipes.filter(recipe =>
      recipe.nombre.toLowerCase().includes(term.toLowerCase())
    );
  }

  filterRecipes(category: string, term: string): Recipe[] {
    return this.recipes.filter(recipe => {
      const matchesCategory = category === 'Todas' || recipe.categoria === category;
      const matchesTerm = recipe.nombre.toLowerCase().includes(term.toLowerCase());
      return matchesCategory && matchesTerm;
    });
  }
}