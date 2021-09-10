import {Component, OnInit} from '@angular/core';
import {feedbackDto} from '../../../dto/feedbackDto';
import {UserService} from '../../../_services/user.service';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.css'],
    providers: [DatePipe]
})
export class FeedbackComponent implements OnInit {
    isLoggedIn = false;
    username?: string;
    content?: string;
    id?: string;
    email?: string;
    password?: string;
    adress?: string;
    num?: string;
    feed: feedbackDto = new feedbackDto();
    myDate = new Date();
    constructor(private userService: UserService, private tokenStorageService: TokenStorageService, private datePipe: DatePipe) {
        // @ts-ignore
        this.myDate = this.datePipe.transform(this.myDate, 'dd-MM-yyyy');
    }

    ngOnInit(): void {
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.username = user.username;
            this.id = user.id;
            this.email = user.email;
            this.password = user.password;
            this.adress = user.adress;
            this.num = user.num;
        }
    }

    onClick(): void {
        this.feed.userid = this.id;
        this.feed.date = this.myDate;
        console.log(this.feed);
        this.userService.addfedd(this.feed).subscribe(() => {
            alert('mesage envoier');
        });

    }
}
