import { Component, OnInit, HostListener, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppRoot } from 'src/app/store/model';
import { getDetailedViewCard } from './store/selectors';
import { CardContent, Highlight, Content } from './store/state';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-detailed-component',
  templateUrl: './detailed-card-view.component.html',
  styleUrls: ['./detailed-card-view.component.scss']
})



export class DetailedCardViewComponent implements OnInit {
  @ViewChild("DetailedCard") container: ElementRef;
  show: boolean;
  card: CardContent;
  contents: Array<Content>;
  url: string;

  constructor(private store: Store<AppRoot>) { }

  ngOnInit() {
    this.store.pipe(select(getDetailedViewCard), filter(face => face && Object.keys(face).length > 0)).subscribe((face: CardContent) => {
      this.show = true;
      this.card = face;
      if (face.content && face.content.length > 0) {
        this.contents = face.content;
      } else {
        this.contents = [];
      }
    })
  }

  close(): void {
    this.show = false;
  }


  // close when clicking outside of the element
  //@HostListener('document:click', ['$event'])
  //clickout(event) {
  //  if (!this.container) return;
  //  if (!this.container.nativeElement.contains(event.target) && !this.checkIfThisIsItem(event)) {
  //    this.show = false;
  //  }
  //}

  
  checkIfThisIsItem(event: any): boolean {
    let currentEvent = event.target;
    while (currentEvent) {
      if (currentEvent.className == "item") return true;
      currentEvent = currentEvent.parentElement;
    }
    return false;
  }

}
