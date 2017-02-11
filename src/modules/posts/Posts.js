import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Card from '../../components/Card';
import { getFetchAllPosts, selectPost } from './actions';

@connect(
  state => ({
    posts: state.posts.posts
  }),
  { getFetchAllPosts, selectPost }
)
class Posts extends Component {
  state = { loading: false }

  async componentDidMount() {
    this.setState({ loading: true });
    await this.props.getFetchAllPosts();
    this.setState({ loading: false });
  }

  _goToHome = () => browserHistory.push('/');

  _onClick = id => {
    this.props.selectPost(id);
    browserHistory.push(`/posts/${id}`);
  }

  render() {
    if (this.state.loading) {
      return (
        <h1>Loading...</h1>
      );
    } else if (!this.props.posts) {
      return (
        <h1>No post yet</h1>
      );
    }
    return (
      <div>
        {this.props.posts.map((post, i) => (
          <li key={i} onClick={() => this._onClick(post._id)}>
            <Card>
              <h1>{post.title}</h1>
              <p>{post.text}</p>
            </Card>
            <br />
          </li>
        ))}
        <button onClick={this._goToHome}>Go Home</button>
      </div>
    );
  }
}

export default Posts;
