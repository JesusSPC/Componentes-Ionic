import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string, campo: string): any[] {

    if (texto === '') return arreglo;

    texto = texto.toLowerCase();
    return arreglo.filter( item => item[campo].toLowerCase().includes(texto) )
  }

}
