import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backlogSplicer'
})
export class BacklogSplicerPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(value.length > 120){
      return value.substring(0, 120) + '...';
    }
    else{
      return value
    }
  }

}
