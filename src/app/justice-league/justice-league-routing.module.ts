import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JusticeLeagueComponent } from './justice-league.component';

const routes: Routes = [
  { path: 'justiceleague', component: JusticeLeagueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class JusticeLeagueRoutingModule {}
