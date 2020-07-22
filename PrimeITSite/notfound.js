import React, { Component } from "react";

export const NotFound = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
          <h2>404 - A página não foi encontrada</h2>
        </div>
        <a href="/">Voltar à página principal</a>
      </div>
    </div>
  );
};
