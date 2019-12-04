import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {UsersComponent} from './users/users.component';
import {AppComponent} from './app.component';
import {HttpCComponent} from './http-c/http-c.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthInterceptor} from './auth.interceptor';
import { FormsComponent } from './forms/forms.component';
import { PostsComponent } from './posts/posts.component';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HttpCComponent,
    FormsComponent,
    PostsComponent,
    HomeComponent,
    PostComponent,
    AboutExtraComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [INTERCEPTOR_PROVIDER ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
