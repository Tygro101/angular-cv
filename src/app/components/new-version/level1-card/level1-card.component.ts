import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Card } from 'src/app/models/card-model';
import { CardSelected } from '../../detailed-card-view/store/actions';
import { Store } from '@ngrx/store';
import { AppRoot } from 'src/app/store/model';

@Component({
  selector: 'app-level1-card',
  templateUrl: './level1-card.component.html',
  styleUrls: ['./level1-card.component.scss']
})
export class Level1CardComponent implements OnInit {

  @Input() card: Card;
  constructor(private store: Store<AppRoot>) { }

  ngOnInit() {
  }

  onClick(){
    this.store.dispatch(new CardSelected(this.card));
  }

}
