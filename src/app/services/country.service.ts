import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Country, RemoteCountry } from '../utils/types';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  apiUrl = 'https://restcountries.com/v3.1/all';
  
  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<RemoteCountry[]>(this.apiUrl).pipe(
      map((data: RemoteCountry[]) => data.map((remoteCountry: RemoteCountry) => {
        const country: Country = {
          name: remoteCountry.name.common,
          continent: remoteCountry.continents[0]
        };
        return country;
      }
      ))
    );
  }
}
