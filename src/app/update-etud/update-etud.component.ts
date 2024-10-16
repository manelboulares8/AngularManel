import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { Etudiant } from '../model/etudiant.model';
import { Institut } from '../model/institut.model';
@Component({
  selector: 'app-update-etud',
  templateUrl: './update-etud.component.html',
  styleUrl: './update-etud.component.css'
})
export class UpdateEtudComponent implements OnInit{
  currentEtudiant =new Etudiant();
  institut! :Institut[];
  updatedNomI!:string;
  constructor (private activatedRoute: ActivatedRoute,
    private router:Router,
    private servicesComponent: ServicesComponent){

  }
  ngOnInit(): void {
    //console.log(this.activatedRoute);
    this.institut =this.servicesComponent.listeInstituts();
    this.currentEtudiant = this.servicesComponent.consulterEtud(this.activatedRoute.snapshot. params['id']);
    this.updatedNomI!=this.currentEtudiant.institut?.nomI;
    console.log(this.currentEtudiant);
}
updateEtud(){
  this.currentEtudiant.institut=this.servicesComponent.consulterInstitut(this.updatedNomI);
 //console.log(this.currentEtudiant);
 this.servicesComponent.updateEtudiant(this.currentEtudiant);
 this.router.navigate(["etudiant"]);
}


}
  


