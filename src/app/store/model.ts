import { Card } from "../models/card-model";
import { DetailedCardViewModel } from "../components/detailed-card-view/store/state";


export interface AppRoot{
    cards: Array<Card>;
    detailedCardView: DetailedCardViewModel;
}