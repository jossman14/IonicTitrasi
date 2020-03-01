import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IPKPageRoutingModule } from './ipk-routing.module';

import { IPKPage } from './ipk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IPKPageRoutingModule
  ],
  declarations: [IPKPage]
})
export class IPKPageModule {}
