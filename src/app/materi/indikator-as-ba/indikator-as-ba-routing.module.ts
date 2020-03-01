import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndikatorAsBaPage } from './indikator-as-ba.page';

const routes: Routes = [
  {
    path: '',
    component: IndikatorAsBaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndikatorAsBaPageRoutingModule {}
