import { Post } from '../entities/Post';

interface IPostRepository {
  create(post: Post): Promise<Post>;
  /* read(uuid: string): Promise<Post>;
  update(post: Post): Promise<Post>;
  delete(uuid: string): Promise<Post>; */
}

export { IPostRepository };