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
