import { Injectable } from '@angular/core';
import { CardFace } from '../data-holders/card-face';
import { CardContent } from '../data-holders/card-content';

@Injectable({
  providedIn: 'root'
})
export class CardsDataService {
  private cards:Array<CardFace>;
  
  constructor() {
    
    this.initCardList();
  }

  private initCardList():void
  {
    
    this.cards = new Array<CardFace>();
    var cardFace = new CardFace("Personal Info","../assets/img/profile.jpg",        "#607d8b","#8eacbb","#34515e");
    this.AddContentToCardFace(cardFace,"Name: Ran Tayeb", null);
    this.AddContentToCardFace(cardFace,"Degree: Electrical & Computer Engineer", null);
    this.AddContentToCardFace(cardFace,"Age: 31", null);
    this.AddContentToCardFace(cardFace,"Status: Married", null);
    this.AddContentToCardFace(cardFace,"Phone: 05230.....", null);
    this.AddContentToCardFace(cardFace,"Email: tayebran@gmail.com", null);
    this.cards.push(cardFace);


    this.cards.push(new CardFace("Angular.io","../assets/img/angular.png",           "#e53935","#ff6f60","#ab000d"));
    this.cards.push(new CardFace("Android","../assets/img/android.png",              "#43a047","#00701a","#ff6f60"));
    this.cards.push(new CardFace("Unity","../assets/img/unity_3d.png",               "#757575","#a4a4a4","#494949"));
    this.cards.push(new CardFace("Node.js","../assets/img/nodejs.png",               "#7cb342","#aee571","#4b830d"));
    this.cards.push(new CardFace("University","../assets/img/university.png",        "#6d4c41","#9c786c","#40241a"));
  }

  public getCards():Array<CardFace>{
    if(!this.cards)
      this.initCardList();
    return this.cards;
  }


  public AddContentToCardFace(card:CardFace, title:string, image:string):void{
    var content:CardContent = new CardContent(title,image);
    card.addContent(content);
  }
}
