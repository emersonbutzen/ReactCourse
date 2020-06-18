import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Inicio } from "./inicio";
import { Sobre } from "./sobre";
import { Contactos } from "./contactos";
import { Layout } from "./layout";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Router>
            <Switch>
              <Route path="/" component={Inicio} />
              <Route path="/sobre" component={Sobre} />
              <Route path="/contactos" component={Contactos} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
