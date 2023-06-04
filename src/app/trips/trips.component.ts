import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from '../trip.service';
import { Trip } from '../type';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'],
})
export class TripsComponent implements OnInit {
  trips: Trip[] = [];

  constructor(private tripService: TripService, private router: Router) {}

  ngOnInit(): void {
    this.tripService.getTrips().subscribe((trips) => {
      this.trips = trips;
    });
  }

  goToCreateTrip(): void {
    this.router.navigate(['/addTrip']);
  }
}
