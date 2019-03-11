import { CARDS } from "src/assets/static-data/state";
import { Action } from '@ngrx/store';



export function CardsReducers(state = CARDS, action: Action){
    switch(action.type){
        default: 
            return state;
    }
}

