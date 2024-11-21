import { Component, Injectable, OnInit } from '@angular/core';
import { Institut } from '../model/institut.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root', // Fournisseur global
})




export class InstitutService  {
    private instituts :Institut[] =[
        {idI :1,nomI:"ISET ",localisation :"Nabeul",numTlf:72345679},
        {idI :2,nomI:"INSAT",localisation :"Tunis",numTlf:71564200},
        {idI :3,nomI:"FSEG",localisation :"Nabeul",numTlf:72666987},
        {idI :4,nomI:"ISG",localisation :"Tunis",numTlf:71876533},
        {idI :5,nomI:"IHEC",localisation :"Carthage",numTlf:71113456},





        
    ];
    constructor(){}
    listeInstituts(): Observable<Institut[]> {
        return of(this.instituts); // Transforme le tableau en Observable
      }
}