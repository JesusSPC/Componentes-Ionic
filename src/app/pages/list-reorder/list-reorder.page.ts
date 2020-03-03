import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html'
})
export class ListReorderPage implements OnInit {
  personajes: any[] = ['1º Elemento', '2º Elemento', '3º Elemento', '4º Elemento', '5º Elemento',];

  constructor() { }

  ngOnInit() {
  }

  reordernar(event){
    
    // Ionic ya coloca los elementos reordenados en la vista, pero el array en este caso 
    // no se modifica sólo con la función complete(). Hay que reordenar el arreglo a pelo.
     
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);

    return event.detail.complete();
  }

  onClick(){
    console.log(this.personajes)
  }
}
