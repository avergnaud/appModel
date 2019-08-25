import { Directive, Renderer2, OnInit, ElementRef, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

/*
https://github.com/angular/angular/blob/master/packages/forms/src/directives/ng_model.ts
*/
@Directive({
  selector: '[appModelV3]'
})
export class ModelV3Directive implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input('appModelV3') /* During change detection, Angular automatically updates theValue with the DOM property's value "saisie" */
  @HostBinding('value') /* Angular automatically checks host property bindings during change detection, and if a binding changes it updates the host element of the directive */
  theValue: string;

  @Output()
  appModelV3Change: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue')
  }

  @HostListener('input')
  listenToInput() {
    const newInput = (this.elementRef.nativeElement as HTMLInputElement).value;
    this.appModelV3Change.emit(newInput);
  }

}
