import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class About extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col className="m-5">
                            <h1>Contents of about page</h1>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default About;