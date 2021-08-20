 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html'
})
export class Demo2Component implements OnInit {

  name : string 
  last : string
  constructor(){
    this.name =""
    this.last = ""
  }

  ngOnInit(): void {
  }

}
