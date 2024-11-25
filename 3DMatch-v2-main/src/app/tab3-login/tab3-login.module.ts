import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3LoginPageRoutingModule } from './tab3-login-routing.module';

import { Tab3LoginPage } from './tab3-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3LoginPageRoutingModule
  ],
  declarations: [Tab3LoginPage]
})
export class Tab3LoginPageModule {}
