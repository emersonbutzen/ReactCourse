import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form1 from "./form1";
import FileInput from "./form2";
import TextAreaBox from "./form3";
import Combo from "./form4";
import { NaoEncontrado } from "./naoencontrado";

class App extends Component {
  render() {
    return <Combo />;
  }
}

export default App;
