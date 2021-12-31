import { IUserRepository } from "../../../repositories/IUserRepository";

class DeleteUserService {
  constructor(private userRepository: IUserRepository) {}

  async execute(uuid: string) {
    const user = await this.userRepository.delete(uuid);
    return user;
  }
}

export { DeleteUserService };