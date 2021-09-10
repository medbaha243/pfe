import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserDto} from '../dto/UserDto';
import {feedbackDto} from '../dto/feedbackDto';
import {ProduistDto} from '../dto/ProduistDto';
import {facture} from '../dto/facture';

const API_URL = 'http://localhost:8080/api/test';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + '/user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + '/mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + '/admin', { responseType: 'text' });
  }

  // tslint:disable-next-line:typedef
  update_password(model: UserDto) {
    return this.http.post<void>(API_URL + '/newpassword', model);
  }
  addfedd(newfeed: feedbackDto): Observable<feedbackDto> {
    return this.http.post<feedbackDto>(API_URL + '/feedback', newfeed);
  }

  // tslint:disable-next-line:typedef
    update_profile(userprofil: UserDto) {
      return this.http.post<UserDto>(API_URL + '/updateuser', userprofil);
    }

  // tslint:disable-next-line:typedef
  add(listform: facture) {
    return this.http.post<facture>(API_URL + '/facture', listform);

  }

  // tslint:disable-next-line:typedef
  getcommand(username: string) {
      // @ts-ignore
    return this.http.get<facture[]>(API_URL + '/user-command/' + username);
    }
}
