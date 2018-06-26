import React, { Component } from "react";
import { get } from '../axios';

class Users extends Component {
  state = {
    users: []
  }

  getUsers = async () =>
    (await get('/users')).data

  async componentDidMount() {
    this.setState({ users: await this.getUsers() })
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {this.state.users.map(
            user => <li key={user._id}>{user.name}</li>
          )}
        </ul>
      </div>
    )
  }
}

export default Users;
