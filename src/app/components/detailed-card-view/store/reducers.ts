
import * as Actions from './actions';
import { CardContent } from "src/app/components/detailed-card-view/store/state";

const initialState: CardContent = {
}


export function DetailedCardViewReducer(state = initialState, action: any){
    switch(action.type){
        case Actions.CARD_VIEW_SETTED:
            return action.payload;
        default: 
            return state;
    }
}

