import React from "react";
import { Nav, Navbar,  } from "react-bootstrap";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Styles = styled.div'
    .navbar {
        background-color:#222;
    }
    .navbar-NavbarBrand, .navbar-nav .nav-link {
        color: #bbb;

        &:hoover {
            color: withRouter;
        }
    }
    ';

export const NavigationBar = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/logo.svg">PrimeIT</Navbar.Brand>
        </Navbar>
    )
}