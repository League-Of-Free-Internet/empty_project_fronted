import React, { Component} from "react";
import { Container, Navbar, Nav} from "react-bootstrap";
import logo from "../Img/svg/logo.svg"

export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Лого Улицы России." />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#disciplines">Дисциплины</Nav.Link>
                            <Nav.Link href="#events">События</Nav.Link>
                            <Nav.Link href="#contacts">Контакты</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
