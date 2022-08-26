import React, { useState, useEffect } from "react";
import { TabContent, TabPane, Nav, NavItem } from "reactstrap";
import classnames from "classnames";

import TagLang from "../../../../../modules/GetTagLang";

import GetLanguages from "../../../../../../helper/i18n/getValueTagLang";

import Consulations from "./Consulations";
import Alimentation from "./Alimentations";
import Biochemical from "./Biochemicals";

export default function index({ dataPatient, setRefreshPatient }) {
    const [activeTab, setActiveTab] = useState("1");
    const [clickConsulation, setClickConsulation] = useState(false);
    const [clickAlimentation, setClickAlimentation] = useState(false);
    const [clickBiochemical, setClickBiochemical] = useState(false);

    const toggle = (activeTab) => {
        setActiveTab(activeTab);
        // this.setState({ activeTab });
        // if (activeTab == "1") this.setState({ flagClickSection1: true });
    };

    const ClickOnConsultation = () => {
        setClickConsulation(!clickConsulation);
        toggle("1");
    };

    const ClickOnAlimentation = () => {
        setClickAlimentation(!clickAlimentation);
        toggle("2");
    };

    const ClickOnBiochemical = () => {
        setClickBiochemical(!clickBiochemical);
        toggle("3");
    };

    return (
        <div className="sty-content-data-1">
            <div className="col-12 sty-cont-sections-1">
                <Nav className="sty-cont-nav-1">
                    <NavItem>
                        <div
                            className={`tab ${classnames({
                                active: activeTab === "1",
                            })}`}
                            onClick={() => ClickOnConsultation()}>
                            <TagLang
                                group={"dashboard"}
                                tag={"tit_pacient_2_tag_1"}
                            />
                        </div>
                    </NavItem>
                    <NavItem>
                        <div
                            className={`tab ${classnames({
                                active: activeTab === "2",
                            })}`}
                            onClick={() => ClickOnAlimentation()}>
                            <TagLang
                                group={"dashboard"}
                                tag={"tit_pacient_2_tag_2"}
                            />
                        </div>
                    </NavItem>
                    <NavItem>
                        <div
                            className={`tab ${classnames({
                                active: activeTab === "3",
                            })}`}
                            onClick={() => ClickOnBiochemical()}>
                            <TagLang
                                group={"dashboard"}
                                tag={"tit_pacient_2_tag_3"}
                            />
                        </div>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1" className="sty-cont-data-tab">
                        <div className="col-12">
                            <Consulations
                                clickConsulation={clickConsulation}
                                dataPatient={dataPatient}
                                setRefreshPatient={setRefreshPatient}
                            />
                        </div>
                    </TabPane>
                    <TabPane tabId="2" className="sty-cont-data-tab">
                        <div className="col-12">
                            <Alimentation
                                clickAlimentation={clickAlimentation}
                            />
                        </div>
                    </TabPane>
                    <TabPane tabId="3" className="sty-cont-data-tab">
                        <div className="col-12">
                            <Biochemical clickBiochemical={clickBiochemical} />
                        </div>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    );
}
