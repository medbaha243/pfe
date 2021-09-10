import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    providers: [NgbDropdownConfig]
})
export class MenuComponent implements OnInit {
    private roles: string[] = [];
    isLoggedIn = false;
    username?: string;
    showAdminBoard = false;
    showModeratorBoard = false;
    x?: number;

    constructor(private tokenStorageService: TokenStorageService, private config: NgbDropdownConfig) {
        config.autoClose = false;
    }


    ngOnInit(): void {
        this.isLoggedIn = !!this.tokenStorageService.getToken();

        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.roles = user.roles;
            this.username = user.username;
            this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
            if (this.roles[0] === 'ROLE_ADMIN'){
                this.x = 0;
            }else if (this.roles[0] === 'ROLE_USER'){
                this.x = 1;
            }else { this.x = 2; }
        }
    }

    logout(): void {
        this.tokenStorageService.signOut();
        window.location.reload();
    }

}
