import { PrismaUserRepository } from "../../../repositories/prisma/PrismaUserRepository";
import { CreateUserService } from './CreateUserService';
import { CreateUserController } from './CreateUserController';

export const CreateUserFactory = () => {
  const userRepository = new PrismaUserRepository();
  const userService = new CreateUserService(userRepository);
  const createUserController = new CreateUserController(userService);
  return createUserController;
}