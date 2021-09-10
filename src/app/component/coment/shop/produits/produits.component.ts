import {Component, Input, OnInit} from '@angular/core';
import {PanieDto} from '../../../../dto/PanieDto';
import {MessengerService} from '../../../../_services/messenger.service';
import {ProduistDto} from '../../../../dto/ProduistDto';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  cart: PanieDto [] = [];
  constructor( private msg: MessengerService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.msg.getMsg().subscribe((product: PanieDto) => {
      // @ts-ignore
      this.addproductCart(product);
    });
  }
  // tslint:disable-next-line:typedef
  addproductCart(product: ProduistDto) {
    this.cart = []
    // @ts-ignore
    this.cart.push({
      idProduits: product.idProduits,
      nameprduits: product.nameproduits,
      discription: product.discription,
      prixprduits: product. prix
    });
  }
}
