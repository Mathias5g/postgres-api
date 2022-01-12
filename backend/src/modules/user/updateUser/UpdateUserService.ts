import { User } from '../../../entities/User';
import { IUserRepository } from '../../../repositories/IUserRepository';

interface userRequest {
  uuid: string;
  firstName: string;
  email: string;
  password: string;
}

class UpdateUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute({ uuid, firstName, email, password }: userRequest) {
    const userAlreadyExists = await this.userRepository.exists(email);
    if(!userAlreadyExists) {
      throw new Error('User not already exists');
    }
    const userCreate = User.create({ uuid, firstName, email, password });
    const user = await this.userRepository.update(userCreate);
    return user;
  }
}

export { UpdateUserService };