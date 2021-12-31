import { PrismaUserRepository } from "../../../repositories/prisma/PrismaUserRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserService } from "./UpdateUserService";

export const UpdateUserFactory = () => {
  const userRepository = new PrismaUserRepository();
  const userService = new UpdateUserService(userRepository);
  const createUserController = new UpdateUserController(userService);
  return createUserController;
}