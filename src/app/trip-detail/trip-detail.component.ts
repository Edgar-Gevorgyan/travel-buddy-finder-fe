import { Component, OnInit } from '@angular/core';
import { Trip } from '../type';
import { TripService } from '../trip.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css'],
})
export class TripDetailComponent implements OnInit {
  trip: Trip | null = null;

  constructor(
    private tripService: TripService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let tripID = this.route.snapshot.params['id'];
    this.tripService.getTrip(tripID).subscribe((trip) => {
      this.trip = trip;
    });
  }
}
