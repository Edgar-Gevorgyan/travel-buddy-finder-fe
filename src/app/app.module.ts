import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { TripsComponent } from './trips/trips.component';
import { AuthGuardService } from './auth-guard.service';
import { AddTripComponent } from './add-trip/add-trip.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, TripsComponent, AddTripComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
