## Stack

- React
- Redux
- MongoDB
- Node.JS
- Webpack2
- FlowTypes
- Styled-Component
- Service-Worker
- App Caching

## Code splitting with React-Router

```js
const componentRoutes = {
  component: App,
  path: '/',
  childRoutes: [
    {
      path: '/posts',
      async getComponent(location: string, cb: Function) {
        try {
          const module = await import('./modules/posts/Posts');
          cb(null, module.default);
        } catch (e) {
          errorLoading(e);
        }
      }
    },
    {
      path: '/posts/:id',
      async getComponent(location: string, cb: Function) {
        try {
          const module = await import('./modules/posts/SinglePost');
          cb(null, module.default);
        } catch (e) {
          errorLoading(e);
        }
      }
    }
  ]
};
```

## Service Worker

```js
if (process.env.NODE_ENV === 'production') {
  (() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js');
    }
  })();
  require('offline-plugin/runtime').install();
}
```

## Styled-Component

```js
import styled from 'styled-components';

const Card = styled.div`
  height: 400px;
  width: 300px;
  background-color: #fff;
  cursor: pointer;
`;

export default Card;
```

## FlowTypes

```js
/** @flow */
import type { Post } from './Data';

// POSTS
type FetchPostAction = {
  type: 'FETCH_SINGLE_POST',
  post: Post
}

type FetchAllPostsAction = {
  type: 'FETCH_ALL_POSTS',
  posts: Array<Post>
}

type FetchSinglePostErrorAction = {
  type: 'FETCH_SINGLE_POST_ERROR'
}

type SelectPostAction = {
  type: 'SELECTED_POST',
  id: string
}

export type Action =
  | FetchPostAction
  | FetchAllPostsAction
  | FetchSinglePostErrorAction
  | SelectPostAction
```

https://salty-falls-54316.herokuapp.com/

## Want to play with ?

1. Clone the repos
2. `npm i` or `yarn`
3. `npm run dev:s` or `yarn dev:s` for start the server
4. `npm run dev:c` or `yarn dev:c` for start the client
5. `localhost:9000` gonna open in your browser by webpack

## FlowTypes

When install new packages just run `flow-typed install`

## TODO

- [x] Change webpack code splitting System.import for import()
- [x] Add service worker
- [x] Add offline caching
- [ ] Get smaller bundle
