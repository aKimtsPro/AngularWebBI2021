import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html'
})
export class Demo3Component implements OnInit {

  myNumber : number
  constructor() {
    this.myNumber = 0
  }

  ngOnInit(): void {
  }

  add() : void
  {
    this.myNumber += 1
  }


  rem() : void
  {
    this.myNumber -=1
  }

}
