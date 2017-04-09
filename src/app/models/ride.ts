export class Ride {
  constructor (
      public departs: Date,
      public origin: string,
      public destination: string,
      public notes: string,
      public seats_open: number,
      public passengers: Passengers,
      public driver: Driver
    ){}
}

export class Passengers {
  constructor(
        public first_name: string,
        public last_name: string,
    ){}
}

export class Driver {
  constructor(
        public first_name: string,
        public last_name: string,
        public Car: Car
    ){}
}

export class Car {
  constructor(
        public seats: number,
        public description: string
    ){}
}
