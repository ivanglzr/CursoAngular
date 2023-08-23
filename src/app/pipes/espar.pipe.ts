import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'espar',
})
export class EsParPipe implements PipeTransform {
  transform(value: any) {
    let espar = 'impar';
    if (value % 2 == 0) {
      espar = 'par';
    }
    return `El año es ${value} y es ${espar}`;
  }
}
