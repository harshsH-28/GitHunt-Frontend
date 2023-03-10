import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fetch-github';
  username = '';
  notFound = 0;
  user: any;
  userRepos: Array<any>;
  totalRec = 0;
  page = 1;
  constructor(private userData: GithubService) {
    this.userRepos = new Array<any>();
  }
  getUser() {
    this.userData.github(this.username).subscribe(
      (data: any) => {
        this.notFound = 0;
        this.user = data;
        this.userRepos = data.repos;
        this.totalRec = data.repos.length;
      },
      (err) => {
        console.log(err.error);
        if (err.status == 404) {
          this.notFound = 1;
        }
      }
    );
  }
}
