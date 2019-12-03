import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {UsersComponent} from './users/users.component';
import {AppComponent} from './app.component';
import {HttpCComponent} from './http-c/http-c.component';
import {FormsModule} from '@angular/forms';
import {AuthInterceptor} from './auth.interceptor';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HttpCComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [INTERCEPTOR_PROVIDER ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
