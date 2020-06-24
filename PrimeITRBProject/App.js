import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Inicio } from "./inicio";
import { Sobre } from "./sobre";
import { Contactos } from "./contactos";
import { Layout } from "./layout";
import { NaoEncontrado } from "./NaoEncontrado";
import { Navigationbar } from "./BarraMenu.js";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigationbar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Inicio} />
              <Route path="/sobre" component={Sobre} />
              <Route path="/contactos" component={Contactos} />
              <Route component={NaoEncontrado} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
