import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { RepoCardComponent } from './components/repo-card/repo-card.component';
import { TopicComponent } from './components/topic/topic.component';
import { UserNotFoundComponent } from './components/user-not-found/user-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    RepoCardComponent,
    TopicComponent,
    UserNotFoundComponent,
  ],
  imports: [BrowserModule, NgxPaginationModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
