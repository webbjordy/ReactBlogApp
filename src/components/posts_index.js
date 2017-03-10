import React, { Component } from 'react';

class PostsIndex extends Component {
  componentWillMount() {
    console.log('this would be a good time to call an action creator')
  }
  render() {
    return (
      <div>List of posts</div>
    );
  }
}

export default PostsIndex;
