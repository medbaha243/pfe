import {Component, OnInit} from '@angular/core';
import {PanieDto} from '../../../dto/PanieDto';
import {Router} from '@angular/router';
import {MessengerService1} from '../../../_services/MessengerService1';


@Component({
    selector: 'app-pdf',
    templateUrl: './pdf.component.html',
    styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
    cart: PanieDto [] = [];
    cartTotal = 0;

    constructor(private router: Router, private msg: MessengerService1) {
    }

    ngOnInit(): void {
        // @ts-ignore
        this.msg.getMsg1().subscribe((product: PanieDto) => {
            // tslint:disable-next-line:forin
            for (const i in product) {
                // @ts-ignore
                this.addproductCart(product[i]);
            }
        });
    }

    // tslint:disable-next-line:typedef
    addproductCart(product: PanieDto) {
        // @ts-ignore
        this.cart.push({
            idProduits: product.idProduits,
            nameprduits: product.nameprduits,
            prixprduits: product.prixprduits,
            quantitep: product.quantitep
        });
        this.cartTotal = 0;
        this.cart.forEach(item => {
            this.cartTotal += (item.prixprduits * item.quantitep);
        });

    }
}
