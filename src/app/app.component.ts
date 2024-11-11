import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Etudiant';
  constructor(public authService :AuthService, private router :Router){}
  onLogout(){
    this.authService.logout(); 
  }
  /*ngOnInit () { 
    let isloggedin: string; 
    let loggedUser:string; 
    if (typeof localStorage !== 'undefined') {

      isloggedin  = localStorage.getItem('isloggedIn')?? ''; 
      loggedUser = localStorage.getItem('loggedUser')?? '';
   }

    if (isloggedin !== "true" || !loggedUser) 
        this.router.navigate(['/login']); 
    else 
     this.authService.setLoggedUserFromLocalStorage(loggedUser); 
  } */
     ngOnInit() { 
      let isloggedin: string = ''; 
      let loggedUser: string = ''; 
  
      if (typeof localStorage !== 'undefined') {
          isloggedin = localStorage.getItem('isloggedIn') ?? ''; 
          loggedUser = localStorage.getItem('loggedUser') ?? ''; 
      }
  
      if (isloggedin !== "true" || !loggedUser) { 
          this.router.navigate(['/login']); 
      } else { 
          this.authService.setLoggedUserFromLocalStorage(loggedUser); 
      }
  }
  
}
