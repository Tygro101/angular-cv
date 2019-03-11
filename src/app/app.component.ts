import { Component, OnInit } from '@angular/core';
import { CardsDataService } from './services/cards-data.service';
import { Card } from './models/card-model';
import { Store, select } from '@ngrx/store';
import { AppRoot } from './store/model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as DetailedAcations from './components/detailed-card-view/store/actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  cards$: Observable<Array<Card>>;
  cards: Array<Card>;
  public showDetailedCard:boolean = false;
  
  constructor(private store:Store<AppRoot>){ 
  }


  ngOnInit(): void {
    this.cards$ = this.store.pipe(select('state'), map((state: AppRoot)=>state.cards));
  }

  log(text:string){
    console.log(text);
  }


  public closeDetailedCard(value:boolean){
    this.showDetailedCard = value;
  }

  cardSelected(card:Card){
    this.store.dispatch(new DetailedAcations.CardSelected(card));
  }
}


