import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { ServicesComponent } from '../services/services.component';
import { Router } from '@angular/router';
import { Institut } from '../model/institut.model';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrl: './add-etudiant.component.css'
})
export class AddEtudiantComponent implements OnInit {
  newEtudiant =new Etudiant();
  institut! : Institut[];
  newNom! : string;
  newInstitut! : Institut;
  constructor(private serviceComponent :ServicesComponent,private router:Router){}

  ngOnInit(): void {
    this.institut =this.serviceComponent.listeInstituts();
  }
  
  addEtudiant(){
    this.newInstitut =this.serviceComponent.consulterInstitut(this.newNom);
    this.newEtudiant.institut = this.newInstitut;

    this.serviceComponent.ajouterEtudiant(this.newEtudiant);
    this.router.navigate(["etudiant"]);
    
  }
}
