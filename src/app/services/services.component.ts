import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { Injectable } from '@angular/core';
import { Institut } from '../model/institut.model';
@Injectable({
 providedIn: 'root', // Makes it available throughout the app
})
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit{
  /*rechercherParInstitut(idI: number): Etudiant[] {
    const institut = this.institut.find(ins => ins.idI === idI);
  if (institut) {
    return this.etudiant.filter(etud => etud.institut?.nomI === institut.nomI);
  }
  // Si aucun institut ne correspond, retourner une liste vide
  return [];
  }*/
  rechercherParInstitut(idI: number): Etudiant[] {
    return this.etudiant.filter(e => e.institut?.idI === idI);
  }
  
  etudiant :Etudiant[];
  etudiantt! : Etudiant;
  institut : Institut[];
  constructor() {
  this.institut = [ {idI:1,nomI : "ISETN", localisation: "Nabeul",numTlf :58678234},
    {idI :2,nomI :"ISETK" ,localisation :"Kelibia",numTlf:53444234},
    {idI :3,nomI :"ISETR" ,localisation :"Rades",numTlf:98345222}
  
                   ];
  
    this.etudiant= [
      { nom:"Boulares", prenom:"Manel", cin:14444444, dateNaissance: new Date("01/10/2004"), classe:"DSI 23" , institut :{idI:1,nomI :"ISETN" ,localisation :"Nabeul",numTlf:58678234},email :'boularesmanel@gmail.com'},
      { nom:"Jemai", prenom:"Ghofrane", cin:14444441, dateNaissance: new Date("11/11/2004"), classe:"DSI 22",institut :{idI:2,nomI :"ISETK" ,localisation :"Kelibia",numTlf:53444234},email :'jemaighofrane@gmail.com'},
      { nom:"Guelbi", prenom:"Farah", cin:14444442, dateNaissance: new Date("06/03/2004"), classe:"MDW 21",institut :{idI:3,nomI :"ISETR" ,localisation :"Rades",numTlf:98345222},email :"guelbifarah@gmail.com"},
  
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
    if(prod.idIProduit === cur.idIProduit) {
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
    listeInstituts():Institut[] {
      return this.institut;
      }
      consulterInstitut(nomI :string): Institut{
        return this.institut.find(ins => ins.nomI == nomI)!;
        }
}