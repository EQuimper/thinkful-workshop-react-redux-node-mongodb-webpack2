/** @flow */
import { Router } from 'express';
import * as PostController from './controller';

const routes: Router = new Router();

routes.post('/posts', PostController.createPost);
routes.get('/posts', PostController.fetchPosts);
routes.get('/posts/:id', PostController.fetchPostById);

export default routes;
