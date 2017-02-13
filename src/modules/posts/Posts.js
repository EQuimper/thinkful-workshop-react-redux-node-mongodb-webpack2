/** @flow */
/**
 * Fetch the posts from the server in the componentDidMount. Show the list of posts
 * and make it able to be click and see the post in details.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import Card from '../../components/Card';
import LoadingScreen from '../../components/LoadingScreen';
import Button from '../../components/Button';
import { getFetchAllPosts, selectPost } from './actions';

type Post = {
  title: string,
  text: string,
  _id: string
}

type Props = {
  posts: Array<Post>,
  getFetchAllPosts: () => void,
  selectPost: (id: string) => void
}

type State = {
  loading: boolean
}

@connect(
  state => ({
    posts: state.posts.posts
  }),
  { getFetchAllPosts, selectPost }
)
class Posts extends Component {
  props: Props;
  state: State;

  state = { loading: true }

  componentDidMount() {
    (async () => {
      if (this.props.posts.length < 1) {
        await this.props.getFetchAllPosts();
        this.setState({ loading: false });
      } else {
        this.setState({ loading: false });
      }
    })();
  }

  _goToHome = (): void => browserHistory.push('/');

  _onClick = (id: string): void => {
    this.props.selectPost(id);
    browserHistory.push(`/posts/${id}`);
  }

  render() {
    if (this.state.loading) {
      return <LoadingScreen />;
    } else if (!this.props.posts) {
      return (
        <h1>No post yet</h1>
      );
    }
    return (
      <div>
        {this.props.posts.map((post: Post, i: number) => (
          <li key={i} onClick={() => this._onClick(post._id)}>
            <Card>
              <h1>{post.title}</h1>
              <p>{post.text}</p>
            </Card>
            <br />
          </li>
        ))}
        <Button onClick={this._goToHome}>Go Home</Button>
      </div>
    );
  }
}

export default Posts;
