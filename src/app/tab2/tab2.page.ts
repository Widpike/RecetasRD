import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/angular/standalone';

import { Recipe } from '../interfaces/recipe.interface';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonLabel,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
  ]
})
export class Tab2Page implements OnInit {
  categorias: string[] = [];
  recetasFiltradas: Recipe[] = [];
  categoriaSeleccionada: string = 'Todas';
  textoBusqueda: string = '';

  constructor(
    private recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categorias = ['Todas', ...this.recipesService.getCategories()];
    this.recetasFiltradas = this.recipesService.getRecipes();
  }

  filtrarRecetas(): void {
    this.recetasFiltradas = this.recipesService.filterRecipes(
      this.categoriaSeleccionada,
      this.textoBusqueda
    );
  }

  onBuscar(event: any): void {
    this.textoBusqueda = event.detail.value || '';
    this.filtrarRecetas();
  }

  onCategoriaChange(event: any): void {
    this.categoriaSeleccionada = event.detail.value;
    this.filtrarRecetas();
  }

  abrirDetalle(id: number): void {
    this.router.navigate(['/detalle-receta', id]);
  }
}