import { prisma } from '../../database/prismaClient';
import { Post } from "../../entities/Post";
import { IPostRepository } from "../IPostRepository";
import { v4 as uuidv4 } from 'uuid';

class PrismaPostRepository implements IPostRepository {
  async create({title, content, userId}: Post): Promise<Post> {
      const post = await prisma.post.create({
        data: {
          uuid: uuidv4(),
          title,
          content,
          userId
        }
      });

      return post;
  }
}

export { PrismaPostRepository }