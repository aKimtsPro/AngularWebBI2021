import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html'
})
export class Exo2Component implements OnInit {

  inputNomArticle : string;
  inputQttArticle : number;
  listArticle : Article[] = 
  [
    {
      nom: "tomate",
      qtt: 5
    },{
      nom: "spaghetti",
      qtt: 1
    },{
      nom: "dentifrice",
      qtt: 2
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ajouterArticle(): void {

    if( this.inputNomArticle && this.inputQttArticle && this.inputQttArticle > 0 ){

      let tabArtWithSameName = 
        this.listArticle.filter(
          (art) => art.nom == this.inputNomArticle
        );
      
      if( tabArtWithSameName.length === 0 )
      {
        // let art: Article = new Article();
        // art.nom = this.inputNomArticle;
        // art.qtt = this.inputQttArticle;
        // this.listArticle.push( art );

        this.listArticle.push(
          {
            nom: this.inputNomArticle,
            qtt: this.inputQttArticle
          }
        )
      }
      else
      {
        tabArtWithSameName[0].qtt += this.inputQttArticle; 
      }

      this.inputNomArticle = '';
      this.inputQttArticle = 0;
    }
    

  }

  reduire(aReduire: Article): void {
    if( aReduire.qtt <= 1 )
      this.supprimer( aReduire );
    else
    {
      aReduire.qtt -= 1;
    }
  }

  supprimer(aSupprimer: Article): void {

    let index = this.listArticle.indexOf( aSupprimer );
    this.listArticle.splice(index, 1);

  }

}
