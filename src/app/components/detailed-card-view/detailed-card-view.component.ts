import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppRoot } from 'src/app/store/model';
import { getDetailedViewCard } from './store/selectors';
import { Card } from 'src/app/models/card-model';
import { CardContent } from './store/state';

@Component({
  selector: 'app-detailed-component',
  templateUrl: './detailed-card-view.component.html',
  styleUrls: ['./detailed-card-view.component.scss']
})



export class DetailedCardViewComponent implements OnInit {
  show: boolean;
  card: CardContent;

  constructor(private store:Store<AppRoot>) { }

  ngOnInit() {
    this.store.select(getDetailedViewCard).subscribe((face)=>{
      if(Object.keys(face).length>0){ 
        this.show = true;
        this.card = face;
      }
    })
  }

  close(): void{
    this.show = false;
  }
}
