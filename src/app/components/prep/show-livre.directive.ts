import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { Livre } from 'src/app/models/livre.model';

@Directive({
  selector: '[showLivre]'
})
export class ShowLivreDirective {

  @Input()
  showLivre: Livre;

  description = undefined;

  constructor(private el: ElementRef) { }

  @HostListener("click")
  onClick(){
    if(this.description)
    {
      this.el.nativeElement.children[0].removeChild(this.description);
      this.description = undefined;
    }
    else
    {
      this.description = document.createElement("p");
      this.description.innerText = this.showLivre.description;
      this.el.nativeElement.children[0].appendChild(this.description);
    }
  }

}
