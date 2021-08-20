import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/models/livre.model';

@Component({
  selector: 'app-exo-directive',
  templateUrl: './exo-directive.component.html'
})
export class ExoDirectiveComponent implements OnInit {

  livres: Livre[] = [
    {
      titre: "magnifique livre",
      description: "ma description"
    },
    {
      titre: "livre nul",
      description: "ma description"
    },
    {
      titre: "random livre",
      description: "ma description"
    },
    {
      titre: "ceci n'est pas un livre",
      description: "ma description"
    }
];

  constructor() { }

  ngOnInit(): void {
  }

}
