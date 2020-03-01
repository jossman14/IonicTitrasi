import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengenalanPageRoutingModule } from './pengenalan-routing.module';

import { PengenalanPage } from './pengenalan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengenalanPageRoutingModule
  ],
  declarations: [PengenalanPage]
})
export class PengenalanPageModule {}
