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
    videos?: Array<string>;
}


export interface Highlight{
    image: string;
    title: {[key: string]: string};
}

export interface Video{
    title: string;
    url: string;
}