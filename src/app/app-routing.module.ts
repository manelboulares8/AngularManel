import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { UpdateEtudComponent } from './update-etud/update-etud.component';
const routes: Routes = [
  {path :"etudiant", component :EtudiantComponent},
  {path :"add-etudiant", component :AddEtudiantComponent},
  { path: "", redirectTo: "etudiant", pathMatch: "full" },
  {path :"updateEtud/:id", component:UpdateEtudComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
