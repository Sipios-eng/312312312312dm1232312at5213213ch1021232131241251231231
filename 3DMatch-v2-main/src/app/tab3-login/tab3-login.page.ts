import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Controllador de navegacion

@Component({
  selector: 'app-tab3-login',
  templateUrl: './tab3-login.page.html',
  styleUrls: ['./tab3-login.page.scss'],
})
export class Tab3LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) { }
  login() {
    if (this.username) {
      localStorage.setItem('username', this.username);  // Guardar en localStorage
      this.navCtrl.navigateForward('/tabs/tab1');  // Redirigir a tab1
    } else {
      alert('Por favor ingrese un nombre de usuario');
    }
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  goToRegister() {
    this.navCtrl.navigateForward('/tab3-register');
  }

}
