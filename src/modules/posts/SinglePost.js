/** @flow */
/**
 * Show a single post who maybe came from the selector or from a server request.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getFetchSinglePost } from './actions';
import Button from '../../components/Button';
import LoadingScreen from '../../components/LoadingScreen';
import SinglePostSelector from './single_post_selector';

type Post = {
  title: string,
  text: string
}

type Props = {
  post: Array<Post>,
  postDomains: {
    post: Post
  },
  getFetchSinglePost: (id: string) => void,
  params: {
    id: string
  }
}

type State = {
  loading: boolean,
  error: boolean,
  post: ?Post
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
    post: null
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
      return <LoadingScreen />;
    } else if (this.state.error) {
      return (
        <div>
          <h1>Post not exist</h1>
          <Button onClick={() => browserHistory.push('/posts')}>
            Go Back
          </Button>
        </div>
      );
    }

    return (
      <div>
        <h1>{this.state.post.title}</h1>
        <p>{this.state.post.text}</p>
        <hr />
        <Button onClick={() => browserHistory.push('/posts')}>
          Go Back
        </Button>
      </div>
    );
  }
}

export default SinglePost;
