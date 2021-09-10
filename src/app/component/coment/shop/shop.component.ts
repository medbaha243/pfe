import {Component, Input, OnInit} from '@angular/core';
import {ProduistDto} from '../../../dto/ProduistDto';
import {Router} from '@angular/router';
import {ProduitsService} from '../../../_services/ProduitsService';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {MessengerService} from '../../../_services/messenger.service';


@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
    list: ProduistDto [] = [];
    @Input() listform: ProduistDto = new ProduistDto();
    isLoggedIn = false;
    showAdminBoard = false;
    showModeratorBoard = false;
    private roles: string[] = [];
    username?: string;

    // tslint:disable-next-line:max-line-length
    constructor(private router: Router, private msg: MessengerService, private produitsService: ProduitsService, private tokenStorageService: TokenStorageService) {
    }

    ngOnInit(): void {
        this.Productlist();
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.roles = user.roles;

            this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

            this.username = user.username;
        }
    }

    Productlist(): void {
        this.produitsService.getlist().subscribe(result => {
            this.list = result;
        });
    }

    // tslint:disable-next-line:typedef
    handleAddToCart(p: ProduistDto) {
        this.msg.sendMsg(p);
    }
}
