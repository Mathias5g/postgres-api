import { Router } from 'express';
import { CreateUserFactory } from '../modules/user/createUser/CreateUserFactory';
import { UpdateUserFactory } from '../modules/user/updateUser/UpdateUserFactory';
import { DeleteUserFactory } from '../modules/user/deleteUser/DeleteUserFactory';
import { ReadUserFactory } from '../modules/user/readUser/ReadUserFactory';
import { CreatePostFactory } from '../modules/post/createPost/CreatePostFactory';

const routes = Router();

routes.get('/users', (request, response) => 
  ReadUserFactory().handler(request, response)
);
routes.post('/users', (request, response) => 
  CreateUserFactory().handler(request, response)
);
routes.put('/users', (request, response) => 
  UpdateUserFactory().handler(request, response)
);
routes.delete('/users', (request, response) => 
  DeleteUserFactory().handler(request, response)
);

routes.post('/posts', (request, response) => 
  CreatePostFactory().handler(request, response)
);

export { routes };