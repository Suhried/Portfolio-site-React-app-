import React, {Component, Fragment} from 'react';
import TopNavigation from "../../component/topNavigation/topNavigation";
import TopBanner from "../../component/topBanner/topBanner";
import Services from "../../component/services/services";
import Technology from "../../component/technology/technology";
import Summary from "../../component/summary/summary";
import Projects from "../../component/projects/projects";
import Courses from "../../component/courses/courses";
import Video from "../../component/video/video";
import Review from "../../component/review/review";
import Footer from "../../component/footer/footer";
import Copyright from "../../component/copyright/copyright";

class Homepage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <TopBanner/>
                <Services/>
                <Technology/>
                <Summary/>
                <Projects/>
                <Courses/>
                <Video/>
                <Review/>
                <Footer/>
                <Copyright/>

            </Fragment>
        );
    }
}

export default Homepage;