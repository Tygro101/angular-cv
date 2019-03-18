import { Card } from "src/app/models/card-model";

export interface DetailedCardViewModel{
    face: CardContent;
}





export interface CardContent extends Partial<Card>{
    content?: {
        highlights: Array<Highlight>,
        description: string;
        vedios?: Array<string>;
    }
}


export interface Highlight{
    image: string;
    title: {[key: string]: string};
}