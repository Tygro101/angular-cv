import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { DetailedCardViewComponent } from './components/detailed-card-view/detailed-card-view.component';
import { CardComponent } from './components/card/card.component';
import { composeWithDevTools } from 'redux-devtools-extension';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import root from './store/reducers';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { DetailedViewEffects } from './components/detailed-card-view/store/effects'


@NgModule({
  declarations: [
    AppComponent,
    DetailedCardViewComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({state: root}),
    EffectsModule.forRoot([DetailedViewEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
