import { Request, Response } from 'express';
import { ReadUserService } from "./ReadUserService";

class ReadUserController {
  constructor(private readUser: ReadUserService) {}

  async handler(request: Request, response: Response) {
    const user = await this.readUser.execute(request.body.uuid);
    return response.json(user);
  }
}

export { ReadUserController };