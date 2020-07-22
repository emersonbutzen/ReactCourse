import React from "react";
import lgtp from "./images/logo.png";
import LoggedInUsers from "./LoggedInUsers";

export const Header = () => {
  return (
    <div className="jumbotron text-left">
      <img className="logotipo" src={lgtp} alt="PrimeIT" />
      <LoggedInUsers />
    </div>
  );
};
