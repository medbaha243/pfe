import { Component, OnInit } from '@angular/core';
import {feedbackDto} from '../../../dto/feedbackDto';
import {AdminService} from '../../../_services/AdminService';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  feed: feedbackDto [] = [];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.Productlist();
  }
  Productlist(): void {
    this.adminService.getmessagelist().subscribe(result => {
      this.feed = result;
    });
  }
  // tslint:disable-next-line:typedef
  delletemsg(emp: feedbackDto) {
      this.adminService.deletmsg(emp.idFeedback).subscribe(() => {
        this.feed.splice(this.feed.indexOf(emp), 1);
      });
  }
}

