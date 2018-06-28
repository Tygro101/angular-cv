import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CardContent } from '../data-holders/card-content';

@Component({
  selector: 'app-detailed-component',
  templateUrl: './detailed-component.component.html',
  styleUrls: ['./detailed-component.component.scss']
})



export class DetailedComponentComponent implements OnInit {

  @Input() card:CardContent;
  @Input() hideAndShow:boolean;
  @Output() sizeChange = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

  public close():void
  {
    this.hideAndShow = false;
    this.sizeChange.emit(this.hideAndShow);
  }

}
