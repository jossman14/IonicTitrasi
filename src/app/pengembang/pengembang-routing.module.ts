import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengembangPage } from './pengembang.page';

const routes: Routes = [
  {
    path: '',
    component: PengembangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengembangPageRoutingModule {}
