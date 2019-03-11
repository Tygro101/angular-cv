import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, pipe } from 'rxjs';
import { map, catchError, filter, mergeMap } from 'rxjs/operators';
import * as DetaildActions from './actions';
import { CardsDataService } from 'src/app/services/cards-data.service';
import { CardContent } from 'src/app/components/detailed-card-view/store/state'
import { Card } from 'src/app/models/card-model';

@Injectable()
export class DetailedViewEffects {

    @Effect()
    loadCardView$ = this.actions$
        .pipe(
            ofType(DetaildActions.CARD_SELECTED),
            filter(payload => {
                if(payload)
                    return true;
                return false;
            }),
            mergeMap((action) => this.cardsDataService.getDetailedCardCards(((action as any).payload as Card)).pipe(
                map((face: CardContent)=>{
                    return new DetaildActions.CardSetted(face);
                })
            
            ))
        )
    constructor(private actions$: Actions, private cardsDataService: CardsDataService) { }
}