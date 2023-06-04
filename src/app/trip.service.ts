import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';
import { Trip } from './type';

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
      .subscribe(() => this.router.navigate(['']));
  }
}
