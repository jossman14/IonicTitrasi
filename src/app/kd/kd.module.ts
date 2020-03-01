import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KDPageRoutingModule } from './kd-routing.module';

import { KDPage } from './kd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KDPageRoutingModule
  ],
  declarations: [KDPage]
})
export class KDPageModule {}
