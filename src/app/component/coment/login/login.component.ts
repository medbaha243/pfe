import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {AuthService} from '../../../_services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: any = {
        username: null,
        password: null
    };
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];
    private username?: string;
    constructor(private authService: AuthService, private tokenStorage: TokenStorageService) {
    }

    ngOnInit(): void {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
            this.username = this.tokenStorage.getUser().username;
        }
    }

    onClick(): void {
        const {username, password} = this.form;

        this.authService.login(username, password).subscribe(
            data => {
                this.tokenStorage.saveToken(data.accessToken);
                this.tokenStorage.saveUser(data);

                this.isLoginFailed = false;
                this.isLoggedIn = true;
                this.roles = this.tokenStorage.getUser().roles;
                this.username = this.tokenStorage.getUser().username;
                this.reloadPage();
            },
            err => {
                this.errorMessage = err.error.message;
                this.isLoginFailed = true;
            }
        );
    }

    reloadPage(): void {
        window.location.reload();
    }
}
