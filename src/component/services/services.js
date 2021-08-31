import React, {Component, Fragment} from 'react';
import '../../asset/css/custom.css';
import {Col, Container, Row} from "react-bootstrap";
import web from'../../asset/image/web.png'

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceName">My Services</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="marginCard text-center">
                                <img className="image" src={web}/>
                                <h1>mobile development</h1>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="marginCard text-center">
                                <img className="image" src={web}/>
                                <h1>web application development</h1>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="marginCard text-center">
                            <img className="image" src={web}/>
                            <h1>mobile development</h1>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}
export default Services;