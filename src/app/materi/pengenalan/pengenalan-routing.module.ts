import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengenalanPage } from './pengenalan.page';

const routes: Routes = [
  {
    path: '',
    component: PengenalanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengenalanPageRoutingModule {}
