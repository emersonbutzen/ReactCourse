import React, { Component } from "react";

export const Clock = () => {
  return (
    <div>
      <h2>Horas: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
};
