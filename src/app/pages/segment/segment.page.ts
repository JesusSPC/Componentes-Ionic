import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  
  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  publisher: string = '';
  heroes: Observable<any>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.segment.value = 'todos';

    this.heroes = this.dataService.getHeroes();

  }

  segmentChanged(event){
    const valorSegmento = event.detail.value;

    if (valorSegmento === 'todos') return this.publisher = '';
    this.publisher = valorSegmento;
  }
}
