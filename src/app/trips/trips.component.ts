import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css'],
})
export class TripsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToCreateTrip(): void {
    this.router.navigate(['/addTrip']);
  }
}
