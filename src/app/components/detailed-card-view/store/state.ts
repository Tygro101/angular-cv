import { Card } from "src/app/models/card-model";
import { Title } from "@angular/platform-browser";

export interface DetailedCardViewModel{
    face: CardContent;
}





export interface CardContent extends Partial<Card>{
    content?: Array<Content>;
}

export interface Content{
    highlights: Array<Highlight>,
    description: string;
    video?: string;
}


export interface Highlight{
    image: string;
    title: {[key: string]: string};
}

