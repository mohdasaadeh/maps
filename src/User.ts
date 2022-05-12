import faker from "@faker-js/faker";

import { Mappable } from "./CustomMap";

class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  popUpMessage(): string {
    return `This is ${this.name}`;
  }
}

export default User;
