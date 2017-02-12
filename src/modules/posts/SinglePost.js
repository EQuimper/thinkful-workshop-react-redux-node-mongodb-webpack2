import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getFetchSinglePost } from './actions';
import SinglePostSelector from './single_post_selector';

@connect(
  state => ({
    post: SinglePostSelector(state),
    postDomains: state.posts
  }),
  { getFetchSinglePost }
)
class SinglePost extends Component {
  static propTypes = {
    post: PropTypes.array,
    postDomains: PropTypes.object,
    getFetchSinglePost: PropTypes.func.isRequired
  }

  state = {
    loading: true,
    error: false,
    post: null
  }

  async componentDidMount() {
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
    const { post } = this.state;
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.text}</p>
        <hr />
        <button onClick={() => browserHistory.push('/posts')}>
          Go Back
        </button>
      </div>
    );
  }
}

export default SinglePost;
