import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../_services/user.service';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {UserDto} from '../../../dto/UserDto';



@Component({
    selector: 'app-usercomponent',
    templateUrl: './usercomponent.component.html',
    styleUrls: ['./usercomponent.component.css']
})
export class UsercomponentComponent implements OnInit {
    userprofil: UserDto = new UserDto();
    isLoggedIn = false;
    username1?: string;
    content?: string;
    id?: string;
    email1?: string;
    password?: string;
    adress1?: string;
    num1?: string;

    constructor(private userService: UserService, private tokenStorageService: TokenStorageService) {
    }

    ngOnInit(): void {
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.username1 = user.username;
            this.id = user.id;
            this.email1 = user.email;
            this.password = user.password;
            this.adress1 = user.adress;
            this.num1 = user.num;
        }
    }
    // tslint:disable-next-line:typedef
    newprofile() {
        this.userprofil.id = this.id;
        this.userprofil.password = 'azerty';
        console.log(this.userprofil);
        this.userService.update_profile(this.userprofil).subscribe(() => {
        });
        this.tokenStorageService.signOut();
        window.location.reload();
    }
}


