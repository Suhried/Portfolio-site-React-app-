import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import video1 from'../../asset/image/Contact_us.gif'
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class ContactPage extends Component {


    constructor() {
        super();
        this.state={
            name:"",
            email:"",
            msg:""
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ClientReview).then(result=>{
            this.setState({
                name:result[0]['name'],
                email:result[0]['email'],
                msg:result[0]['msg']})
        })

    }
    postContact() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let msg = document.getElementById("msg").value;

        let jsonObject = {name: name, email: email, msg:msg}

        RestClient.PostRequest(AppUrl.Contact,JSON.stringify(jsonObject)).then(result=>{
            alert(result)
        }).catch(error=>{
            alert("error")
        })

}



    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6} md={12} sm={12} className="videoSize">
                            <img src={video1}/>

                        </Col>

                        <Col lg={6} md={12} sm={12}  className="m-5">
                            <Form>

                                <Form.Group >
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control id="name" type="text" placeholder="Enter Name" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control id="email" type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Your message</Form.Label>
                                    <Form.Control id="msg" as="textarea" rows={4} />
                                </Form.Group>

                                <Button onClick={this.postContact} variant="primary" >
                                    Submit
                                </Button>
                            </Form>
                        </Col>

                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default ContactPage;