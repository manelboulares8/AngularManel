import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { UpdateEtudComponent } from './update-etud/update-etud.component';
import { RechercheParInstitutComponent } from './recherche-par-institut/recherche-par-institut.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
const routes: Routes = [
  {path :"etudiant", component :EtudiantComponent},
  {path :"add-etudiant", component :AddEtudiantComponent},
  { path: "", redirectTo: "etudiant", pathMatch: "full" },
  {path :"updateEtud/:id", component:UpdateEtudComponent},
  { path: 'recherche-par-institut', component: RechercheParInstitutComponent },
   {path :"recherche-par-nom",component:RechercheParNomComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
