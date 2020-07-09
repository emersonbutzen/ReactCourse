import React, { Component } from "react";

class Hours extends Component {
  render() {
    return (
      <div>
        <h2>Horas: {new Date().toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Hours;
