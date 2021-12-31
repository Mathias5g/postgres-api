import { Request, Response } from 'express';
import { CreateUserService } from './CreateUserService';

class CreateUserController {
  constructor(private createUser: CreateUserService) {}

  async handler(request: Request, response: Response) {
    const { firstName, lastName, email } = request.body;
    const user = await this.createUser.execute({ firstName, lastName, email });

    return response.json(user);
  }
}

export { CreateUserController };