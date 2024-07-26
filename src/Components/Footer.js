import React, { Component} from "react";
import { Container, Row, Col} from 'react-bootstrap';
import { SlSocialVkontakte, SlSocialYoutube, SlSocialInstagram } from "react-icons/sl";
import './css/Footer.css';


export default class Footer extends Component {
    render() {
    return (
        <footer className="footer">
            <Container className="footer__inner">
                <Row className="py-0">
                    <Col className="text-center text-md-left mb-3 mb-md-0">
                        <h5>О нас</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="footer__copyright">&copy; 2021 - {new Date().getFullYear()} «Улицы России»</div>
                    </Col>
                </Row>
                <Row className="footer__holder">
                    <Col md={3}>   
                        <div className="footer__logotype"></div>
                    </Col>
                    <Col md={3}>
                        <div className="footer__p">Общероссийская общественная организация уличной культуры и спорта "Улицы России"</div>
                        <div className="footer__p">ОГРН: 1217700519101</div>
                        <div className="footer__p">ИНН: 2636219592</div>
                        <a href="mailto:info@streetrussia.ru" className="footer__p">info@streetrussia.ru</a>
                    </Col>
                    <Col md={3} className="text-center text-md-left">
                        <h5>Присоединяйся</h5>
                        <div>
                            <a href="https://vk.com/streetrf" className="text-white mr-3 footer__a"><SlSocialVkontakte /></a>
                            <a href="https://www.youtube.com/channel/UCse4y0X9dK0utXKtjwlZ1dg" className="text-white mr-3 footer__a"><SlSocialYoutube /></a>
                            <a href="https://www.instagram.com" className="text-white mr-3 footer__a"><SlSocialInstagram /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
};
