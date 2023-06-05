import { Component, OnInit } from '@angular/core';
import { Trip } from '../type';
import { TripService } from '../trip.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css'],
})
export class TripDetailComponent implements OnInit {
  trip: Trip | null = null;

  constructor(
    private tripService: TripService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let tripID = this.route.snapshot.params['id'];
    this.tripService.getTrip(tripID).subscribe((trip) => {
      this.trip = trip;
    });
  }

  isAlreadyInterested(): boolean {
    return (
      this.trip?.interestedUsers.find(
        (user) => user.username === this.userService.username
      ) !== undefined
    );
  }

  markAsInterested(): void {
    if (this.trip !== null) {
      this.tripService.markTripAsInteresting(this.trip.id).subscribe((trip) => {
        this.trip = trip;
      });
    }
  }
}
