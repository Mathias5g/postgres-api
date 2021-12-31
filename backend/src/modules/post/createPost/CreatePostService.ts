import { Post } from '../../../entities/Post';
import { IPostRepository } from '../../../repositories/IPostRepository';

interface iPostRequest {
  title: string;
  content: string;
  userId: string;
}

class CreatePostService {
  constructor (private postRepository: IPostRepository) {};

  async execute({ title, content, userId}: iPostRequest) {
    const postCreate = Post.create({ title, content, userId});
    const post = await this.postRepository.create(postCreate);
    return post;
  }
}

export { CreatePostService }