import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  IonText
} from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-mercados',
  templateUrl: './mercados.page.html',
  styleUrls: ['./mercados.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonText
  ]
})
export class MercadosPage {
  latitud: number | null = null;
  longitud: number | null = null;
  mensaje = '';

  async obtenerUbicacion(): Promise<void> {
    try {
      const estado = await Geolocation.checkPermissions();

      if (estado.location !== 'granted') {
        const solicitud = await Geolocation.requestPermissions();

        if (solicitud.location !== 'granted') {
          this.mensaje = 'Permiso de ubicación denegado.';
          return;
        }
      }

      this.mensaje = 'Obteniendo ubicación...';

      const position = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true
      });

      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
      this.mensaje = 'Ubicación obtenida correctamente.';
    } catch (error) {
      console.error('Error de geolocalización:', error);
      this.mensaje = 'No se pudo obtener la ubicación. Revisa los permisos.';
    }
  }

  abrirMercados(): void {
    if (this.latitud !== null && this.longitud !== null) {
      const url = `https://www.google.com/maps/search/mercados/@${this.latitud},${this.longitud},15z`;
      window.open(url, '_blank');
    }
  }

  abrirSupermercados(): void {
    if (this.latitud !== null && this.longitud !== null) {
      const url = `https://www.google.com/maps/search/supermercados/@${this.latitud},${this.longitud},15z`;
      window.open(url, '_blank');
    }
  }
}