import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="bannerSummary p-0">
                    <div>
                        <Container className="summaryContent">
                        <Row>
                            <Col lg={8} md={6} sm={12}>
                                <Row>
                                <Col className="topContent">

                                    <h1 className="text-white topTitle text-center">
                                        <CountUp start={0} end={100}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                    <h4 className="text-white text-center">Total projects</h4>
                                    <hr className="bg-white w-50"/>
                                </Col>

                                <Col className="topContent">
                                    <h1 className="text-white topTitle text-center">
                                        <CountUp start={0} end={80}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                    <h4 className="text-white text-center">Total clients</h4>
                                    <hr className="bg-white w-50"/>
                                </Col>
                                </Row>
                            </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card className="summaryItem">
                                        <Card.Body>
                                            <Card.Title className="text-center">How I work on projects</Card.Title>
                                            <p></p>
                                            <p><FontAwesomeIcon className="colorCheck" icon={faCheckCircle} /> Requirement gathering</p>
                                            <p><FontAwesomeIcon className="colorCheck" icon={faCheckCircle} /> System analysis</p>
                                            <p><FontAwesomeIcon className="colorCheck" icon={faCheckCircle} /> Coding testing</p>
                                            <p><FontAwesomeIcon className="colorCheck" icon={faCheckCircle} /> Implementation</p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                        </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}
export default Summary;