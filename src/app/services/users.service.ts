import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private jsonPlaceholderURL = environment.jsonPlaceholderURL;

  constructor(private http: HttpClient) {
  }

  getUser(id): Observable<any> {
    return this.http.get<any>(`${this.jsonPlaceholderURL}user s/${id}`);
  }
}
