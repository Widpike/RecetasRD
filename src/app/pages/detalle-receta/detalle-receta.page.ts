import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonTextarea,
  IonSelect,
  IonSelectOption,
  GestureController
} from '@ionic/angular/standalone';

import { Recipe } from '../../interfaces/recipe.interface';
import { Rating } from '../../interfaces/rating.interface';
import { RecipesService } from '../../services/recipes.service';
import { ShoppingListService } from '../../services/shopping-list.service';
import { RatingsService } from '../../services/ratings.service';

@Component({
  selector: 'app-detalle-receta',
  templateUrl: './detalle-receta.page.html',
  styleUrls: ['./detalle-receta.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonTextarea,
    IonSelect,
    IonSelectOption
  ]
})
export class DetalleRecetaPage implements OnInit, AfterViewInit {
  receta?: Recipe;
  mensaje = '';

  puntuacion = 5;
  comentario = '';
  valoraciones: Rating[] = [];

  pasoActualIndex = 0;

  @ViewChild('zonaGestos', { static: false }) zonaGestos!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipesService: RecipesService,
    private shoppingListService: ShoppingListService,
    private ratingsService: RatingsService,
    private gestureCtrl: GestureController
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.receta = this.recipesService.getRecipeById(id);
    this.cargarValoraciones();
  }

  ngAfterViewInit(): void {
    this.inicializarGestos();
  }

  inicializarGestos(): void {
    if (!this.zonaGestos) return;

    const gesture = this.gestureCtrl.create({
      el: this.zonaGestos.nativeElement,
      gestureName: 'swipe-pasos',
      threshold: 15,
      onEnd: (event) => {
        if (event.deltaX < -50) {
          this.siguientePaso();
        } else if (event.deltaX > 50) {
          this.anteriorPaso();
        }
      }
    });

    gesture.enable(true);
  }

  get pasoActual() {
    if (!this.receta || !this.receta.pasos.length) return null;
    return this.receta.pasos[this.pasoActualIndex];
  }

  siguientePaso(): void {
    if (this.receta && this.pasoActualIndex < this.receta.pasos.length - 1) {
      this.pasoActualIndex++;
    }
  }

  anteriorPaso(): void {
    if (this.pasoActualIndex > 0) {
      this.pasoActualIndex--;
    }
  }

  agregarALista(): void {
    if (this.receta) {
      this.shoppingListService.addIngredients(this.receta.ingredientes);
      this.mensaje = 'Ingredientes agregados correctamente';
    }
  }

  agregarYVerLista(): void {
    if (this.receta) {
      this.shoppingListService.addIngredients(this.receta.ingredientes);
      this.router.navigate(['/lista-compras']);
    }
  }

  irAMercados(): void {
    this.router.navigate(['/mercados']);
  }

  guardarValoracion(): void {
    if (!this.receta) return;

    const nuevaValoracion: Rating = {
      recipeId: this.receta.id,
      nombreReceta: this.receta.nombre,
      puntuacion: this.puntuacion,
      comentario: this.comentario.trim(),
      fecha: new Date().toLocaleString()
    };

    this.ratingsService.saveRating(nuevaValoracion);
    this.comentario = '';
    this.puntuacion = 5;
    this.cargarValoraciones();
    this.mensaje = 'Valoración guardada correctamente';
  }

  cargarValoraciones(): void {
    if (this.receta) {
      this.valoraciones = this.ratingsService.getRatingsByRecipe(this.receta.id);
    }
  }

  construirTextoReceta(): string {
    if (!this.receta) return '';

    const ingredientes = this.receta.ingredientes
      .map(i => `- ${i.nombre}: ${i.cantidad}`)
      .join('\n');

    const pasos = this.receta.pasos
      .map(p => `${p.numero}. ${p.instruccion}`)
      .join('\n');

    return `Receta: ${this.receta.nombre}
Categoría: ${this.receta.categoria}
Tiempo: ${this.receta.tiempo}
Porciones: ${this.receta.porciones}

Ingredientes:
${ingredientes}

Pasos:
${pasos}`;
  }

  async compartirReceta(): Promise<void> {
    if (!this.receta) return;

    const texto = this.construirTextoReceta();

    try {
      if (navigator.share) {
        await navigator.share({
          title: this.receta.nombre,
          text: texto
        });
        this.mensaje = 'Receta compartida correctamente';
      } else {
        await navigator.clipboard.writeText(texto);
        this.mensaje = 'Tu dispositivo no soporta compartir directo. La receta fue copiada al portapapeles.';
      }
    } catch (error) {
      console.error('Error al compartir:', error);
      this.mensaje = 'No se pudo compartir la receta.';
    }
  }
}