import { combineReducers } from "redux";
import { DetailedCardViewReducer } from "../components/detailed-card-view/store/reducers";
import { CardsReducers } from "../components/card/store/reducer";
export const rootReducers = 
     combineReducers({
        detailedCardView: DetailedCardViewReducer,
        cards: CardsReducers
    });


export default rootReducers;