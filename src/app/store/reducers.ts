import { combineReducers } from "redux";
import { DetailedCardViewReducer } from "src/app/components/detailed-card-view/store/reducers";
import { CardsReducers } from "src/app/components/card/store/reducer";
export const rootReducers = 
     combineReducers({
        detailedCardView: DetailedCardViewReducer,
        cards: CardsReducers
    });


export default rootReducers;