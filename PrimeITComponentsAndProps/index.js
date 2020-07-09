import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Hours from "./Hours";

function tick() {
  const element = <Hours />;
  ReactDOM.render(element, document.getElementById("hours"));
}

setInterval(tick, 1000);
ReactDOM.render(<App />, document.getElementById("root"));
