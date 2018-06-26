import React, { Component } from "react";
import { get } from '../axios';

const dir = object => <table><tbody>{
  Object.entries(object).map(([key, value]) => (
    <tr key={key}>
      <td>{`${key}`}</td>
      <td>{typeof value === 'object' ? dir(value) : `${value}`}</td>
    </tr>
  ))
}</tbody></table>

export class Post extends Component {
  state = {
    post: {}
  };

  async componentDidMount() {
    this.setState({ post: (await get(`/posts/${this.props.match.params.post_id}`)).data });
  }

  render() {
    return dir(this.state.post)
  }
}

export default Post;
