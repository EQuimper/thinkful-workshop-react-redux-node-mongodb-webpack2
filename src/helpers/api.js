/** @flow */
const fetchData = (url: string): Promise<Object> =>
  fetch(`/api/v1/${url}`)
    .then(res => res.json())
    .catch((e: Object) => console.log(e));

export class PostApi {
  fetchData: (url: string) => Promise<Object>;

  constructor() {
    this.fetchData = fetchData;
  }

  async fetchPosts(): Promise<Object> {
    try {
      return await this.fetchData('posts');
    } catch (e) {
      console.log(e);
    }
  }
  async fetchSinglePost(id: string): Promise<Object> {
    try {
      return await this.fetchData(`posts/${id}`);
    } catch (e) {
      console.log(e);
    }
  }
}
