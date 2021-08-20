import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(tempsSec: number): string {

    if(!tempsSec)
      return null;

    let sec = tempsSec;
    let minute = Math.floor(sec / 60);
    sec = sec % 60;
    let heure = Math.floor(minute / 60);
    minute = minute % 60;
    let jour = Math.floor( heure / 24 )
    heure = heure % 24;

    return jour + " jour"+ ((jour > 1) ? 's' : '') +" " + 
        heure + " heure"+ ((heure > 1) ? 's' : '') +" " + 
        minute + " minute"+ ((minute > 1) ? 's' : '') +" " + 
        sec + " seconde"+ ((sec > 1) ? 's' : '') +"";
  }

}
