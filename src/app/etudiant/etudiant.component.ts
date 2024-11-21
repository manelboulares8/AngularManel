import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { ServicesComponent } from '../services/services.component';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent implements OnInit {
  etudiant! :Etudiant[];
  constructor (private serviceComponent : ServicesComponent ,public authService: AuthService){
   // this.etudiant = serviceComponent.listeEtudiant();
  }
  /*ngOnInit(): void {
    this.serviceComponent.listeEtudiant().subscribe(prods => {
      console.log(prods);
      this.etudiant = prods;
      });
  }
  supprimerEtudiant(e :Etudiant){
    //console.log(e);
    let conf =confirm("vous etes sur ?");
    if (conf)
      this.serviceComponent.supprimerEtudiant(e);

  }
 
  }*/
  ngOnInit(): void {
    this.chargerEtudiant();
    }
    chargerEtudiant(){
    this.serviceComponent.listeEtudiant().subscribe(prods => {
    console.log(prods);
    this.etudiant = prods;
    });
    }
    
    supprimerEtudiant(p: Etudiant) {
      let conf = confirm("Etes-vous sûr ?");
      if (conf) {
        this.serviceComponent.supprimerEtudiant(p).subscribe({
          next: () => {
            console.log("Étudiant supprimé");
            this.chargerEtudiant(); // Recharge la liste des étudiants
          },
          error: (err) => {
            console.error("Erreur lors de la suppression de l'étudiant", err);
          }
        });
      }
    }
    
}

