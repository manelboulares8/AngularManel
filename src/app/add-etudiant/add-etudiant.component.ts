import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { ServicesComponent } from '../services/services.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrl: './add-etudiant.component.css'
})
export class AddEtudiantComponent implements OnInit {
  ngOnInit(): void {

  }
  newEtudiant =new Etudiant();
  constructor(private serviceComponent :ServicesComponent,private router:Router){}
  addEtudiant(){
    this.serviceComponent.ajouterEtudiant(this.newEtudiant);
    this.router.navigate(["etudiant"]);

  }
}
