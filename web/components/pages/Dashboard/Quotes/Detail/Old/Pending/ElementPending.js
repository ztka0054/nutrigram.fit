import React, { useState, useEffect } from "react";
import { Collapse, CardBody, Card } from "reactstrap";

import GeLanguage from "../../../../../../helper/i18n/getValueTagLang";

import Form from "../Forms/FormChange";

export default function ElementPending({ element, putChangeQuotes }) {
    const [isOpen, setIsOpen] = useState(false);

    const Toogle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="col-12 sty-content-pending">
            <div className="sty-title" onClick={() => Toogle()}>
                <div className="row">
                    <div className="col-6">
                        {GeLanguage("dashboard", "tit_quote_1_2")}
                    </div>
                    <div className="col-6 text-right">
                        <div className="text">
                            {element?.patient?.firstName}{" "}
                            {element?.patient?.lastName}
                        </div>
                        <div className="icon">
                            <img src="/static/img/favicons/app/down_w.svg" />
                        </div>
                    </div>
                </div>
            </div>
            <Collapse isOpen={isOpen} className="sty-data-content">
                <Card>
                    <CardBody>
                        <Form
                            element={element}
                            putChangeQuotes={putChangeQuotes}
                        />
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
}
