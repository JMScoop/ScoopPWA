// export class Ride {
//   constructor (
//       public _id: string,
//       public departs: Date,
//       public origin: string,
//       public destination: string,
//       public notes: string,
//       public seats_open: number,
//       public passengers: {
//         _id: string,
//         first_name: string,
//         last_name: string,
//       },
//       public driver: {
//         _id: string,
//         first_name: string,
//         last_name: string
//         car: {
//           seats: number,
//           description: string
//         }
//       }
//     ){}
// }

//temporary model based on tutorial

export class Ride {
    constructor(
        public id: Date, 
        public author: string, 
        public text:string
        ){}
}