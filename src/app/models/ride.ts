export interface Ride {
  _id: string;
  departs: Date;
  origin: string;
  destination: string;
  notes: string;
  seats_open: number;
  passengers: {
    _id: string;
    first_name: string;
    last_name: string;
  }
  driver: {
    _id: string;
    first_name: string;
    last_name: string;
    car: {
      seats: number;
      description: string;
    }
  }

}