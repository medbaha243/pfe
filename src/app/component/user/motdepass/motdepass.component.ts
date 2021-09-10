import { Component, OnInit } from '@angular/core';
import {list} from '../../../dto/pasword';
import {UserDto} from '../../../dto/UserDto';
import {UserService} from '../../../_services/user.service';
import {TokenStorageService} from '../../../_services/token-storage.service';

@Component({
  selector: 'app-motdepass',
  templateUrl: './motdepass.component.html',
  styleUrls: ['./motdepass.component.css']
})
export class MotdepassComponent implements OnInit {
  model: list = new list();
  newuser: UserDto = new UserDto();
  username1?: string;
  content?: string;
  id?: string;
  email1?: string;
  password?: string;
  adress1?: string;
  num1?: string;
  isLoggedIn = false;
  constructor(private userService: UserService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username1 = user.username;
      this.id = user.id;
      this.email1 = user.email;
      this.password = user.password;
      this.adress1 = user.adress;
      this.num1 = user.num;
    }
  }

  newpassword(): void {
    if (this.model.password === this.model.conform && this.model.password !== '') {
      this.newuser.username = this.username1;
      this.newuser.password = this.model.password;
      this.userService.update_password(this.newuser).subscribe(() => {
      });
      this.tokenStorageService.signOut();
      window.location.reload();
    } else {
      console.log('false');
    }
  }

}
