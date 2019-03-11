import { Card } from "src/app/models/card-model";

export interface DetailedCardViewModel{
    face: CardContent;
}





export interface CardContent extends Partial<Card>{
    content?: Array<string>;
}