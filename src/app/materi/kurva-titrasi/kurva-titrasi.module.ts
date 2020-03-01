import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KurvaTitrasiPageRoutingModule } from './kurva-titrasi-routing.module';

import { KurvaTitrasiPage } from './kurva-titrasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KurvaTitrasiPageRoutingModule
  ],
  declarations: [KurvaTitrasiPage]
})
export class KurvaTitrasiPageModule {}
