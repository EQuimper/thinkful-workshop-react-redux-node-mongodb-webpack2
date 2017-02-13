/** @flow */
const fetchData = url =>
  fetch(`/api/v1/${url}`)
    .then(res => res.json())
    .catch(e => console.log(e));

export class PostApi {
  fetchData: Function

  constructor() {
    this.fetchData = fetchData;
  }

  async fetchPosts(): Object {
    try {
      return await this.fetchData('posts');
    } catch (e) {
      console.log(e);
    }
  }
  async fetchSinglePost(id: string): Object {
    try {
      return await this.fetchData(`posts/${id}`);
    } catch (e) {
      console.log(e);
    }
  }
}
