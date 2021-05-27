import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  @Input()
  authStatus!: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.authStatus = authService.isAuth;
  }

  ngOnInit(): void {
  }

  onSignIn(){
    this.authService.signIn().then(() => {
        console.log("Sign in successful");
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareils']);
      }
    );
  }

  onSignOut(){
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
