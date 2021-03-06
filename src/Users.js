import React from "react";
import PropTypes from "prop-types";
import { user } from "./propTypes";

class Users extends React.Component {
  static propTypes = {
    users: PropTypes.arrayOf(user).isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onUserClick: PropTypes.func.isRequired,
    onAddUserClick: PropTypes.func.isRequired
  };

  userItem(user) {
    return (
      <tr key={user.id}>
        <td>
          <button data-userid={user.id} onClick={this.props.onDeleteClick}>
            Delete
          </button>
        </td>
        <td>
          <a href="#" onClick={event => this.props.onUserClick(event, user.id)}>
            {user.name}
          </a>
        </td>
        <td>{user.email}</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <button onClick={this.props.onAddUserClick}>Add User</button>
        <table>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{this.props.users.map(user => this.userItem(user))}</tbody>
        </table>
      </div>
    );
  }
}

export default Users;
