import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

class Projects extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="serviceName text-center p-3">Projects</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectsCard text-center">
                                <Card.Img variant="top" src="https://image.flaticon.com/icons/png/512/1234/1234402.png" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Know more</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectsCard text-center">
                                <Card.Img variant="top" src="https://image.flaticon.com/icons/png/512/1234/1234402.png" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Know more</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card className="projectsCard text-center">
                                <Card.Img variant="top" src="https://image.flaticon.com/icons/png/512/1234/1234402.png" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Know more</Button>
                                </Card.Body>
                            </Card>

                        </Col>

                    </Row>


                </Container>

            </Fragment>
        );
    }
}
export default Projects;