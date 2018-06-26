import React, { Component } from "react";
import { get } from '../axios';
import Posts from './Posts';
import Post from './Post';
import Users from './Users';
import { Router, Link, Route } from './Router';

const Welcome = (user) =>
  <h1>Hello {user.name}</h1>;

class App extends Component {
  state = { loading: true };

  login = async () =>
    (await get('/users')).data[0];

  async componentDidMount() {
    this.setState({
      user: await this.login(), loading: false
    });
  }

  render() {
    const { loading, user } = this.state;
    return loading ? 'Loading…'
      : !user ? 'Not logged in!'
        : <Router>
          <div className="App">
            <Welcome user={user} />
            <Link to='/posts'>Posts</Link>
            <Link to='/users'>Users</Link>
            <Route path='/posts' component={Posts} />
            <Route path='/posts/:post_id' component={Post} />
            <Route path='/users' component={Users} />
          </div>
        </Router>
  }
}

export default App;
