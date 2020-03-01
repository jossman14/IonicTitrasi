import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitikEkuivalenPageRoutingModule } from './titik-ekuivalen-routing.module';

import { TitikEkuivalenPage } from './titik-ekuivalen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitikEkuivalenPageRoutingModule
  ],
  declarations: [TitikEkuivalenPage]
})
export class TitikEkuivalenPageModule {}
