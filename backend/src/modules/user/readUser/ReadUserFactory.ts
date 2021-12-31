import { PrismaUserRepository } from "../../../repositories/prisma/PrismaUserRepository";
import { ReadUserService } from "./ReadUserService";
import { ReadUserController } from './ReadUserController';

export const ReadUserFactory = () => {
  const userRepository = new PrismaUserRepository();
  const userService = new ReadUserService(userRepository);
  const readUserController = new ReadUserController(userService);
  return readUserController;
}