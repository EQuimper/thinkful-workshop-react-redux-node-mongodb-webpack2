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
