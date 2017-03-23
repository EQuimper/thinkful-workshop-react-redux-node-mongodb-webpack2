import {
  FETCH_SINGLE_POST,
  FETCH_ALL_POSTS,
  FETCH_SINGLE_POST_ERROR,
  getFetchSinglePost,
  fetchPost
} from './actions';

describe('Post Actions', () => {
  describe('#fetchPost()', () => {
    it('should return a type of FETCH_SINGLE_POST and a post', () => {
      const post = { title: 'Hello' };
      const expected = {
        type: FETCH_SINGLE_POST,
        post
      };
      expect(fetchPost(post)).toEqual(expected);
    });
  });
});
