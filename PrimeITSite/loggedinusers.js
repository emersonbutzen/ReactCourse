import React from "react";
import lgtp from "./images/logo.png";

export default class LoggedInUsers extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };
  }

  render() {
    return (
      <div className="users">
        {this.state.users.map((item, i) => (
          <img key={i} className="user" src={lgtp} />
        ))}
      </div>
    );
  }
}
