import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndikatorAlamiPageRoutingModule } from './indikator-alami-routing.module';

import { IndikatorAlamiPage } from './indikator-alami.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndikatorAlamiPageRoutingModule
  ],
  declarations: [IndikatorAlamiPage]
})
export class IndikatorAlamiPageModule {}
