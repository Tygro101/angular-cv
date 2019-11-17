import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppRoot } from 'src/app/store/model';
import { Observable } from 'rxjs';
import { Card } from 'src/app/models/card-model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-new-version',
  templateUrl: './new-version.component.html',
  styleUrls: ['./new-version.component.scss']
})
export class NewVersionComponent implements OnInit {
  cards$: Observable<Array<Card>>;
  constructor(private store: Store<AppRoot>) { }

  ngOnInit(): void {
    this.cards$ = this.store.pipe(select('state'), map((state: AppRoot)=>state.cards));
  }


}
