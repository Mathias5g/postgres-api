import { PrismaPostRepository } from "../../../repositories/prisma/PrismaPostRepository";
import { CreatePostService } from "./CreatePostService";
import { CreatePostController } from "./CreatePostController";

export const CreatePostFactory = () => {
  const postRepository = new PrismaPostRepository()
  const postService = new CreatePostService(postRepository);
  const createPostController = new CreatePostController(postService);
  return createPostController;
}