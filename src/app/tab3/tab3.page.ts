import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonIcon
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { cartOutline, locationOutline, restaurantOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon
  ]
})
export class Tab3Page {
  constructor(private router: Router) {
    addIcons({
      cartOutline,
      locationOutline,
      restaurantOutline
    });
  }

  abrirListaCompras(): void {
    this.router.navigate(['/lista-compras']);
  }

  abrirMercados(): void {
    this.router.navigate(['/mercados']);
  }

  irAInicio(): void {
    this.router.navigate(['/tabs/tab1']);
  }
}