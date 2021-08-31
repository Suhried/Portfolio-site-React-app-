import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "video-react/dist/video-react.css";
import ReactPlayer from 'react-player/youtube';

class Video extends Component {
    constructor() {
        super();
        this.state={
            show:false
        }
    }
    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <Card className="videoCard text-center">
                                <Card.Header className="videoTitle">Lear More About Me</Card.Header>
                                <Card.Body className="mt-3">
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Card.Text>
                                    <FontAwesomeIcon onClick={this.modalOpen} className="videoIcon mt-3" icon={faPlayCircle} />

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>

                </Container>

                <Modal className="player"  show={this.state.show} onHide={this.modalClose}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </Modal>

            </Fragment>
        );
    }
}
export default Video;