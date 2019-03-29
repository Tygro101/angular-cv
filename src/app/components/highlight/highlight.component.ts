import { Component, OnInit, Input } from '@angular/core';
import { Highlight } from '../detailed-card-view/store/state';
import { ImageResolverService } from 'src/app/services/image-resolver.service';

@Component({
  selector: 'highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnInit {
  @Input() highlight: Highlight;
  img: string;
  constructor(private imageResolver: ImageResolverService) { }

  ngOnInit() {
    this.img = this.imageResolver.resolveImg(this.highlight.img);
  }

}
