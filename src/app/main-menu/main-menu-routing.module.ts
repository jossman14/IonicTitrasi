import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainMenuPage } from "./main-menu.page";

const routes: Routes = [
  {
    path: "",
    component: MainMenuPage
  },
  {
    path: "folder",
    loadChildren: () =>
      import("../folder/folder.module").then(m => m.FolderPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainMenuPageRoutingModule {}
