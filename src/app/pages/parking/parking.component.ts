import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, parkingType } from '../../services/api.service';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-parking',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ApiService],
  templateUrl: './parking.component.html',
  styleUrl: './parking.component.scss',
})
export class ParkingComponent implements OnInit, OnDestroy {
  constructor(private apiService: ApiService) {}

  apiSubscription!: Subscription;
  parkingList: parkingType[] = [];
  cardBackground: string = '';

  ngOnInit(): void {
    this.apiSubscription = this.apiService
      .getParking()
      .subscribe((data: parkingType[]) => {
        this.parkingList = data;
      });

    this.parkingList.map((parking) => {
      let backgroundColor: string = '';

      if (parking.status.value.toLowerCase() === 'open') {
        parking.availableSpotNumber.value < 15
          ? (backgroundColor = '#FFEBD8')
          : (backgroundColor = '#C7DCA7');
      } else if (parking.status.value.toLowerCase() === 'full') {
        backgroundColor = '#FFC5C5';
      } else if (parking.status.value.toLowerCase() === 'closed') {
        backgroundColor = '#FFC5C5';
      }

      parking['color'] = backgroundColor;
    });
  }

  ngOnDestroy(): void {
    this.apiSubscription.unsubscribe();
  }
}
