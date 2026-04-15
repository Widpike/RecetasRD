import { Injectable } from '@angular/core';
import { ShoppingItem } from '../interfaces/shopping-item.interface';
import { Ingredient } from '../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private storageKey = 'shopping_list';

  getItems(): ShoppingItem[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  addIngredients(ingredientes: Ingredient[]): void {
    const items = this.getItems();

    ingredientes.forEach((ingrediente) => {
      items.push({
        nombre: ingrediente.nombre,
        cantidad: ingrediente.cantidad,
        comprado: false
      });
    });

    localStorage.setItem(this.storageKey, JSON.stringify(items));
    console.log('Guardado en localStorage:', items);
  }

  toggleComprado(index: number): void {
    const items = this.getItems();
    items[index].comprado = !items[index].comprado;
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  removeItem(index: number): void {
    const items = this.getItems();
    items.splice(index, 1);
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }

  clearList(): void {
    localStorage.removeItem(this.storageKey);
  }
}