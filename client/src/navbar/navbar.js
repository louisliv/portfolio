import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    Nav,
    NavbarToggler,
    NavLink,
    NavbarBrand,
    NavItem,
    Button
} from 'reactstrap';

import { UISref } from '@uirouter/react'

class TopNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };

        this.toggleNavbar = this.toggleNavbar.bind(this)
    }

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <Navbar color="dark" dark className="fixed" expand="md">
                <UISref to="home">
                    <NavbarBrand className="text-green">
                        Louis Livingston
                    </NavbarBrand>
                </UISref>
                <NavbarToggler onClick={this.toggleNavbar}/>
                <Collapse isOpen={this.collapsed} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <UISref to="about">
                                <NavLink href="/components/">About</NavLink>
                            </UISref>
                        </NavItem>
                        <NavItem>
                            <NavLink target="_blank" href="https://github.com/louisliv">GitHub</NavLink>
                        </NavItem>
                        <NavItem>
                            <UISref to="terminal"><Button>Terminal</Button></UISref>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}


export default TopNavbar;