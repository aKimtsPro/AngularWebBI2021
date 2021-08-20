import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html'
})
export class Demo1Component implements OnInit {

  name : string
  last : string
  age : number
  isOk : boolean
  
  constructor() {
    this.name = "Baudoux"
    this.last = "Loic"
    this.age = 30
    this.isOk = true
  }

  ngOnInit(): void {
  }

}
