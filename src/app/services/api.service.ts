import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type bikeStationType = {
  address: {
    type: string;
    value: {
      addressCountry: string;
      addressLocality: string;
      streetAddress: string;
    };
  };
  availableBikeNumber: {
    value: number;
  };
  freeSlotNumber: {
    value: number;
  };
  id: string;
  location: {
    value: {
      coordinates: [number, number];
    };
  };
  status: {
    value: string;
  };
  totalSlotNumber: {
    value: number;
  };
  type: string;
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  getBikestation(): Observable<bikeStationType[]> {
    return this._http.get<bikeStationType[]>(
      'https://portail-api-data.montpellier3m.fr/bikestation?limit=1000'
    );
  }
}
