import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ProduistDto} from '../dto/ProduistDto';

const SHOP_API = 'http://localhost:8080/api/test/';

@Injectable({
    providedIn: 'root'
})
export class ProduitsService {
    constructor(private http: HttpClient) {
    }
    getlist(): Observable<ProduistDto[]> {
        return this.http.get<ProduistDto[]>(SHOP_API + 'shop');
    }
}
