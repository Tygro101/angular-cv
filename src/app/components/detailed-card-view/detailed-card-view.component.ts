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
  highlights: Array<Highlight>;
  description: string;
  youtubeurl: SafeResourceUrl;
  contents: Array<Content>;

  constructor(private store:Store<AppRoot>, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.youtubeurl = this.sanitizer.bypassSecurityTrustResourceUrl("https://youtu.be/N1u9I6UEclo/embed")
    this.store.select(getDetailedViewCard).subscribe((face: CardContent)=>{
      if(Object.keys(face).length>0){ 
        this.show = true;
        this.card = face;
        if(face.content && face.content.length>0){
          this.contents = face.content;
        //this.highlights = face.content[0].highlights;
        //this.description = face.content[0].description;
        }else{
          this.contents = [];
          //this.highlights = [];
          //this.description = '';
        }
      }
    })
  }

  close(): void{
    this.show = false;
  }
}
