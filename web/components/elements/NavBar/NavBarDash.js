import React from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import SetLink from "../../modules/SetLink";

import SelectLang from "./SelectLang";
import SesionElements from "./SessionElements";

const logo = "/static/img/favicons/app/logo.png";

export default function NavBarDash() {
    return (
        <Navbar
            id="navBarFirst"
            color="light"
            light
            expand="md"
            className="sty-cont-all-nav-dash"
            // onMouseOver={this.handleHover}
            // onMouseOut={this.handleOut}
        >
            <div className="sty-cont-icon">
                <SetLink route={"/"}>
                    <img src={logo} alt="logo nitrigram" />
                </SetLink>
            </div>

            <NavbarToggler
                // onClick={this.toggle}
                className="sty-toogle-menu"
            >
                <FontAwesomeIcon icon={faBars} />
            </NavbarToggler>
            <Collapse
                // isOpen={this.state.isOpen}
                navbar
            >
                <Nav
                    className="ml-auto sty-right-links sty-justify-content"
                    navbar
                >
                    <SelectLang />
                    <SesionElements />
                </Nav>
            </Collapse>
        </Navbar>
    );
}
