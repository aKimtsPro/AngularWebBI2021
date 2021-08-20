import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // @Input()


  constructor(private el: ElementRef) { }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.el.nativeElement.classList.add("teal");
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.el.nativeElement.classList.remove("teal");
  }

}
