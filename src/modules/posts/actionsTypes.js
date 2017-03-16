/** @flow */
export type FetchAllPostsAction = {
  type: 'FETCH_ALL_POSTS';
  posts: Array<Object>;
}

export type FetchPostAction = {
  type: 'FETCH_SINGLE_POST';
  post: Object;
}

export type FetchSinglePostErrorAction = {
  type: 'FETCH_SINGLE_POST_ERROR';
}

export type SelectPostAction = {
  type: 'SELECTED_POST';
  id: string;
}
