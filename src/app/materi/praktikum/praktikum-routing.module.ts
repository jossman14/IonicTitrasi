import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PraktikumPage } from './praktikum.page';

const routes: Routes = [
  {
    path: '',
    component: PraktikumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PraktikumPageRoutingModule {}
