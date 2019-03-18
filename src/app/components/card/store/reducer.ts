import { CARDS } from "src/app/store/state";
import { Action } from '@ngrx/store';



export function CardsReducers(state = CARDS, action: Action){
    switch(action.type){
        default: 
            return state;
    }
}

