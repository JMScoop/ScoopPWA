import {Car} from './car';
export class Person {
	constructor (public first_name: string = "", public last_name: string = "", public car: Car){
		this.car = new Car();
	}
}