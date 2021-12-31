import { Request, Response } from 'express';
import { CreatePostService } from './CreatePostService';

class CreatePostController {
  constructor(private createPost: CreatePostService) {};

  async handler(request: Request, response: Response) {
    const { title, content, userId } = request.body;
    const post = await this.createPost.execute({ title, content, userId });
    
    return response.json(post);
  }
}

export { CreatePostController };