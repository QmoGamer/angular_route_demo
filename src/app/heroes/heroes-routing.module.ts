import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './herose.component';
import { MidoriyaComponent } from './midoriya/midoriya.component';
import { TodorokiComponent } from './todoroki/todoroki.component';

const routes: Routes = [
  {
    path: 'heroes', component: HeroesComponent, children: [
      { path: 'midoriya', component: MidoriyaComponent },
      { path: 'todoroki', component: TodorokiComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {}
