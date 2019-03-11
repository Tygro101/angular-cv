import { DetailedCardViewModel, CardContent } from "./state";
import { Action } from '@ngrx/store';
import { Card } from "src/app/models/card-model";



export const CARD_SELECTED:string        = "[Detailed Card View] Card Selected";
export const CARD_VIEW_SETTED:string     = "[Detailed Card View] Card View Setted";




export class CardSelected implements Action{
    readonly type: string = CARD_SELECTED;  
    constructor(public payload: Card){
    }
}


export class CardSetted implements Action{
    readonly type: string = CARD_VIEW_SETTED;
    constructor(public payload: CardContent){}
}

export type All = CardSelected; //| UpdateMonthAction;
