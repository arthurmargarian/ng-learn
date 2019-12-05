import {NgModule} from '@angular/core';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {AboutComponent} from './about.component';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AboutComponent,
    AboutExtraComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: AboutComponent, children: [
          {path: 'extra', component: AboutExtraComponent}
        ]
      },
    ])
  ],
  exports: [RouterModule]
})
export class AboutPageModule {

}
