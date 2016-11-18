import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
import { AngularFire } from 'angularfire2';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './signup.component.html'
})
 
export class SignupComponent {
 
  constructor(private af: AngularFire, private router: Router, private authService: AuthService) {  }

  onSubmit(formData) {
    if(formData.valid) {
      this.authService.signup(formData).then(
         (success) => {
             console.log("Signup succesful");
             this.router.navigate(['/login']);
         }).catch(
        (err) => {
            console.log("sign up not succesful");
            this.router.navigate(['/signup']);         
        })
    }
  }
}

@Component({
  templateUrl: './login.component.html'
})
 
export class LoginComponent {
  constructor(private af: AngularFire, private router: Router, private authService: AuthService) { }

  
  onSubmit(formData) {
    if(formData.valid) {
      this.authService.login(formData).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/dashboard']);
      }).catch(
        (err) => {
        console.log(err);
        this.router.navigate(['/login']);
      })  
    }
  }
}