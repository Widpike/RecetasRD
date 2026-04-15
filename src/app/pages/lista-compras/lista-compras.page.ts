import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonCheckbox,
  IonButton
} from '@ionic/angular/standalone';

import { ShoppingItem } from '../../interfaces/shopping-item.interface';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.page.html',
  styleUrls: ['./lista-compras.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonCheckbox,
    IonButton
  ]
})
export class ListaComprasPage implements OnInit {
  items: ShoppingItem[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.cargarItems();
  }

  ionViewWillEnter(): void {
    this.cargarItems();
  }

  cargarItems(): void {
    this.items = this.shoppingListService.getItems();
    console.log('Lista cargada:', this.items);
  }

  toggleComprado(index: number): void {
    this.shoppingListService.toggleComprado(index);
    this.cargarItems();
  }

  eliminar(index: number): void {
    this.shoppingListService.removeItem(index);
    this.cargarItems();
  }

  limpiarLista(): void {
    this.shoppingListService.clearList();
    this.cargarItems();
  }
}