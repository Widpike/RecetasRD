import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

import { Recipe } from '../interfaces/recipe.interface';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
  ]
})
export class Tab1Page implements OnInit {
  recetas: Recipe[] = [];

  constructor(
    private recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recetas = this.recipesService.getRecipes();
  }

  abrirDetalle(id: number): void {
    this.router.navigate(['/detalle-receta', id]);
  }
}