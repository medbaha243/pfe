import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {TokenStorageService} from './_services/token-storage.service';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private tokenStorageService: TokenStorageService, public router: Router) {
    }
    isLoggedIn = false;
    public roles: string[] = [];

    // tslint:disable-next-line:contextual-lifecycle use-lifecycle-interface
    ngOnInit(): void {
    }
    canActivate(): boolean {
        const user = this.tokenStorageService.getUser();
        if (user.roles[0] === 'ROLE_USER' && !!this.tokenStorageService.getToken()) {
            console.log('online');
            return true;
        }
        this.router.navigate(['home']);
        console.log('offline');
        return false;
    }
}
