import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IPKPage } from './ipk.page';

const routes: Routes = [
  {
    path: '',
    component: IPKPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IPKPageRoutingModule {}
