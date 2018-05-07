import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {



    return (
             <Container className='container-footer'>
                 <Row>
                    <Col md='1'></Col>
                    <Col md='10'  className='header-app footer'>
                        <p>Design by <a target='_blank' href='https://www.mariacode.com/'>www.mariacode.com</a> </p>
                    </Col>
                    <Col md='1'></Col>
                 </Row>
            </Container>
    )
}

export default Footer;