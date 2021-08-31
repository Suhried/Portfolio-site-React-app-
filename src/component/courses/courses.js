import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="serviceName text-center p-2">Offered Courses</h1>
                <Container className="courseBack">
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="imgCourse" src={"https://image.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg"}/>

                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h4>Web Application</h4>
                                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <Button variant="primary">Know more</Button>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="imgCourse" src={"https://image.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg"}/>

                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h4>Web Application</h4>
                                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <Button variant="primary">Know more</Button>

                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="imgCourse" src={"https://image.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg"}/>

                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="txtCourse">Web Application</h4>
                                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <Button variant="primary">Know more</Button>

                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="imgCourse" src={"https://image.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg"}/>

                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="txtCourse">Web Application</h4>
                                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <Button variant="primary">Know more</Button>

                                </Col>
                            </Row>
                        </Col>

                    </Row>


                </Container>

            </Fragment>
        );
    }
}
export default Courses;