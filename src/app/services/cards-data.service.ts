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
    var cardFace = new CardFace("Personal Info","https://i.pinimg.com/564x/4b/b2/99/4bb29980c0872588bee4008974dc5578.jpg",        "#607d8b","#8eacbb","#34515e");
    this.AddContentToCardFace(cardFace,"Name: Ran Tayeb", null);
    this.AddContentToCardFace(cardFace,"Degree: Electrical & Computer Engineer", null);
    this.AddContentToCardFace(cardFace,"Age: 31", null);
    this.AddContentToCardFace(cardFace,"Status: Married", null);
    this.AddContentToCardFace(cardFace,"Phone: 05230.....", null);
    this.AddContentToCardFace(cardFace,"Email: tayebran@gmail.com", null);
    this.cards.push(cardFace);


    this.cards.push(new CardFace("Angular.io","https://i.pinimg.com/originals/1a/63/2d/1a632d2b39f3275752f2c4b3c73477a3.png",           "#e53935","#ff6f60","#ab000d"));
    this.cards.push(new CardFace("Android","https://i.pinimg.com/originals/74/64/22/74642234d90c3ec9d8020f5d02a4a701.png",              "#43a047","#00701a","#ff6f60"));
    this.cards.push(new CardFace("Unity","https://i.pinimg.com/originals/82/d9/85/82d985080cb3295931db2efcd35d37fc.png",               "#757575","#a4a4a4","#494949"));
    this.cards.push(new CardFace("Node.js","https://i.pinimg.com/originals/81/21/1c/81211c6b6119814f72fb2189a9abd42b.png",               "#7cb342","#aee571","#4b830d"));
    this.cards.push(new CardFace("University","https://i.pinimg.com/originals/ed/84/0e/ed840e7d19dd4450f1ff990f878ef5a0.png",        "#6d4c41","#9c786c","#40241a"));
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
