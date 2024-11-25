import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';


declare var google: any;  // Declarar la variable global de Google Maps

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  username: string = 'Invitado';
  constructor(private route: ActivatedRoute,private animationCtrl: AnimationController) {}
  ngOnInit() {
    this.loadMap();
    
  }
  ionViewWillEnter() {
    
    this.loadUsername(); 
    this.animateTitle();
  }
  loadUsername() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    }
  }
  

  loadMap() {
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: -33.5138, lng: -70.5983 },  // Coordenadas iniciales
      zoom: 16,
    });

    // Puedes agregar más configuraciones aquí
  }
  animateTitle() {
    const titleElement = document.querySelector('ion-title');  // Seleccionar el elemento
  
    if (titleElement) {  // Verificar que el elemento no sea null
      const titleAnimation = this.animationCtrl.create()
        .addElement(titleElement)  // Aplicar la animación solo si el elemento existe
        .duration(1500)
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'scale(0.8)', 'scale(1)');
      
      titleAnimation.play();
    }
  }
}