import { Component, OnInit, Input } from '@angular/core';
import { CardContent } from '../data-holders/card-content';

@Component({
  selector: 'app-detailed-component',
  templateUrl: './detailed-component.component.html',
  styleUrls: ['./detailed-component.component.scss']
})



export class DetailedComponentComponent implements OnInit {

  @Input() card:CardContent;

  constructor() { }

  ngOnInit() {
  }

}
