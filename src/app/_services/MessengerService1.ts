import {Subject} from 'rxjs';
import {PanieDto} from '../dto/PanieDto';
import {Injectable} from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class MessengerService1 {
    subject = new Subject();
    constructor() {
    }

// tslint:disable-next-line:typedef
    sendMsg1(product: PanieDto[]) {
        this.subject.next(product);
    }

// tslint:disable-next-line:typedef
    getMsg1() {
        return this.subject.asObservable();
    }
}
