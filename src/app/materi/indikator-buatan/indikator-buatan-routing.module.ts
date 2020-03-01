import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndikatorBuatanPage } from './indikator-buatan.page';

const routes: Routes = [
  {
    path: '',
    component: IndikatorBuatanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndikatorBuatanPageRoutingModule {}
