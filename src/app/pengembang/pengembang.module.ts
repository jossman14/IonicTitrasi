import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengembangPageRoutingModule } from './pengembang-routing.module';

import { PengembangPage } from './pengembang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengembangPageRoutingModule
  ],
  declarations: [PengembangPage]
})
export class PengembangPageModule {}
