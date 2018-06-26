import React, { Component } from "react";
import { get } from '../axios';
import { Link } from './Router';

class Posts extends Component {
  state = {
    posts: []
  }

  getPosts = async () =>
    (await get('/posts')).data

  async componentDidMount() {
    this.setState({ posts: await this.getPosts() })
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <ul>
          {this.state.posts.map(
            post => (
              <li key={post._id}>
                <Link to={`/posts/${post._id}`}>{post.title}</Link>
              </li>
            )
          )}
        </ul>
      </div>
    )
  }
}

export default Posts;
