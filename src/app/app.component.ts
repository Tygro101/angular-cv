import { Component, OnInit } from '@angular/core';
import { CardFace } from './data-holders/card-face';
import { CardsDataService } from './services/cards-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  cards:Array<CardFace>;
  public selectedCard:CardFace = null;
  public showDetailedCard:boolean = false;
  
  constructor(private dataService:CardsDataService){ 
  }


  ngOnInit(): void {
    this.cards = this.dataService.getCards()
  }

  log(text:string){
    console.log(text);
  }

  setSelectedCard(card:CardFace){
    this.selectedCard = card;
    this.showDetailedCard = true;
  }

  public closeDetailedCard(value:boolean){
    this.showDetailedCard = value;
  }
}


