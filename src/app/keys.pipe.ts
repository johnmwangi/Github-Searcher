import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value:any): any {
    let today:Date=new Date();
    let todayWithNotime:any=new Date(today.getFullYear(),today.getMonth(),today.getDate());
    var dateDifference=Math.abs(value-todayWithNotime);
    const daysInSeconds=86400;
    var dateDifferentSeconds=dateDifference*0.001;
    var dateCounter=dateDifferentSeconds/daysInSeconds;
    if(dateCounter>=1 && value >todayWithNotime){
      return 0;
    }
    else{
      return dateCounter;
    }

  }

}
