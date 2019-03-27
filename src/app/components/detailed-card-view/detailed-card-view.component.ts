import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppRoot } from 'src/app/store/model';
import { getDetailedViewCard } from './store/selectors';
import { CardContent, Highlight, Content } from './store/state';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-detailed-component',
  templateUrl: './detailed-card-view.component.html',
  styleUrls: ['./detailed-card-view.component.scss']
})



export class DetailedCardViewComponent implements OnInit {
  show: boolean;
  card: CardContent;
  contents: Array<Content>;
  url: string;

  constructor(private store:Store<AppRoot>) { }

  ngOnInit() {
    this.store.select(getDetailedViewCard).subscribe((face: CardContent)=>{
      if(Object.keys(face).length>0){ 
        this.show = true;
        this.card = face;
        if(face.content && face.content.length>0){
          this.contents = face.content;
        }else{
          this.contents = [];
        }
      }
    })
  }

  close(): void{
    this.show = false;
  }

  getUrl(content: Content):string{
    return content.video;
  }
}
