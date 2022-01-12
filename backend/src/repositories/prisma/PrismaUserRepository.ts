import { prisma } from '../../database/prismaClient';
import { User } from '../../entities/User';
import { IUserRepository } from '../IUserRepository';
import { v4 as uuidv4 } from 'uuid';
import md5 from 'crypto-md5';

class PrismaUserRepository implements IUserRepository {
  async create({ firstName, email, password }: User): Promise<User> {
    
    let passwordHash = md5(password, 'hex');
    
    const user = await prisma.user.create({
      data: {
        uuid: uuidv4(),
        firstName,
        email,
        password: passwordHash
      }
    });
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

  async update({ firstName, email, password }: User): Promise<User> {
    const updateUser = await prisma.user.update({
      data: {
        firstName,
        email,
        password
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
