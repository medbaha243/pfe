import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {ProduistDto} from '../dto/ProduistDto';


@Injectable({
    providedIn: 'root'
})
export class MessengerService {

    subject = new Subject();
    constructor() {
    }

    // tslint:disable-next-line:typedef
    sendMsg(product: ProduistDto) {
        this.subject.next(product);
    }

    getMsg() {
        return this.subject.asObservable();
    }
}
