import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { ServicesComponent } from '../services/services.component';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent implements OnInit {
  etudiant :Etudiant[];
  constructor (private serviceComponent : ServicesComponent ,public authService: AuthService){
    this.etudiant = serviceComponent.listeEtudiant();
  }
  ngOnInit(): void {
  }
  supprimerEtudiant(e :Etudiant){
    //console.log(e);
    let conf =confirm("vous etes sur ?");
    if (conf)
      this.serviceComponent.supprimerEtudiant(e);

  }
 
  }

