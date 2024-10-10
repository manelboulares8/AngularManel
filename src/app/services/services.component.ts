import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root', // Makes it available throughout the app
})
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit{
  etudiant :Etudiant[];
  etudiantt! : Etudiant;

  constructor (){
    this.etudiant= [
      { nom:"Boulares", prenom:"Manel", cin:14444444, dateNaissance: new Date("01/10/2004"), classe:"DSI 23"},
      { nom:"Jemai", prenom:"Ghofrane", cin:14444441, dateNaissance: new Date("11/11/2004"), classe:"DSI 22"},
      { nom:"Guelbi", prenom:"Farah", cin:14444442, dateNaissance: new Date("06/03/2004"), classe:"MDW 21"},
  
       ];
      
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  listeEtudiant():Etudiant [] {
    return this.etudiant;

  }
  ajouterEtudiant (etud : Etudiant){
    this.etudiant.push(etud);
  }
  supprimerEtudiant(e :Etudiant){
    //supprimer le produit prod du tableau produits
    const index = this.etudiant.indexOf(e, 0);
    if (index > -1) {
    this.etudiant.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
    }
  
  consulterEtud(cin:number):Etudiant{
    return   this.etudiantt = this.etudiant.find(e => e.cin == cin)!;
   
    }
    trierProduits(){
      this.etudiant = this.etudiant.sort((n1,n2) => {
      if (n1.cin! > n2.cin!) {
      return 1;
      }
      if (n1.cin! < n2.cin!) {
      return -1;
      }
      return 0;
      });
      }
    updateEtudiant(e :Etudiant){
      this.supprimerEtudiant(e);
      this.ajouterEtudiant(e);
      this.trierProduits();
    }
}