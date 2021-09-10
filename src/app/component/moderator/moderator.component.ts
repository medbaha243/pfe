import { Component, OnInit } from '@angular/core';
import {facture} from '../../dto/facture';
import {AdminService} from '../../_services/AdminService';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.css']
})
export class ModeratorComponent implements OnInit {
  list: facture[] = [];
  i = 0;
  x = 0;

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.facturelist();
  }

  facturelist(): void {
    this.adminService.getenvoyerfacture().subscribe(result => {
      this.list = result;
      for (const i in this.list) {
        this.x = this.x + this.list[i].total;
      }
    });
  }

  modif(idFacture: string | any) {
    this.adminService.sendefacture(idFacture).subscribe(() => {
      this.list.splice(this.list.indexOf(idFacture), 1);
    });
  }
}
