import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  /**
   * Fetches country information from the World Bank API based on the provided country ID.
   * @param countryId The ID of the country for which information is requested.
   * @returns An observable containing the country information.
   */
  getCountryInfo(countryId: string): Observable<any> {
    const url = `http://api.worldbank.org/v2/country/${countryId}?format=json`;
    return this.http.get<any>(url);
  }
}
