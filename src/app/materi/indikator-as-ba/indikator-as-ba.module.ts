import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndikatorAsBaPageRoutingModule } from './indikator-as-ba-routing.module';

import { IndikatorAsBaPage } from './indikator-as-ba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IndikatorAsBaPageRoutingModule
  ],
  declarations: [IndikatorAsBaPage]
})
export class IndikatorAsBaPageModule {}
