import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html'
})
export class Demo4Component implements OnInit {

  name : string
  last : string
  age : number
  test : number
  isOk : boolean
  
  constructor() {
    this.name = "Baudoux"
    this.last = "Loic"
    this.age = 30
    this.test = 5
    this.isOk = true
  }


  ngOnInit(): void {
  }

}
