import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../detailed-card-view/store/state';

@Component({
  selector: 'detailed-content',
  templateUrl: './detailed-content.component.html',
  styleUrls: ['./detailed-content.component.scss']
})
export class DetailedContentComponent implements OnInit {

  @Input() content:Content;
  constructor() { }

  ngOnInit() {
    
  }

}
