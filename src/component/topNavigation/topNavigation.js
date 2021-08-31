import React, {Component, Fragment} from 'react';
import '../../asset/css/custom.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {
    constructor(){
        super();
        this.state={
            navBarTitle:"navTitle",
            nav:"nav",
            navItem:"navItems"
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBarTitle:'navTitleScroll', nav:"navScroll", navItem:"navItemsScroll" })
        }
        else if(window.scrollY<100){
            this.setState({navBarTitle:'navTitle', nav:"nav", navItem:"navItems"})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }
    render() {
        return (
            <Fragment>
                <Navbar className={this.state.nav} fixed="top" fi collapseOnSelect expand="xl" variant="dark" >
                    <Container>
                        <Navbar.Brand className={this.state.navBarTitle}>Suhried Datta</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="text-right">
                             <Nav.Link>  <NavLink exact activeStyle={{color:'aquamarine'}} className={this.state.navItem} to="/">Home</NavLink> </Nav.Link>
                                <Nav.Link>   <NavLink exact activeStyle={{color:'aquamarine'}} className={this.state.navItem} to="/service">Services</NavLink> </Nav.Link>
                                <Nav.Link>   <NavLink exact activeStyle={{color:'aquamarine'}} className={this.state.navItem} to="portfolio">Portfolio</NavLink> </Nav.Link>
                                <Nav.Link>   <NavLink exact activeStyle={{color:'aquamarine'}} className={this.state.navItem} to="about">About</NavLink> </Nav.Link>
                                <Nav.Link>   <NavLink exact activeStyle={{color:'aquamarine'}} className={this.state.navItem} to="contact">Contact</NavLink> </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </Fragment>
        );
    }
}

export default TopNavigation;