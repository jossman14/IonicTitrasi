import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UjiPage } from './uji.page';

const routes: Routes = [
  {
    path: '',
    component: UjiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UjiPageRoutingModule {}
