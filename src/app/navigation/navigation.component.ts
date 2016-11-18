import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit{
  private isAuth: boolean;
  private email: string;

  constructor(private authService: AuthService) {
  }

  logout(){
    console.log("logged out");
    this.authService.logout();
  }

  ngOnInit(){
    // subscribe to the authService event to change navigation
    this.authService.isAuth.subscribe((authStatus) => {
      this.isAuth = authStatus;
      this.email = this.authService.email;
    });
    // subscribe to the authServie event to change the email when someone logs in


  }

}
