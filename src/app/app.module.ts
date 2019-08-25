import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ExplicationDirectivesComponent } from './explication-directives/explication-directives.component';
import { ModelV1Directive } from './model-v1.directive';
import { ModelV2Directive } from './model-v2.directive';
import { ModelV3Directive } from './model-v3.directive';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ExplicationDirectivesComponent,
    ModelV1Directive,
    ModelV2Directive,
    ModelV3Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
