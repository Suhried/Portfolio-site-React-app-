import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faMobile, faEnvelope, faAngleDoubleUp} from "@fortawesome/free-solid-svg-icons";
import BackToTop from "react-back-to-top-button";
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="footerBack"></div>
                <Container className="footer">
                    <Row>
                        <Col lg={3} md={6} sm={6}>
                            <h3>Follow me</h3>
                            <a href=""><FontAwesomeIcon className="colorCheck" icon={faFacebook}/> Facebook</a><br/>
                            <a href=""><FontAwesomeIcon className="colorCheck" icon={faYoutube}/> Youtube</a>

                        </Col>

                        <Col lg={3} md={6} sm={6}>
                            <h3>Address</h3>
                            <p>R.K. mission road, Gopibagh</p>
                            <p><FontAwesomeIcon className="colorCheck" icon={faEnvelope}/> shantorad@gmail.com</p>
                            <p><FontAwesomeIcon className="colorCheck" icon={faMobile}/> 016********</p>
                        </Col>

                        <Col lg={3} md={6} sm={6}>
                            <h3>Information</h3>
                            <Link to="/about">About me</Link><br/>
                            <a href="">Portfolio</a><br/>
                            <a href="">Contact me</a>
                        </Col>

                        <Col lg={3} md={6} sm={6}>
                            <h3>Legal</h3>
                            <a href="">Terms & Condition</a><br/>
                            <a href="">Privacy Policy</a>
                        </Col>
                    </Row>
                </Container>
                <BackToTop
                    showOnScrollUp
                    showAt={100}
                    speed={1500}
                    easing="easeInOutQuint"
                >
                    <span><FontAwesomeIcon className="colorCheck" icon={faAngleDoubleUp}/></span>
                </BackToTop>

            </Fragment>
        );
    }
}
export default Footer;