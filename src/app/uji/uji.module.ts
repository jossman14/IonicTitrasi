import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UjiPageRoutingModule } from './uji-routing.module';

import { UjiPage } from './uji.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UjiPageRoutingModule
  ],
  declarations: [UjiPage]
})
export class UjiPageModule {}
