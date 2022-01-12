class User {

  uuid?: string;
  firstName: string;
  email: string;
  password: string;

  private constructor({ firstName, email, password }: User) {
    return Object.assign(this, {
      firstName,
      email,
      password
    });
  }

  static create({ firstName, email, password }: User) {
    const user = new User({ firstName, email, password });
    return user;
  }
}

export { User };