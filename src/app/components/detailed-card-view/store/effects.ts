import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, filter, mergeMap } from 'rxjs/operators';
import * as DetailedActions from './actions';
import { CardsDataService } from 'src/app/services/cards-data.service';
import { CardContent } from 'src/app/components/detailed-card-view/store/state'
import { Card } from 'src/app/models/card-model';

@Injectable()
export class DetailedViewEffects {

    @Effect()
    loadCardView$ = this.actions$
        .pipe(
            ofType(DetailedActions.CARD_SELECTED),
            filter(payload => {
                if(payload)
                    return true;
                return false;
            }),
            mergeMap((action) => this.cardsDataService.getDetailedCardCards(((action as any).payload as Card)).pipe(
                map((face: CardContent)=>{
                    return new DetailedActions.CardSetted(face);
                })
            
            ))
        )

        @Effect()
        loadCardViewById$ = this.actions$
            .pipe(
                ofType(DetailedActions.CARD_VIEW_SELECTED_BY_ID),
                filter(payload => {
                    if(payload)
                        return true;
                    return false;
                }),
                mergeMap((action) => this.cardsDataService.getDetailedCardCardsById(((action as any).payload)).pipe(
                    map((face: CardContent)=>{
                        return new DetailedActions.CardSetted(face);
                    })
                
                ))
            )
    constructor(private actions$: Actions, private cardsDataService: CardsDataService) { }
}