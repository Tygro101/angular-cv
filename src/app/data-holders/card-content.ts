export class CardContent {
  public cardTitle: string;
  public cardImage: string;
  public cardBackgrowndPrimary: string;
  public cardBackgrowndPrimaryLight: string;
  public cardBackgrowndPrimaryDark: string;

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
  }

  public getBorder():string
  {
    return '0px solid '+ this.cardBackgrowndPrimaryDark;
  }
}
