import { Component, OnInit } from '@angular/core';
import { TripService } from '../trip.service';

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css'],
})
export class AddTripComponent implements OnInit {
  constructor(private tripService: TripService) {}

  ngOnInit(): void {}

  onSubmit(location: string, startDate: string, durationInDays: string) {
    this.tripService.addTrip(location, startDate, parseInt(durationInDays));
  }
}
