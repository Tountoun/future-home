import { Pipe, PipeTransform } from "@angular/core";
import { Country, Group } from "./types";

@Pipe({ name: 'country_sort' })
export class CountrySortPipe implements PipeTransform {
     transform(values: any[]): any[] {
          if (!values || !values.length) {
               return values;
          }
          if (values.every(value => isCountryVariable(value))) {
               return values.sort((current, next) => current.name.localeCompare(next.name));
          }
          return values.sort();
     }

}
@Pipe({ name: 'continent_sort' })
export class ContinentSortPipe implements PipeTransform {
     transform(values: any[]) {
          if (!values || !values.length) {
               return values;
          }
          if (values.every(value => isGroupVariable(value))) {
               return values.sort((current, next) => current.continent.localeCompare(next.continent));
          }
          return values.sort();
     }

}

function isObject(variable: any): boolean {
     return (
          typeof variable === 'object' &&
          variable !== null &&
          !(variable instanceof Array) &&
          !(variable instanceof Date)
     );
}

function isCountryVariable(variable: any): variable is Country {
     return (
          typeof variable === 'object' &&
          'name' in variable &&
          typeof variable.name === 'string' &&
          'continent' in variable &&
          typeof variable.continent === 'string'
     );
}

function isGroupVariable(variable: any): variable is Group {
     return (
          typeof variable === 'object' &&
          'continent' in variable &&
          typeof variable.continent === 'string' &&
          'countries' in variable &&
          variable.countries.every((country: any) => isCountryVariable(country))
     );
}