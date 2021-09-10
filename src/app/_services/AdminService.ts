import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {feedbackDto} from '../dto/feedbackDto';
import {UserDto} from '../dto/UserDto';
import {facture} from '../dto/facture';
import {Observable} from 'rxjs';
import {Byte} from '@angular/compiler/src/util';

const SHOP_API = 'http://localhost:8080/api/test/';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    constructor(private http: HttpClient) {
    }

    getlist(): Observable<UserDto[]> {
        return this.http.get<UserDto[]>(SHOP_API + 'admin_user');
    }

    getmessagelist(): Observable<feedbackDto[]> {
        return this.http.get<feedbackDto[]>(SHOP_API + 'adminMessgelist');
    }

    deletmsg(id: string): Observable<feedbackDto>{
        return this.http.delete<feedbackDto>(SHOP_API + 'deletmsg/' + id);
    }

    // tslint:disable-next-line:typedef
    getfacture() {
        return this.http.get<facture[]>(SHOP_API + 'admin_facture');
    }

    // tslint:disable-next-line:typedef
    getfacturepdf(idFacture: string | any) {
        return this.http.get(SHOP_API + 'pdf/' + idFacture, {responseType: 'blob'});
    }
    // tslint:disable-next-line:typedef
    getenvoyerfacture() {
        return this.http.get<facture[]>(SHOP_API + 'admin_envoyerfacture');
    }

    // tslint:disable-next-line:typedef
    sendefacture(idFacture: string | any) {
        // tslint:disable-next-line:typedef
        return this.http.delete<feedbackDto>(SHOP_API + 'sendefacture/' + idFacture);
    }
}
