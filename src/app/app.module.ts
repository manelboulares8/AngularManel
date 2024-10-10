import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { ServicesComponent } from './services/services.component';
import { UpdateEtudComponent } from './update-etud/update-etud.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    AddEtudiantComponent,
    ServicesComponent,
    UpdateEtudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
