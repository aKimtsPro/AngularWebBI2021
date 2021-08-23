import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html'
})
export class RecapComponent implements OnInit {

  nom: string = "alexandre";
  class: string = "red";
  inputNom: string;

  constructor() { }

  ngOnInit(): void {
  }

  validate(){
    this.nom = this.inputNom;
    this.inputNom = '';
  }

}
