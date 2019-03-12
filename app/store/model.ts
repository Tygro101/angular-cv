import { Card } from "src/app/models/card-model";
import { DetailedCardViewModel } from "src/app/components/detailed-card-view/store/state";


export interface AppRoot{
    cards: Array<Card>;
    detailedCardView: DetailedCardViewModel;
}