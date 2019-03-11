import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CARD_FACES } from 'src/assets/static-data/state';
import { CardContent } from 'src/app/components/detailed-card-view/store/state';
import { Card } from '../models/card-model';

@Injectable({
  providedIn: 'root'
})
export class CardsDataService {  
  constructor() {
  }



  public getDetailedCardCards(card: Card): Observable<CardContent>{
    let face = CARD_FACES.find((face: CardContent)=> face.cardId == card.cardId);
    face = {...face, ...card};
    return of(face);
  }
}
