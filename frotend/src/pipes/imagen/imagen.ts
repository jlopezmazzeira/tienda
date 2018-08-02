import { Pipe, PipeTransform } from '@angular/core';
import { URL_IMAGENES } from '../../config/url.servicios';
/**
 * Generated class for the ImagenPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(codigo: string) {
    return URL_IMAGENES + codigo + '.jpg';//codigo.toLowerCase();
  }
}
