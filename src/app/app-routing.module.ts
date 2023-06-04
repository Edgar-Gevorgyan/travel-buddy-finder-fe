import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsComponent } from './trips/trips.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './auth-guard.service';
import { AddTripComponent } from './add-trip/add-trip.component';

const routes: Routes = [
  { path: '', component: TripsComponent, canActivate: [AuthGuardService] },
  {
    path: 'addTrip',
    component: AddTripComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'login', component: AuthComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
