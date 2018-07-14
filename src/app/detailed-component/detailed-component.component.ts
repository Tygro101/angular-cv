import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { CardFace } from '../data-holders/card-face';

@Component({
  selector: 'app-detailed-component',
  templateUrl: './detailed-component.component.html',
  styleUrls: ['./detailed-component.component.scss']
})



export class DetailedComponentComponent implements OnInit {

  @Input() card:CardFace;
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
