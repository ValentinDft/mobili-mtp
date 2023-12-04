import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { type } from 'os';
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

export type parkingType = {
  id: string;
  allowedVehicleType: {
    value: Array<string>;
  };
  availableSpotNumber: {
    value: number;
  };
  category: {
    value: Array<string>;
  };
  layout: {
    value: Array<string>;
  };
  location: {
    value: {
      coordinates: [number, number];
    };
  };
  name: {
    value: string;
  };
  status: {
    value: string;
  };
  totalSpotNumber: {
    value: number;
  };
  color?: string;
};

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  getBikesStation(): Observable<bikeStationType[]> {
    return this._http.get<bikeStationType[]>(
      'https://portail-api-data.montpellier3m.fr/bikestation?limit=1000'
    );
  }

  getParking(): Observable<parkingType[]> {
    return this._http.get<parkingType[]>(
      'https://portail-api-data.montpellier3m.fr/offstreetparking?limit=1000'
    );
  }
}
