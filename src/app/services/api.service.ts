import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  getBikestation() {
    return this._http.get(
      'https://portail-api-data.montpellier3m.fr/bikestation?limit=1000'
    );
  }
}
