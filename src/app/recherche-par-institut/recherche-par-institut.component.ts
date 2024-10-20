import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { ServicesComponent } from '../services/services.component';
import { Institut } from '../model/institut.model';
import { tick } from '@angular/core/testing';

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
    
    this.instituts=this.serviceComponent.listeInstituts();
    this.etudiant=[];
  }
  onChange(){
    console.log(this.nomInstitut);
    this.etudiant=this.serviceComponent.rechercherParInstitut(this.idI);
  }
}
