import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesComponent } from '../services/services.component';
import { Etudiant } from '../model/etudiant.model';
import { Institut } from '../model/institut.model';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-update-etud',
  templateUrl: './update-etud.component.html',
  styleUrl: './update-etud.component.css'
})
export class UpdateEtudComponent implements OnInit{
  currentEtudiant =new Etudiant();
  institut! :Institut[];
  updatedNomI!:string;
  myForm! :FormGroup;
  constructor (private activatedRoute: ActivatedRoute,
    private router:Router,
    private servicesComponent: ServicesComponent,private formBuilder :FormBuilder
  ){

  }
  ngOnInit(): void {
    //console.log(this.activatedRoute);

    this.institut =this.servicesComponent.listeInstituts();
    this.currentEtudiant = this.servicesComponent.consulterEtud(this.activatedRoute.snapshot. params['id']);
    //this.updatedNomI!=this.currentEtudiant.institut?.nomI;
    console.log(this.currentEtudiant);
    if (this.currentEtudiant.institut && this.currentEtudiant.institut.nomI) {
      this.updatedNomI = this.currentEtudiant.institut.nomI;
    } else {
      this.updatedNomI = '';  // Utilisez une chaîne vide par défaut
    }
    this.myForm = this.formBuilder.group({

      nom : ['', [Validators.required,Validators.minLength(3)]],
      prenom :['', [Validators.required,Validators.minLength(3)]],
      cin :['', [Validators.required,  this.cinLengthValidator()]],
      dateNaissance :['', [Validators.required]],
      classe :['', [Validators.required]],
      institut :['', [Validators.required]],

      email : ['', [Validators.required, Validators.email]],
      } );
    //  this.updatedNomI = this.currentEtudiant.institut?.nomI;

}
cinLengthValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (value !== null && value !== undefined && value.toString().length !== 8) {
      return { 'cinLength': true }; // Retourne une erreur si la longueur n'est pas de 8
    }
    return null; // Pas d'erreur
  };
}
updateEtud(){
  this.currentEtudiant.institut=this.servicesComponent.consulterInstitut(this.updatedNomI);
 //console.log(this.currentEtudiant);
 this.servicesComponent.updateEtudiant(this.currentEtudiant);
 this.router.navigate(["etudiant"]);
}


}
  


