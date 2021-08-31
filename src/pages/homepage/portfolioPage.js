import React, {Component, Fragment} from 'react';
import TopNavigation from "../../component/topNavigation/topNavigation";

import Footer from "../../component/footer/footer";
import Copyright from "../../component/copyright/copyright";
import PageTop from "../../component/pageTop/pageTop";
import Portfolio from "../../component/portfolio/portfolio";

class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="My Portfolio"/>
                <Portfolio/>
                <Footer/>
                <Copyright/>

            </Fragment>
        );
    }
}

export default PortfolioPage;