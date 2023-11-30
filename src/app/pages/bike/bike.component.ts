import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, bikeStationType } from '../../services/api.service';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-bike',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './bike.component.html',
  styleUrl: './bike.component.scss',
})
export class BikeComponent implements OnInit, OnDestroy {
  constructor(private apiService: ApiService) {}

  apiSubscription!: Subscription;
  bikeStationsList: bikeStationType[] = [];
  bikeStationsListSearch: bikeStationType[] = [];
  searchValue: string = '';

  ngOnInit(): void {
    this.apiSubscription = this.apiService
      .getBikestation()
      .subscribe((data: bikeStationType[]) => {
        this.bikeStationsList = data;
      });
  }

  ngOnDestroy(): void {
    this.apiSubscription.unsubscribe();
  }

  searchBikeStation(search: any): void {
    this.searchValue = search.value;

    this.bikeStationsListSearch = this.bikeStationsList.filter(
      (bikeStation) => {
        return bikeStation.address.value.streetAddress
          .toLowerCase()
          .includes(this.searchValue.toLowerCase());
      }
    );
  }

  openOnMaps(coordinates: [lng: number, lat: number]): void {
    window.open(
      `https://www.google.com/maps?q=${coordinates[1]},${coordinates[0]}`,
      '_blank'
    );
  }
}
