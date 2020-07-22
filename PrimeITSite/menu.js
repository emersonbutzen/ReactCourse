import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

export const Menu = () => {
  return (
    <Navbar>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/services">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contacts">Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
