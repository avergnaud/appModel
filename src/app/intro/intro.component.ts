import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {

  saisie: string = "some value"

  onInput(event: Event) {
    const target: HTMLInputElement = <HTMLInputElement> event.target;
    this.saisie = target.value;
  }

}
