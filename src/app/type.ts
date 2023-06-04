export interface User {
  id: string;
  username: string;
}

export interface Weather {
  date: Date;
  maxtempC: number;
  mintempC: number;
  avgtempC: number;
  sunHour: number;
  uvIndex: number;
}

export interface Trip {
  id: string;
  location: string;
  startDate: Date;
  durationInDays: number;
  weather: Weather[];
  sharedBy: User;
  interestedUsers: User[];
}
