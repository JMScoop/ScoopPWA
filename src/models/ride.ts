import {Person} from './person';

export class Ride {
	constructor (
		public departs: Date,
		public origin: string = "",
		public destination: string = "",
		public notes: string = "",
		public seats_open: number = 3,
		public passengers: Person[],
		public driver: Person
	){}

}