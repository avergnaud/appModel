import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { ExplicationDirectivesComponent } from './explication-directives/explication-directives.component';

const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'directives', component: ExplicationDirectivesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
