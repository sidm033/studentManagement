import { Pipe, PipeTransform } from '@angular/core';

import moment from 'moment';

@Pipe({
  standalone: true,
  name: 'ageCalculate'
})
export class AgeCalculate implements PipeTransform {
  transform(value: string): number {
    const getAge = moment(value).fromNow().split(' ')[0];
    return Number(getAge);
  }
}