import { Request, Response } from 'express';
import { DeleteUserService } from './DeleteUserService';

class DeleteUserController {
  constructor(private updateUser: DeleteUserService) {}

  async handler(request: Request, response: Response) {
    const { uuid } = request.body;
    const user = await this.updateUser.execute(uuid);
    return response.json(user);
  }
}

export { DeleteUserController };