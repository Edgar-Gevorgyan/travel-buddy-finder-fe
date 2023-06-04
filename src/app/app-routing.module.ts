import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsComponent } from './trips/trips.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', component: TripsComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: AuthComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
