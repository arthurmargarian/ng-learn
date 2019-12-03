import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {UsersComponent} from './users/users.component';
import {AppComponent} from './app.component';
import {HttpCComponent} from './http-c/http-c.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthInterceptor} from './auth.interceptor';
import { FormsComponent } from './forms/forms.component';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [INTERCEPTOR_PROVIDER ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
