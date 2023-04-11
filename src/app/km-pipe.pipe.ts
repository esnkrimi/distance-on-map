import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kmPipe'
})
export class KmPipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return (value/1000).toFixed(2);;
  }

}
