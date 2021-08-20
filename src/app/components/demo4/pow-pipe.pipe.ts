import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powPipe'
})
export class PowPipePipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
    let res = Math.pow(value, args[0])
    return res;
  }

}
