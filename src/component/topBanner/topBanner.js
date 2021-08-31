import React, {Component, Fragment} from 'react';
import '../../asset/css/custom.css';
import {Col, Container, Row, Button} from "react-bootstrap";


class TopBanner extends Component {

    componentDidMount() {
    }


    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle">Software Engineer</h1>
                                    <h4 className="topSubTitle">Suhried Datta</h4>
                                    <Button variant="outline-primary">Know more</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;