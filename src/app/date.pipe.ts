import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value:any): number {
    let date:Date = new Date();
    return 0;
  }

}
