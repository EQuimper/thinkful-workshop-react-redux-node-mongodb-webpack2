import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { getFetchSinglePost } from './actions';
import SinglePostSelector from './single_post_selector';

@connect(
  state => ({
    post: SinglePostSelector(state),
    postDomains: state.posts.post
  }),
  { getFetchSinglePost }
)
class SinglePost extends Component {
  state = {
    loading: true,
    post: null
  }
  async componentDidMount() {
    if (this.props.post.length < 1) {
      await this.props.getFetchSinglePost(this.props.params.id);
      this.setState({ post: this.props.postDomains, loading: false });
    } else {
      this.setState({ loading: false, post: this.props.post[0] });
    }
  }
  render() {
    if (this.state.loading) {
      return (
        <h1>Loading...</h1>
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
