import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HLocation } from '../utils/types';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  apiUrl = 'http://localhost:3000/locations';

  constructor(private http: HttpClient) { }

  getAllLocations(): Observable<HLocation[]> {
    return this.http.get<HLocation[]>(this.apiUrl);
  }

  getLocationById(id: number): Observable<HLocation> {
    return this.http.get<HLocation>(this.apiUrl + "/" + id);
  }

  getLocationsByName(name: string): Observable<HLocation[]> {
    return this.getAllLocations().pipe(
      map(locations => locations.filter(location => location.name.toLowerCase().includes(name.toLowerCase())))
    );
  }

  getLocationsByCity(city: string): Observable<HLocation[]> {
    return this.getAllLocations().pipe(
      map(locations => locations.filter(location => location.city.toLowerCase().includes(city.toLowerCase())))
    );
  }

  getLocationsByState(state: string): Observable<HLocation[]> {
    return this.getAllLocations().pipe(
      map(locations => locations.filter(location => location.state.toLowerCase().includes(state.toLowerCase())))
    );
  }

  postLocation(location: HLocation): Observable<HLocation> {
    return this.http.post<HLocation>(this.apiUrl, location);
  }

  getLastIndex(): number {
    let lastIndex = -1;
    this.getAllLocations().subscribe(
      ((response: HLocation[]) => {
        if (response.length > 0) {
          const sorted = response.sort((a, b) => a.id - b.id);
          lastIndex = sorted[sorted.length - 1].id;
        }
      })
    );
    return lastIndex;
  }
  // TODO: Implement othes http methods

}
