import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import { getFetchAllPosts } from './actions';

@connect(
  state => ({
    posts: state.posts
  }),
  { getFetchAllPosts }
)
class Posts extends Component {
  state = { loading: false }

  async componentDidMount() {
    this.setState({ loading: true });
    await this.props.getFetchAllPosts();
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <h1>Loading...</h1>
      );
    }
    return (
      <div>
        {this.props.posts.map((post, i) => (
          <li key={i}>
            <Card>
              <h1>{post.title}</h1>
              <p>{post.text}</p>
            </Card>
            <br />
          </li>
        ))}
      </div>
    );
  }
}

export default Posts;
