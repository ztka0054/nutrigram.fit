import React from "react";

import Header from "../../components/elements/Header";
import NavBar from "../../components/elements/NavBar";
import Footer from "../../components/elements/Footer";

export default function BasicLayout(props) {
    const { header } = props;
    const { children, typeNav } = props;

    return (
        <>
            <Header header={header} />
            <NavBar type={typeNav} />
            <div className="sty-u-load" id="id-load-element">
                <img src="/static/img/favicons/app/load.svg" />
            </div>
            <div className="body">{children}</div>
            <Footer />
        </>
    );
}
