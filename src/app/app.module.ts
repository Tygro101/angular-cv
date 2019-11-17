import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { DetailedCardViewComponent } from './components/detailed-card-view/detailed-card-view.component';
import { CardComponent } from './components/card/card.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import  root  from 'src/app/store/reducers';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { DetailedViewEffects } from './components/detailed-card-view/store/effects';
import { DetailedContentComponent } from 'src/app/components/detailed-content/detailed-content.component';
import { ProjectViewComponent } from './components/project-view/project-view.component';
import { HighlightComponent } from './components/highlight/highlight.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { DescriptionComponent } from './components/description/description.component'
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewVersionComponent } from './components/new-version/new-version.component';
import { Level1CardComponent } from './components/new-version/level1-card/level1-card.component';


const appRoutes: Routes = [
  {
    path: 'old',
    component: HomePageComponent 
  },
  { path: '', component:  NewVersionComponent}
];


@NgModule({
  
  declarations: [
    AppComponent,
    DetailedCardViewComponent,
    CardComponent,
    DetailedContentComponent,
    ProjectViewComponent,
    HighlightComponent,
    SafeUrlPipe,
    DescriptionComponent,
    HomePageComponent,
    NewVersionComponent,
    Level1CardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({state: root}),
    EffectsModule.forRoot([DetailedViewEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
