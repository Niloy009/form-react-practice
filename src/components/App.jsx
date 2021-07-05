import React from "react";
import MainForm from "./forms";

class App extends React.Component {
  state = {
    users: [],
  };

  createUser = (user) => {
    user.id = new Date().getTime().toString();
    this.setState({
      users: [...this.state.users, user],
    });
  };
  render() {
    return (
      <div className="container">
        {/* <h1>React Form Practice</h1> */}
        <h1>React Signup Form Practice</h1>

        <MainForm createUser={this.createUser} />

        <div>
          <h3 className="my-5">All Registered Users</h3>
          <ul className="list-group">
            {this.state.users.map((user) => (
              <li key={user.id} className="list-group-item">
                {user.name} == {user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
