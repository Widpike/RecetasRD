import { Injectable } from '@angular/core';
import { Rating } from '../interfaces/rating.interface';

@Injectable({
  providedIn: 'root'
})
export class RatingsService {
  private storageKey = 'recipe_ratings';

  getRatings(): Rating[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  saveRating(rating: Rating): void {
    const ratings = this.getRatings();
    ratings.push(rating);
    localStorage.setItem(this.storageKey, JSON.stringify(ratings));
  }

  getRatingsByRecipe(recipeId: number): Rating[] {
    return this.getRatings().filter(r => r.recipeId === recipeId);
  }

  clearRatings(): void {
    localStorage.removeItem(this.storageKey);
  }
}