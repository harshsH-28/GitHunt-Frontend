import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  @Input() user: any;
  avatar_url = 'https://avatars.githubusercontent.com/u/77538369?v=4';
  Name = 'Harsh Sharma';
  Bio = '';
  Location = 'New Delhi';
  twitter_url = 'https://google.com';
}
