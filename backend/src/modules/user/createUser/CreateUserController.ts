import { Request, Response } from 'express';
import { CreateUserService } from './CreateUserService';

class CreateUserController {
  constructor(private createUser: CreateUserService) {}

  async handler(request: Request, response: Response) {
    const { firstName, email, password } = request.body;
    const user = await this.createUser.execute({ firstName, email, password });

    return response.json(user);
  }
}

export { CreateUserController };