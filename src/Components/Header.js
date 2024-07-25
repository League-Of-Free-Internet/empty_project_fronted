import React, { Component, useState } from "react";
import { Container, Navbar, Nav, NavDropdown} from "react-bootstrap";
import { FiAlignCenter } from "react-icons/fi";
import logo from "../Img/svg/logo.svg"

const Menu = () => {
    const [showAdditionalItems, setShowAdditionalItems] = useState(false);
  
    const toggleAdditionalItems = () => {
      setShowAdditionalItems(!showAdditionalItems);
    };
        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="Лого Улицы России." />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#disciplines">Дисциплины</Nav.Link>
                            <Nav.Link href="#events">События</Nav.Link>
                            <Nav.Link href="#contacts">Контакты</Nav.Link>
                            <NavDropdown title={<FiAlignCenter />} id="basic-nav-dropdown" size="lg">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }


export default Menu;