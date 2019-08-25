import { Directive, OnChanges, OnInit, SimpleChanges, ElementRef, Renderer2, Input, EventEmitter, Output } from '@angular/core';


@Directive({
  selector: '[appModelV2]'
})
export class ModelV2Directive implements OnInit, OnChanges {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @Input('appModelV2')
  inputValue: string;

  @Output()
  appModelV2Change: EventEmitter<string> = new EventEmitter();


  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color', 'lightblue');

    this.renderer.listen(this.elementRef.nativeElement, 'input', (event:Event) => {
      const newValue = (event.target as HTMLInputElement).value;
      this.inputValue = newValue;
      this.appModelV2Change.emit(this.inputValue.slice());
    })
  }

  // A lifecycle method called when the directive's inputs change
  ngOnChanges(changes: SimpleChanges) {
    const newValue = changes.inputValue.currentValue;
    this.inputValue = newValue;
    (this.elementRef.nativeElement as HTMLInputElement).value = newValue;
  }

}
