import { Directive, Input, Output, EventEmitter, HostBinding, HostListener, OnChanges, SimpleChanges, OnInit, Renderer2, ElementRef } from '@angular/core';

/*
ngOnChange idem https://github.com/angular/angular/blob/master/packages/forms/src/directives/ng_model.ts
*/
@Directive({
  selector: '[appModelV1]'
})
export class ModelV1Directive implements OnInit, OnChanges {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input('appModelV1Input')
  model: string;

  @Output('appModelV1Output') 
  modelChange: EventEmitter<string> = new EventEmitter();


  ngOnInit(): void {

    this.renderer.listen(this.elementRef.nativeElement, "input", event => {
      this.model = (this.elementRef.nativeElement as HTMLInputElement).value;
      this.modelChange.emit(this.model.slice());
    });

    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');
  }

  /*
    A lifecycle method called when the directive's inputs change
  */
  ngOnChanges(changes: SimpleChanges) {
    this.model = changes.model.currentValue;
    (this.elementRef.nativeElement as HTMLInputElement).value = changes.model.currentValue;
  }
}
