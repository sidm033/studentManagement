import { Pipe, PipeTransform } from '@angular/core';

import { countryList } from '../modal/add-student/data';

@Pipe({
  standalone: true,
  name: 'countryName'
})
export class CountryName implements PipeTransform {
  transform(value: string): string | undefined {
    const country = countryList.find(item => item.code === value);
    return country?.name;
  }
}