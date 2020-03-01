import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KurvaTitrasiPage } from './kurva-titrasi.page';

const routes: Routes = [
  {
    path: '',
    component: KurvaTitrasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KurvaTitrasiPageRoutingModule {}
