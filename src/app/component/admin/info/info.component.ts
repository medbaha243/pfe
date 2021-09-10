import {Component, Input, OnInit} from '@angular/core';
import {ProduistDto} from '../../../dto/ProduistDto';
import {AdminService} from '../../../_services/AdminService';
import {UserDto} from '../../../dto/UserDto';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  list: UserDto[] = [];  i = 0;
  @Input() listform: ProduistDto = new ProduistDto();
  constructor(private adminService: AdminService) { }
  ngOnInit(): void {
    this.userlist();
  }
  userlist(): void {
    this.adminService.getlist().subscribe(result => {
      this.list = result;
    });
  }
}
