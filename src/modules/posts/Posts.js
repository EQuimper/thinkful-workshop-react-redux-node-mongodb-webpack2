import React, { Component } from 'react';
import { fetchPosts } from '../../helpers/api';

class Posts extends Component {
  state = { isFetched: false, posts: [] }

  async componentDidMount() {
    const data = await fetchPosts();

    this.setState({ isFetched: true, posts: data.posts });
  }

  render() {
    if (!this.state.isFetched) {
      return (
        <h1>Loading...</h1>
      );
    }
    return (
      <div>
        {this.state.posts.map((post, i) => (
          <div key={i}>
            <h3>{post.title}</h3>
            <hr />
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
