import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../utils/types';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = "http://localhost:3000/users";

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserByCode(code: string): Observable<User> {
    return this.http.get<User>(this.apiUrl + "/" + code);
  }

  registerUser(inputData: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, inputData);
  }

  updateUser(code: string, inputData: any): Observable<User> {
    return this.http.put<User>(this.apiUrl + "/" + code, inputData);
  }

  deleteUser(code: string): Observable<void> {
     return this.http.delete<void>(this.apiUrl + code);
  }
 
  isLogIn(): boolean {
    return sessionStorage.getItem('username') != null;
  }

  getUserRole(): string {
    const role = sessionStorage.getItem('role');
    if (role != null) {
      return role;
    }
    return "";
  }

  getLoginUser(): string {
    return sessionStorage.getItem('username')?? "";
  }

}
