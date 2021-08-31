import React, {Component,Fragment} from 'react';
import {Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopyright} from "@fortawesome/free-solid-svg-icons";

class Copyright extends Component {
    render() {
        return (
            <Fragment>

                <Container className="copyright text-center p-2">

                    <p><FontAwesomeIcon icon={faCopyright}/> All right reserved by Suhried Datta</p>

                </Container>

            </Fragment>
        );
    }
}

export default Copyright;