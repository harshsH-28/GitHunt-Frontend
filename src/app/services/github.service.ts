import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}
  github(user: any) {
    return this.http.get(`https://githunt-backend.onrender.com/api/${user}`);
  }
}
