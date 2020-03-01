import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndikatorAlamiPage } from './indikator-alami.page';

const routes: Routes = [
  {
    path: '',
    component: IndikatorAlamiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndikatorAlamiPageRoutingModule {}
