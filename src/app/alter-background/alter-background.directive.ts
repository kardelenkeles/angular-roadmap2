import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAlterBackground]'
})
export class AlterBackgroundDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = "yellow";
  }

}
