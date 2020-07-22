import React from "react";
import lgtp from "./images/logo.png";

export const Header = () => {
  return (
    <div className="jumbotron text-left">
      <img className="logotipo" src={lgtp} alt="PrimeIT" />
    </div>
  );
};
