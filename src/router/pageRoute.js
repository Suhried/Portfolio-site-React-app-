import React, {Component, Fragment} from 'react';
import {Switch, Route} from "react-router-dom";
import Homepage from "../pages/homepage/homepage";
import AboutPage from "../pages/homepage/aboutPage";
import ContactSpa from "../pages/homepage/contactSPA";
import PortfolioPage from "../pages/homepage/portfolioPage";
import ServiceSpa from "../pages/homepage/serviceSPA";

class PageRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/contact" component={ContactSpa}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/service" component={ServiceSpa}/>
                </Switch>
            </Fragment>
        );
    }
}
export default PageRoute;