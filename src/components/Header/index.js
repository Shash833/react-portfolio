import React from "react";
import { Jumbotron, Navbar, Nav } from 'react-bootstrap'
import "./style.css";

function Header() {
    return <header><Jumbotron>
        <h1>Shashini Mayadunne</h1>
        <Navbar variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href="/">About Me</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    </Jumbotron></header>
}

export default Header;
