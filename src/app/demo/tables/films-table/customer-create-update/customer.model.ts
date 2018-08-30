export class Customer {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: number;

  constructor(customer) {
    this.imdbID = customer.imdbID;
    this.Title = customer.Title;
    this.Year = customer.Year;
    this.Type = customer.Type;
    this.Poster = customer.Poster;
  }

  // get name() {
  //   let name = '';
  //
  //   if (this.firstName && this.lastName) {
  //     name = this.firstName + ' ' + this.lastName;
  //   } else if (this.firstName) {
  //     name = this.firstName;
  //   } else if (this.lastName) {
  //     name = this.lastName;
  //   }
  //
  //   return name;
  // }
  //
  // set name(value) {
  // }
  //
  // get address() {
  //   return `${this.street}, ${this.zipcode} ${this.city}`;
  // }
  //
  // set address(value) {
  // }
}
