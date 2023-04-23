import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from 'react-icons/bs';
import { BsFillEnvelopeFill } from 'react-icons/bs';

function Footer() {
    return (

<div className='page-footer' id='footer'>

    <Row>
        <Col lg={3} md={12}>
            <a href='https://github.com/Ryebread5555'><BsGithub /></a>
        </Col>

        <Col lg={3} md={12}>
            <a href='https://www.linkedin.com/in/ryan-petty-23991b199/'><BsLinkedin /></a>
        </Col>

        <Col lg={3} md={12}>
            <a href='mailto:rypetty55@gmail.com'><BsFillEnvelopeFill /></a>
        </Col>
    </Row>
</div>
    )
}

export default Footer;