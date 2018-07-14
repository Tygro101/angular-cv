export class CardContent {
  public title: string;
  public image: string;
  public content: Array<string>;

  constructor(
    title: string,
    image: string) {
    this.title = title;
    this.image = image;
    this.content = new Array<string>();
  }

  public addContentData(data:string):void{
    this.content.push(data);
  }
}
