/** @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getFetchSinglePost } from './actions';
import SinglePostSelector from './single_post_selector';

type Post = {
  title: string,
  text: string
}

type Props = {
  post: Array<Post>,
  postDomains: Object,
  getFetchSinglePost: (id: string) => void,
  params: Object
}

type State = {
  loading: boolean,
  error: boolean,
  post: Object
}

@connect(
  state => ({
    post: SinglePostSelector(state),
    postDomains: state.posts
  }),
  { getFetchSinglePost }
)
class SinglePost extends Component<void, Props, State> {
  state = {
    loading: true,
    error: false,
    post: {}
  }

  componentDidMount() {
    (async () => {
      if (this.props.post.length < 1) {
        await this.props.getFetchSinglePost(this.props.params.id);
        if (this.props.postDomains.error) {
          this.setState({ loading: false, error: true });
        } else {
          this.setState({ post: this.props.postDomains.post, loading: false });
        }
      } else {
        this.setState({ loading: false, post: this.props.post[0] });
      }
    })();
  }

  render() {
    if (this.state.loading) {
      return (
        <h1>Loading...</h1>
      );
    } else if (this.state.error) {
      return (
        <div>
          <h1>Post not exist</h1>
          <button onClick={() => browserHistory.push('/posts')}>
            Go Back
          </button>
        </div>
      );
    }

    return (
      <div>
        <h1>{this.state.post.title}</h1>
        <p>{this.state.post.text}</p>
        <hr />
        <button onClick={() => browserHistory.push('/posts')}>
          Go Back
        </button>
      </div>
    );
  }
}

export default SinglePost;
