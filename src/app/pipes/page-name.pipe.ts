import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pageName'
})
export class PageNamePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value + '!!!';
  }

}
