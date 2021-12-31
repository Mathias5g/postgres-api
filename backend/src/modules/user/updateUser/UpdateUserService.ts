import { User } from '../../../entities/User';
import { IUserRepository } from '../../../repositories/IUserRepository';

interface userRequest {
  uuid: string;
  firstName: string;
  lastName: string;
  email: string;
}

class UpdateUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute({ uuid, firstName, lastName, email }: userRequest) {
    const userAlreadyExists = await this.userRepository.exists(email);
    if(!userAlreadyExists) {
      throw new Error('User not already exists');
    }
    const userCreate = User.create({ uuid, firstName, lastName, email });
    const user = await this.userRepository.update(userCreate);
    return user;
  }
}

export { UpdateUserService };