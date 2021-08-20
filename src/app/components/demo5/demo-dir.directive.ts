import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[demoDir]'
})
export class DemoDirDirective {

  @Input()
  demoDir: string;
  
  @Input()
  autre: string;

  constructor(private element: ElementRef) {}

  @HostListener("mouseenter")
  onMouseenter(){

    // Ecrire les inputs
    console.log(this.demoDir ? this.demoDir : "salut");
    if(this.autre)
      console.log(this.autre)

    // Applique un highlight
    this.element.nativeElement.classList.add("yellow");
  }

  @HostListener("mouseleave")
  onMouseleave(){

    // Retirer le highlight
    this.element.nativeElement.classList.remove("yellow");
    const toAppend = document.createElement("p");
    toAppend.innerText = "ajouté par la directive";

    this.element.nativeElement.appendChild(toAppend);

  }


}
