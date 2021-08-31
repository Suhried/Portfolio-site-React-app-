import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class Review extends Component {

    constructor() {
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ClientReview).then(result=>{
            this.setState({myData:result})

        })

    }

    render() {

        const myList=this.state.myData;
        const myView=myList.map(myList=>{
            return <div className="containerSlider">
                <Row className="text-center justify-content-center">
                    <Col lg={6} md={6} sm={12}>
                        <img className="circleImg" src={myList.client_img}/>
                        <h4>{myList.client_title}</h4>
                        <p>{myList.client_description}</p>
                    </Col>
                </Row>
            </div>
        })


        var settings = {
            autoplaySpeed:3000,
            autoplay:true,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical:true,
            verticalSwiping:true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Fragment>

                <Container className="text-center">
                    <h1 className="serviceName">Review</h1>
                    <Slider className="containerSlider" {...settings}>

                        {myView}
                    </Slider>

                </Container>
            </Fragment>
        );
    }
}

export default Review;