import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BikeComponent } from './pages/bike/bike.component';
import { ParkingComponent } from './pages/parking/parking.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'bike',
    component: BikeComponent,
  },
  {
    path: 'parking',
    component: ParkingComponent,
  },
  { path: '**', redirectTo: '' },
];
