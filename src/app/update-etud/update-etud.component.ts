import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { Etudiant } from '../model/etudiant.model';
@Component({
  selector: 'app-update-etud',
  templateUrl: './update-etud.component.html',
  styleUrl: './update-etud.component.css'
})
export class UpdateEtudComponent implements OnInit{
  currentEtudiant =new Etudiant();

  constructor (private activatedRoute: ActivatedRoute,
    private router:Router,
    private servicesComponent: ServicesComponent){

  }
  ngOnInit(): void {
    //console.log(this.activatedRoute);
    this.currentEtudiant = this.servicesComponent.consulterEtud(this.activatedRoute.snapshot. params['id']);
    console.log(this.currentEtudiant);
}
updateEtud(){
 //console.log(this.currentEtudiant);
 this.servicesComponent.updateEtudiant(this.currentEtudiant);
 this.router.navigate(["etudiant"]);
}


}
  


