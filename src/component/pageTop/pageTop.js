import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedServices p-0">
                    <div className="topServicesOverlay">
                        <Container className="topServicesContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topServiceTitle">{this.props.pageTitle}</h1>

                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

            </Fragment>
        );
    }
}

export default PageTop;