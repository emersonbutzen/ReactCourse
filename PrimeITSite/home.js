import React, { Component } from "react";
import { Button } from "react-bootstrap";
import history from "./history";

export const Home = () => {
  return (
    <div className="Home">
      <div className="lander">
        <h1>Home page</h1>
        <p>A simple app showing react button click navigation</p>
        <form>
          <Button
            variant="btn btn-success"
            onClick={() => history.push("/contacts")}
          >
            Click button to view contacts
          </Button>
        </form>
      </div>
    </div>
  );
};
