import React, {Component, Fragment} from 'react';
import TopNavigation from "../../component/topNavigation/topNavigation";
import PageTop from "../../component/pageTop/pageTop";
import About from "../../component/about/about";
import Footer from "../../component/footer/footer";
import Copyright from "../../component/copyright/copyright";
import ServicesPage from "../../component/servicesPage/servicesPage";

class ServiceSpa extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="My Services"/>
                <ServicesPage/>
                <Footer/>
                <Copyright/>

            </Fragment>
        );
    }
}

export default ServiceSpa;