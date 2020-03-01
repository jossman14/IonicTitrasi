import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndikatorBuatanPageRoutingModule } from './indikator-buatan-routing.module';

import { IndikatorBuatanPage } from './indikator-buatan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndikatorBuatanPageRoutingModule
  ],
  declarations: [IndikatorBuatanPage]
})
export class IndikatorBuatanPageModule {}
