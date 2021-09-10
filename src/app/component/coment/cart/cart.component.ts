import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {MessengerService} from '../../../_services/messenger.service';
import {ProduistDto} from '../../../dto/ProduistDto';
import {PanieDto} from '../../../dto/PanieDto';
import {MessengerService1} from '../../../_services/MessengerService1';
import {facture} from '../../../dto/facture';
import {UserService} from '../../../_services/user.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private user: UserService, private msg: MessengerService, private msg1: MessengerService1, private tokenStorageService: TokenStorageService) {
    }

    fac: facture = new facture();
    cart: PanieDto [] = [];
    adresse?: string;
    cartTotal = 0;
    list: ProduistDto[] = [];
    @Input() listform: ProduistDto = new ProduistDto();
    isLoggedIn = false;
    showAdminBoard = false;
    showModeratorBoard = false;
    private roles: string[] = [];
    username?: string;
    num?: string;

    ngOnInit(): void {
        // @ts-ignore
        this.msg.getMsg().subscribe((product: PanieDto) => {
            // @ts-ignore
            this.addproductCart(product);
        });
        this.isLoggedIn = !!this.tokenStorageService.getToken();

        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.roles = user.roles;

            this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
            this.username = user.username;
            this.adresse = user.adress;
            this.num = user.num;
        }

    }

    // tslint:disable-next-line:typedef
    addproductCart(product: ProduistDto) {

        let prductExist = false;
        for (const i in this.cart) {
            if (this.cart[i].idProduits === product.idProduits) {
                this.cart[i].quantitep++;
                prductExist = true;
                break;
            }
        }
        if (!prductExist) {
            this.cart.push({
                idProduits: product.idProduits,
                nameprduits: product.nameproduits,
                prixprduits: product.prix,
                quantitep: 1,
                total: product.total,
                discription: product.discription,
            });
        }
        this.cartTotal = 0;
        this.cart.forEach(item => {
            this.cartTotal += (item.prixprduits * item.quantitep);
        });
    }

    // tslint:disable-next-line:typedef
    delletproductCart(product: PanieDto) {
        // tslint:disable-next-line:forin
        for (const i in this.cart) {
            const index = this.cart.indexOf(this.cart[i]);
            if (this.cart[i].idProduits === product.idProduits && this.cart[i].quantitep > 1) {
                this.cart[i].quantitep--;
                break;
            } else if (this.cart[i].idProduits === product.idProduits && this.cart[i].quantitep <= 1) {
                this.cart.splice(index, 1);
            }
        }
        this.cartTotal = 0;
        this.cart.forEach(item => {
            this.cartTotal += (item.prixprduits * item.quantitep);
        });
    }

    // tslint:disable-next-line:typedef
    delletproduct(product: PanieDto) {
        // tslint:disable-next-line:forin
        const index = this.cart.indexOf(product);
        this.cart.splice(index, 1);
        this.cartTotal = 0;
        this.cart.forEach(item => {
            this.cartTotal += (item.prixprduits * item.quantitep);
        });
    }

    // tslint:disable-next-line:typedef
    addplusproductCart(product: PanieDto) {
        for (const i in this.cart) {
            if (this.cart[i].idProduits === product.idProduits) {
                this.cart[i].quantitep++;
                break;
            }
        }
        this.cartTotal = 0;
        this.cart.forEach(item => {
            this.cartTotal += (item.prixprduits * item.quantitep);
        });
    }

    // tslint:disable-next-line:typedef
    confimer() {
        this.fac.nom = this.username;
        this.fac.adresse = this.adresse;
        this.fac.tel = this.num;
        this.fac.siege = 'marsa';
        // tslint:disable-next-line:forin
        for (const i in this.cart) {
            this.fac.produits.push({
                idproduitsfacture : this.cart[i].idProduits,
                nameprduits : this.cart[i].nameprduits,
                prixprduitsHT : this.cart[i].prixprduits / 1.19,
                prixprduitsTVA : this.cart[i].prixprduits - (this.cart[i].prixprduits / 1.19),
                prixprduits : this.cart[i].prixprduits,
                quantitep : this.cart[i].quantitep,
                totalproduit : (this.cart[i].prixprduits * this.cart[i].quantitep)
            });
        }
        this.fac.totaltva = this.cartTotal - (this.cartTotal / 1.19);
        this.fac.totalht = this.cartTotal / 1.19;
        this.fac.total = this.cartTotal + 7;
        this.fac.livraison = 7;
        this.fac.date = new Date();
        console.log(this.fac);
        this.user.add(this.fac).subscribe(() => {
            alert('mesage envoier');
            this.cart = [];
            this.fac.produits = [];
        });
    }
}
