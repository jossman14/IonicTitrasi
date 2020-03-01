import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./main-menu/main-menu.module").then(m => m.MainMenuPageModule)
  },
  {
    path: "kd",
    loadChildren: () => import("./kd/kd.module").then(m => m.KDPageModule)
  },
  {
    path: "ipk",
    loadChildren: () => import("./ipk/ipk.module").then(m => m.IPKPageModule)
  },
  {
    path: "materi",
    loadChildren: () =>
      import("./materi/materi.module").then(m => m.MateriPageModule)
  },
  {
    path: "uji",
    loadChildren: () => import("./uji/uji.module").then(m => m.UjiPageModule)
  },
  {
    path: "pengembang",
    loadChildren: () =>
      import("./pengembang/pengembang.module").then(m => m.PengembangPageModule)
  },
  {
    path: "kalkulator",
    loadChildren: () =>
      import("./kalkulator/kalkulator.module").then(m => m.KalkulatorPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
