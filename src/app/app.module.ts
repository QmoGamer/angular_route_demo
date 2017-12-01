import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JusticeLeagueRoutingModule } from './justice-league/justice-league-routing.module';
import { HeroesRoutingModule } from './heroes/heroes-routing.module';

import { AvengersComponent } from './avengers/avengers.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { JusticeLeagueComponent } from './justice-league/justice-league.component';
import { HeroesComponent } from './heroes/herose.component';
import { MidoriyaComponent } from './heroes/midoriya/midoriya.component';
import { TodorokiComponent } from './heroes//todoroki/todoroki.component';

@NgModule({
  declarations: [
    AppComponent,
    AvengersComponent,
    HeroDetailComponent,
    JusticeLeagueComponent,
    HeroesComponent,
    MidoriyaComponent,
    TodorokiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JusticeLeagueRoutingModule,
    HeroesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
