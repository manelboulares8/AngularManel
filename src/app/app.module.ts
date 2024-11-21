import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './search-filter.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { ServicesComponent } from './services/services.component';
import { UpdateEtudComponent } from './update-etud/update-etud.component';
import { CommonModule } from '@angular/common';
import {  NO_ERRORS_SCHEMA } from '@angular/core';
import { RechercheParInstitutComponent } from './recherche-par-institut/recherche-par-institut.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { provideHttpClient } from '@angular/common/http';

import { ListeInstitutComponent } from './liste-institut/liste-institut.component';
import { UpdateInstitutComponent } from './update-institut/update-institut.component';


@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    AddEtudiantComponent,
    ServicesComponent,
    UpdateEtudComponent,
    SearchFilterPipe,
    RechercheParInstitutComponent,
    RechercheParNomComponent,
    LoginComponent,
    ForbiddenComponent,
    ListeInstitutComponent,
    UpdateInstitutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()
    
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA] 
})
export class AppModule { }
