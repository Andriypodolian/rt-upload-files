import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'sizeFormat'})
export class SizeFormat implements PipeTransform {
  transform(value: number): string {
    if (value < 1000000) {
      return `${Math.round(value / 1000)} kb`;
    } else if (value < 1000000000) {
      return `${Math.round(value / 1000000)} mb`;
    } else {
      return `${Math.round(value / 1000000000)} gb`;
    }
  }
}
