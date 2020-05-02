import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
}


render() { 
    return (
        <div>
        <Navbar color="dark" dark expand="sm" fixed="top">
            <Container fluid>
                <NavbarBrand href="/" style={{marginLeft: "auto"}}>Lost Creatures</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/About">
                                About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Contact">
                                Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Top_Endangered">
                                Top Endangered</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Info">
                                More Info</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
        </div>   
    );
}

}



export default AppNavbar;