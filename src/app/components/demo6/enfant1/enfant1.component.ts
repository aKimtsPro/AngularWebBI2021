import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant1',
  templateUrl: './enfant1.component.html'
})
export class Enfant1Component implements OnInit {

  @Input()
  nomInput: string;

  @Output()
  couleurEmitter = new EventEmitter<string>();

  couleur: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSendColor(){
    this.couleurEmitter.emit( this.couleur );
  }

}
