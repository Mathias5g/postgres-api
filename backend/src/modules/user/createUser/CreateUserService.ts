import { User } from '../../../entities/User';
import { IUserRepository } from '../../../repositories/IUserRepository';

interface iUserRequest {
  firstName: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute({ firstName, email, password }: iUserRequest) {
    const userAlreadyExists = await this.userRepository.exists(email);
    if(userAlreadyExists) {
      throw new Error('User already exists')
    }
    const userCreate = User.create({ firstName, email, password });
    const user = await this.userRepository.create(userCreate);
    return user;
  }
}

export { CreateUserService };