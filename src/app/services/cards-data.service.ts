import { Injectable } from '@angular/core';
import { CardContent } from '../data-holders/card-content';

@Injectable({
  providedIn: 'root'
})
export class CardsDataService {
  private cards:Array<CardContent>;
  constructor() {
    
    this.initCardList();
  }

  private initCardList():void
  {
    this.cards = new Array<CardContent>();
    this.cards.push(new CardContent("Personal Info","../assets/img/profile.jpg",        "#607d8b","#8eacbb","#34515e"));
    this.cards.push(new CardContent("Angular.io","../assets/img/angular.png",           "#e53935","#ff6f60","#ab000d"));
    this.cards.push(new CardContent("Android","../assets/img/android.png",              "#43a047","#00701a","#ff6f60"));
    this.cards.push(new CardContent("Unity","../assets/img/unity_3d.png",               "#757575","#a4a4a4","#494949"));
    this.cards.push(new CardContent("Node.js","../assets/img/nodejs.png",               "#7cb342","#aee571","#4b830d"));
    this.cards.push(new CardContent("University","../assets/img/university.png",        "#6d4c41","#9c786c","#40241a"));
    this.cards.push(new CardContent("University","../assets/img/university.png",        "#6d4c41","#9c786c","#40241a"));
  }

  public getCards():Array<CardContent>{
    if(!this.cards)
      this.initCardList();
    return this.cards;
  }
}
