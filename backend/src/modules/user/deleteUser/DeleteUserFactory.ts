import { PrismaUserRepository } from "../../../repositories/prisma/PrismaUserRepository";
import { DeleteUserService } from "./DeleteUserService";
import { DeleteUserController } from './DeleteUserController';

export const DeleteUserFactory = () => {
  const userRepository = new PrismaUserRepository();
  const userServive = new DeleteUserService(userRepository);
  const deleteUserController = new DeleteUserController(userServive);
  return deleteUserController;
}