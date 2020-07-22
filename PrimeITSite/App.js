import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./home";
import { Services } from "./services";
import { Contacts } from "./contacts";
import { NotFound } from "./notfound";
import { Layout } from "./layout";
import { Menu } from "./menu.js";
import { Header } from "./header";
import { Footer } from "./footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Menu />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/contacts" component={Contacts} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Layout>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
