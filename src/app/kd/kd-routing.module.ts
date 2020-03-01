import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KDPage } from './kd.page';

const routes: Routes = [
  {
    path: '',
    component: KDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KDPageRoutingModule {}
