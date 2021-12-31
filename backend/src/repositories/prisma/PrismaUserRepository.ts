import { prisma } from '../../database/prismaClient';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';
import { v4 as uuidv4 } from 'uuid';

class PrismaUserRepository implements IUserRepository {
  async create({ firstName, lastName, email }: User): Promise<User> {
    const user = await prisma.user.create({
      data: {
        uuid: uuidv4(),
        firstName,
        lastName,
        email
      }
    }) 
    return user;
  }

  async read(uuid: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        uuid
      }
    });

    return user;
  }

  async exists(email: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });    
    return !!user;
  }

  async update({ firstName, lastName, email }: User): Promise<User> {
    const updateUser = await prisma.user.update({
      data: {
        firstName,
        lastName,
        email
      },
      where: {
        email
      }
    });
    return updateUser;
  }

  async delete(uuid: string): Promise<User> {
    const deleted = await prisma.user.delete({
      where: {
        uuid
      }
    });
    return deleted;
  }

}

export { PrismaUserRepository };
