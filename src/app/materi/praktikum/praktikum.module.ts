import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PraktikumPageRoutingModule } from './praktikum-routing.module';

import { PraktikumPage } from './praktikum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PraktikumPageRoutingModule
  ],
  declarations: [PraktikumPage]
})
export class PraktikumPageModule {}
