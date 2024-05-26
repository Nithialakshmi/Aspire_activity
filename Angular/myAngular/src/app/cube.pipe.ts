import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube',
  standalone: true
})
export class CubePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
