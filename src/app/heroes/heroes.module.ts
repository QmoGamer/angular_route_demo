import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeroesRoutingModule } from './heroes-routing.module';

import { MidoriyaComponent } from './midoriya/midoriya.component';
import { TodorokiComponent } from './todoroki/todoroki.component';


@NgModule({
  declarations: [
    MidoriyaComponent,
    TodorokiComponent
  ],
  imports: [
    BrowserModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
