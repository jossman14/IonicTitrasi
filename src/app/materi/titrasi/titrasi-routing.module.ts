import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitrasiPage } from './titrasi.page';

const routes: Routes = [
  {
    path: '',
    component: TitrasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitrasiPageRoutingModule {}
