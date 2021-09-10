import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../_services/auth.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
    adress: null,
    num: null,
    role: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onClick() {
    const {username, email, password , adress, num, roles} = this.form;
    if ( roles === 'admin' || roles === 'mod'){
      this.authService.register(username, email, password, adress, num, [roles]).subscribe(
          data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
          },
          err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
          }
      );
    }else{
      console.log(roles);
    }

  }
}
