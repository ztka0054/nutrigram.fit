import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

import TagLang from "../../modules/GetTagLang";
import SetLink from "../../modules/SetLink";

const logo = "/static/img/favicons/app/logo.png";

import SelectLang from "./SelectLang";
import SesionElements from "./SessionElements";

export default function NavBarNoDash() {
    const [toogle, setToogle] = useState(false);

    const handleColapse = () => {
        setToogle(!toogle);
    };

    return (
        <Navbar
            id="navBarFirst"
            color="light"
            light
            expand="md"
            className="sty-cont-all-nav"
        >
            <div className="sty-cont-icon">
                <Link href={`/`}>
                    <a className="">
                        <img src={logo} alt="logo nitrigram" />
                    </a>
                </Link>
            </div>

            <NavbarToggler
                onClick={() => handleColapse()}
                className="sty-toogle-menu"
            >
                <FontAwesomeIcon icon={faBars} />
            </NavbarToggler>
            <Collapse isOpen={toogle} navbar>
                <Nav className="sty-center-links" navbar>
                    <NavItem>
                        <SetLink route="/about_us" classLink={"nav-link"}>
                            <TagLang group={"navbar"} tag={"tag_aboutus"} />
                        </SetLink>
                    </NavItem>
                    <NavItem>
                        <SetLink route="/app" classLink={"nav-link"}>
                            <TagLang group={"navbar"} tag={"tag_app"} />
                        </SetLink>
                    </NavItem>
                    <NavItem>
                        <SetLink route="/blog" classLink={"nav-link"}>
                            <TagLang group={"navbar"} tag={"tag_blog"} />
                        </SetLink>
                    </NavItem>
                </Nav>
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
