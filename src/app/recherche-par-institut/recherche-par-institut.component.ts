import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { ServicesComponent } from '../services/services.component';
import { Institut } from '../model/institut.model';
import { tick } from '@angular/core/testing';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recherche-par-institut',
  templateUrl: './recherche-par-institut.component.html',
  //styleUrl:'./recherche-par-institut.component.css'
})
export class RechercheParInstitutComponent implements OnInit {
  etudiant! :Etudiant[];
  instituts! :Institut[];
  nomInstitut! :String;
  idI! :number;
  constructor(private serviceComponent : ServicesComponent){
  
  }
  ngOnInit(): void {
    
   // this.etudiant=this.serviceComponent.listeEtudiant();

    this.serviceComponent.listeInstituts().
    subscribe(cats => {this.instituts = cats._embedded.instituts;
    console.log(cats);
    });
    }
    onChange() {
      this.serviceComponent.rechercherParInstitut(this.idI).
      subscribe(prods =>{this.etudiant=prods});
      }
  }
 /* onChange(){
    console.log(this.nomInstitut);
    const selectedIdI = Number(this.idI);
    console.log('ID sélectionné après conversion:', selectedIdI);
    
    this.etudiant=this.serviceComponent.rechercherParInstitut(selectedIdI);
    console.log('Étudiants après filtrage:', this.etudiant);

  }*/


 

