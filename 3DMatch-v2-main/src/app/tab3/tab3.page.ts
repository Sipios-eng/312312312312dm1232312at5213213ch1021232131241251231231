import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; 
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  username: string = 'Invitado';

  constructor(private navCtrl: NavController,private animationCtrl: AnimationController) {}

  ionViewWillEnter() {
    
    this.loadUsername(); 
    this.animateAvatarRotation();
    
  }
  loadUsername() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      this.username = storedUsername;
    }
  }

  IrALogin() {
    this.navCtrl.navigateForward('/tab3-login'); // Navega a la página de login
  }
  CambiarContra() {
    this.navCtrl.navigateForward('/tab3-contrasena');
  }

  animateAvatarRotation() {
    const avatarElements = document.querySelectorAll('ion-avatar');  // Seleccionar los avatares
  
    if (avatarElements.length > 0) {
      avatarElements.forEach(avatar => {
        const avatarAnimation = this.animationCtrl.create()
          .addElement(avatar)
          .duration(800)
          .fromTo('transform', 'rotate(0deg)', 'rotate(360deg)')  // Girar 360 grados
          .fromTo('opacity', '0', '1');  // Hacer que aparezca suavemente
        
        avatarAnimation.play();
      });
    }
  }
}
