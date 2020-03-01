import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitikEkuivalenPage } from './titik-ekuivalen.page';

const routes: Routes = [
  {
    path: '',
    component: TitikEkuivalenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitikEkuivalenPageRoutingModule {}
