import faker from "@faker-js/faker";

import { Mappable } from "./CustomMap";

class Company implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  catchPhrase: string;

  constructor() {
    this.name = faker.company.companyName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.catchPhrase = faker.company.catchPhrase();
  }

  popUpMessage(): string {
    return `This is ${this.name} with slogan: ${this.catchPhrase}`;
  }
}

export default Company;
