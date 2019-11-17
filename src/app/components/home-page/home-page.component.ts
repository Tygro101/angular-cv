import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card-model';
import { Store, select } from '@ngrx/store';
import { AppRoot } from 'src/app/store/model';
import { map } from 'rxjs/operators';
import * as DetailedAcations from 'src/app/components/detailed-card-view/store/actions'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  cards$: Observable<Array<Card>>;
  cards: Array<Card>;
  public showDetailedCard:boolean = false;
  
  constructor(private store: Store<AppRoot>){ 
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
