import { Router } from 'express';
import * as PostController from './controller';

const routes = new Router();

routes.route('/posts').post(PostController.createPost);
routes.route('/posts').get(PostController.fetchPosts);
routes.route('/posts/:id').get(PostController.fetchPostById);

export default routes;
