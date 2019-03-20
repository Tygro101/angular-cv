import { Component, OnInit, Input } from '@angular/core';
import { Highlight } from '../components/detailed-card-view/store/state';

@Component({
  selector: 'highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnInit {
  @Input() highlight: Highlight;
  constructor() { }

  ngOnInit() {
  }

}
