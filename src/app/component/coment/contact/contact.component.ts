import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  constructor() { }

  ngOnInit(): void {
  }

}
