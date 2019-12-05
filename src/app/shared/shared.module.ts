import {NgModule} from '@angular/core';
import {ColorDirective} from '../directives/color.directive';
import {PageNamePipe} from '../pipes/page-name.pipe';

@NgModule({
  declarations: [
    ColorDirective,
    PageNamePipe,
  ],
  exports: [
    ColorDirective,
    PageNamePipe,
  ]
})
export class SharedModule {

}
