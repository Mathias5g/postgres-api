import { User } from '../entities/User';

interface IUserRepository {
  create(user: User): Promise<User>;
  read(uuid: string): Promise<User>;
  exists(email: string): Promise<boolean>;
  update(user: User): Promise<User>;
  delete(uuid: string): Promise<User>;
}

export { IUserRepository };