import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../_services/user.service';
import {facture} from '../../../dto/facture';
import {TokenStorageService} from '../../../_services/token-storage.service';

@Component({
    selector: 'app-commands',
    templateUrl: './commands.component.html',
    styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {
    list: facture[] = [];
    protected username: string;

    constructor(private userService: UserService, private tokenStorageService: TokenStorageService) {
        this.username = '' ;
    }

    ngOnInit(): void {
        const user = this.tokenStorageService.getUser();
        this.username = user.username;
        this.facturelist();
    }

    facturelist(): void {
        this.userService.getcommand(this.username).subscribe(result => {
            // @ts-ignore
            this.list = result;
            console.log(this.list);
        });
    }

}
