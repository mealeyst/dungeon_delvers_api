"use strict";

class User {
  id: number;
  email: string;
  password: string;
  token: string;

  constructor({ email, password }) {
    this.email = email;
    this.password = password;
  }
}
