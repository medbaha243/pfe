import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../_services/auth.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    form: any = {
        username: null,
        email: null,
        password: null,
        adress: null,
        num: null,
    };
    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';
    constructor(private authService: AuthService, private router: Router){
    }

    ngOnInit(): void {
    }

    onClick(): void {
        const {username, email, password , adress, num, roles} = this.form;
        this.authService.register(username, email, password, adress, num, ['user']).subscribe(
            data => {
                console.log(data);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
                this.router.navigate(['/signin']);
            },
            err => {
                this.errorMessage = err.error.message;
                this.isSignUpFailed = true;
            }
        );
    }
}
