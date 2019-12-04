import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {FormsComponent} from './forms/forms.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'forms', component: FormsComponent},
  {
    path: 'users', component: UsersComponent,
    canActivateChild: [AuthGuard],
    children: [{path: 'extra', component: AboutExtraComponent}]
  },
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
  {path: 'posts/:id', component: PostComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
