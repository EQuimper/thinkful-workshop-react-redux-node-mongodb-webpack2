/** @flow */
import axios from 'axios';

axios.defaults.baseURL = '/api/v1';

export class PostApi {
  async fetchPosts(): Promise<Object> {
    try {
      const { data } = await axios.get('/posts');
      return data;
    } catch (e) {
      console.log(e); // eslint-disable-line
    }
  }
  async fetchSinglePost(id: string): Promise<Object> {
    try {
      const { data } = await axios.get(`posts/${id}`);
      return data;
    } catch (e) {
      console.log(e); // eslint-disable-line
    }
  }
}
