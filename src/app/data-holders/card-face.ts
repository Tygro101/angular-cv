import { CardContent } from "./card-content";

export class CardFace {
    public cardTitle: string;
    public cardImage: string;
    public cardBackgrowndPrimary: string;
    public cardBackgrowndPrimaryLight: string;
    public cardBackgrowndPrimaryDark: string;
  
    public contents:Array<CardContent>;

    constructor(
      cardTitle: string,
      cardImage: string,
      cardBackgrowndPrimary: string,
      cardBackgrowndPrimaryLight: string,
      cardBackgrowndPrimaryDark: string) {
      this.cardTitle = cardTitle;
      this.cardImage = cardImage;
      this.cardBackgrowndPrimary = cardBackgrowndPrimary;
      this.cardBackgrowndPrimaryDark = cardBackgrowndPrimaryDark;
      this.cardBackgrowndPrimaryLight = cardBackgrowndPrimaryLight;
      this.contents = new Array<CardContent>();
    }

    public addContent(content:CardContent){
      this.contents.push(content);
    }
  
    public getBorder():string
    {
      return '0px solid '+ this.cardBackgrowndPrimaryDark;
    }
  }
  