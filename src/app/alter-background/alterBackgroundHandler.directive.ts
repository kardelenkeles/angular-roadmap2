import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appAlterBackgroundHandler]"
})
export class AlterBackgroundHandlerDirective {
  constructor(private el: ElementRef) { }

  @Input() appAlterBackgroundHandler = "";
  
  @HostListener("mouseenter") onMouseEnter() {
    this.changeBgColor(this.appAlterBackgroundHandler);
  }
  @HostListener("mouseleave") onMouseLeave() {
    this.changeBgColor("blue");
  }
  private changeBgColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}