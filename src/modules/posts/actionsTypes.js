/** @flow */
export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';
export const FETCH_SINGLE_POST_ERROR = 'FETCH_SINGLE_POST_ERROR';
export const SELECTED_POST = 'SELECTED_POST';

export type FetchAllPostsAction = {
  type: 'FETCH_ALL_POSTS',
  posts: Array<Object>
}

export type FetchPostAction = {
  type: 'FETCH_SINGLE_POST',
  post: Object
}

export type FetchSinglePostErrorAction = {
  type: 'FETCH_SINGLE_POST_ERROR'
}

export type SelectPostAction = {
  type: 'SELECTED_POST',
  id: string
}
