import { Pipe, PipeTransform } from '@angular/core';

import moment from 'moment';

@Pipe({
  standalone: true,
  name: 'ageCalculate'
})
export class AgeCalculate implements PipeTransform {
  transform(value: string): string {
    const getAge = moment(value).fromNow().split(' ');
    return `${getAge[0]} ${getAge[1]}`;
  }
}