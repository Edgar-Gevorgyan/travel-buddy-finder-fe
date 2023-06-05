import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';
import { Trip } from './type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  private tripsUrl = environment.baseURL + '/trips';

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private router: Router
  ) {}

  addTrip(location: string, startDate: string, durationInDays: number) {
    let headers = new HttpHeaders({ Authorization: this.userService.userID });
    this.http
      .post<Trip>(
        this.tripsUrl,
        { location, startDate, durationInDays },
        { headers }
      )
      .subscribe(() => this.router.navigate(['trips']));
  }

  getTrips(): Observable<Trip[]> {
    let headers = new HttpHeaders({ Authorization: this.userService.userID });
    return this.http.get<Trip[]>(this.tripsUrl, { headers });
  }

  getTrip(tripID: string): Observable<Trip> {
    let headers = new HttpHeaders({ Authorization: this.userService.userID });
    return this.http.get<Trip>(this.tripsUrl + '/' + tripID, { headers });
  }

  markTripAsInteresting(tripID: string): Observable<Trip> {
    let headers = new HttpHeaders({ Authorization: this.userService.userID });
    return this.http.post<Trip>(
      this.tripsUrl + '/' + tripID + '/interestedUsers',
      {},
      { headers }
    );
  }
}
