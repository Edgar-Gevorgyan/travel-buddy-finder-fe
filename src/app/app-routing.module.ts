import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsComponent } from './trips/trips.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './auth-guard.service';
import { AddTripComponent } from './add-trip/add-trip.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'trips', component: TripsComponent, canActivate: [AuthGuardService] },
  {
    path: 'trips/:id',
    component: TripDetailComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'addTrip',
    component: AddTripComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'login', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: 'trips' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
