import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vermas'
})
export class VermasPipe implements PipeTransform {

  transform(value: string): string {

    if( value.length > 30 ){
      
        return value.substr(0,90);

    }

  }

}
