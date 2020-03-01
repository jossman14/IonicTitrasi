import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriPage } from './materi.page';

const routes: Routes = [
  {
    path: '',
    component: MateriPage
  },
  {
    path: 'pengenalan',
    loadChildren: () => import('./pengenalan/pengenalan.module').then( m => m.PengenalanPageModule)
  },
  {
    path: 'indikator-as-ba',
    loadChildren: () => import('./indikator-as-ba/indikator-as-ba.module').then( m => m.IndikatorAsBaPageModule)
  },
  {
    path: 'kurva-titrasi',
    loadChildren: () => import('./kurva-titrasi/kurva-titrasi.module').then( m => m.KurvaTitrasiPageModule)
  },
  {
    path: 'praktikum',
    loadChildren: () => import('./praktikum/praktikum.module').then( m => m.PraktikumPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'titrasi',
    loadChildren: () => import('./titrasi/titrasi.module').then( m => m.TitrasiPageModule)
  },
  {
    path: 'titik-ekuivalen',
    loadChildren: () => import('./titik-ekuivalen/titik-ekuivalen.module').then( m => m.TitikEkuivalenPageModule)
  },
  {
    path: 'indikator-alami',
    loadChildren: () => import('./indikator-alami/indikator-alami.module').then( m => m.IndikatorAlamiPageModule)
  },
  {
    path: 'indikator-buatan',
    loadChildren: () => import('./indikator-buatan/indikator-buatan.module').then( m => m.IndikatorBuatanPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateriPageRoutingModule {}
