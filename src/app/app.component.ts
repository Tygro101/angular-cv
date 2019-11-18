import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card-model';
import { Store, select } from '@ngrx/store';
import { AppRoot } from './store/model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as DetailedActions from 'src/app/components/detailed-card-view/store/actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  cards$: Observable<Array<Card>>;
  cards: Array<Card>;
  public showDetailedCard:boolean = false;
  
  constructor(private store :Store<AppRoot>){ 
  }


  ngOnInit(): void {
    this.cards$ = this.store.pipe(select('state'), map((state: AppRoot)=>state.cards));
    this.store.dispatch(new DetailedActions.CardSelectedById(1));
  }

  log(text:string){
    console.log(text);
  }


  public closeDetailedCard(value:boolean){
    this.showDetailedCard = value;
  }

  cardSelected(card:Card){
    this.store.dispatch(new DetailedActions.CardSelected(card));
  }
}


