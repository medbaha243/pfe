import {TokenStorageService} from './_services/token-storage.service';
import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';


@Injectable()
// tslint:disable-next-line:class-name
export class Login_moderator implements CanActivate{
    constructor(private tokenStorageService: TokenStorageService, public router: Router) {}

    isLoggedIn = false;
    private roles: string[] = [];

    // tslint:disable-next-line:contextual-lifecycle use-lifecycle-interface
    ngOnInit(): void {
    }
    canActivate(): boolean {
        const user = this.tokenStorageService.getUser();
        if (user.roles[0] === 'ROLE_MODERATOR' && !!this.tokenStorageService.getToken()) {
            console.log('online');
            return true;
        }
        this.router.navigate(['home']);
        console.log('offline');
        return false;
    }
}
