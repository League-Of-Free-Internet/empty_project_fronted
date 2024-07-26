import React, { Component} from "react";
import { Container, Navbar, Nav, FormControl, Form, Button} from "react-bootstrap";
import logo from "../Img/svg/logo.svg"

export default class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo}
                        className="d-inline-block align-top" 
                        alt="Лого Улицы России." />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#disciplines">Дисциплины</Nav.Link>
                            <Nav.Link href="#events">События</Nav.Link>
                            <Nav.Link href="#contacts">Контакты</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl type="text" placeholder="Поиск" className="me-sm-2"/>
                            <Button variant="outline-secondary">Искать</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
