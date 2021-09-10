import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../_services/user.service';

@Component({
  selector: 'app-admincomponent',
  templateUrl: './admincomponent.component.html',
  styleUrls: ['./admincomponent.component.css']
})
export class AdmincomponentComponent implements OnInit {
    active = 'top';
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
        data => {
          this.content = data;
        },
        err => {
          this.content = JSON.parse(err.error).message;
        }
    );
  }
}
