import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {FormsComponent} from './forms/forms.component';
import {UsersComponent} from './users/users.component';
import {PostsComponent} from './posts/posts.component';
import {HomeComponent} from './home/home.component';
import {PostComponent} from './post/post.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {HttpCComponent} from './http-c/http-c.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'forms', component: FormsComponent},
  {path: 'http', component: HttpCComponent},
  {
    path: 'users', component: UsersComponent,
  },
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
  {path: 'posts/:id', component: PostComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: 'about', loadChildren: './about/about-page.module#AboutPageModule'},
  // {path: '**', redirectTo: '/error'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
