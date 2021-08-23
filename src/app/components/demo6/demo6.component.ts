import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html'
})
export class Demo6Component implements OnInit {

  nom: string;
  couleurLabel: string;

  constructor() { }

  ngOnInit(): void {
  }

  onEmit( couleur: string ){
    console.log( "une info a été emise : " + couleur );
    this.couleurLabel = couleur;
  }

}
