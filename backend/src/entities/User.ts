class User {

  uuid?: string;
  firstName: string;
  lastName: string;
  email: string;

  private constructor({ firstName, lastName, email }: User) {
    return Object.assign(this, {
      firstName,
      lastName,
      email
    });
  }

  static create({ firstName, lastName, email }: User) {
    const user = new User({ firstName, lastName, email });
    return user;
  }
}

export { User };