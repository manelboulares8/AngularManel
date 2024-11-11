/*import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  user = new User();
  erreur=0; 

  constructor(private authService : AuthService, 
    private  router :Router){}
   onLoggedin()
  {
  console.log(this.user);
  let isValidUser: Boolean = this.authService.SignIn(this.user); 
 
  if (isValidUser) 
     this.router.navigate(['/']); 
  else 
    this.erreur=1;
     //alert('Login ou mot de passe incorrecte!'); 
    
  } 

  }


*/
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur = 0;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Suppression de l'erreur lancée
  }
  onLoggedin(){ 
    console.log(this.user); 
    let isValidUser: Boolean = this.authService.SignIn(this.user); 
   
    if (isValidUser) 
       this.router.navigate(['/']); 
    else 
       alert('Login ou mot de passe incorrecte!'); 
    } 
}
