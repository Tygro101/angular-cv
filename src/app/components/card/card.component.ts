import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/app/models/card-model';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Output() onClick = new EventEmitter<Card>();
  @Input() card: Card;
  constructor() { }

  ngOnInit() {
  }


  cardClicked(): void{
    this.onClick.emit(this.card);
  }
}
