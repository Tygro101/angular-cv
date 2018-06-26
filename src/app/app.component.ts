import { Component, OnInit } from '@angular/core';
import { CardContent } from './data-holders/card-content';
import { CardsDataService } from './services/cards-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  cards:Array<CardContent>;
  public selectedCard:CardContent = null;
  
  constructor(private dataService:CardsDataService){ 
  }


  ngOnInit(): void {
    this.cards = this.dataService.getCards()
  }

  log(text:string){
    console.log(text);
  }

  setSelectedCard(card:CardContent){
    this.selectedCard = card;
  }
}


