import { Request, Response } from 'express';
import { UpdateUserService } from './UpdateUserService';

class UpdateUserController {
  constructor(private updateUser: UpdateUserService) {}

 async handler(request: Request, response: Response) {
   const { uuid, firstName, lastName, email } = request.body;
   const user = await this.updateUser.execute({ uuid, firstName, lastName, email });
   return response.json(user)
 }
}

export { UpdateUserController };