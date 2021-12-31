import { IUserRepository } from "../../../repositories/IUserRepository";

class ReadUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(uuid: string) {
    const user = await this.userRepository.read(uuid);
    return user;
  }
}

export { ReadUserService };