import { Component, OnInit } from '@angular/core';

import data from '../../../assets/test.json'

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html'
})
export class Demo5Component implements OnInit {

  showExo: boolean = false;
  isConnected : boolean 
  data : any

  constructor() {
    this.isConnected = false
    this.data = data
  }

  ngOnInit(): void {
    console.log(data.films)
  }

  connect()
  {
    this.isConnected = true
  }

  disco()
  {
    this.isConnected = false
  }

  toggleExo(){
    this.showExo = !this.showExo;
  }
}
