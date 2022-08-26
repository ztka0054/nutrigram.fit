import React, { useState, useEffect } from "react";
import moment from "moment";

import useApp from "../../../../../../hooks/useApp";
import TagLang from "../../../../../modules/GetTagLang";
import Table from "../Table/Table";

import FormAppoinment from "../Forms/FormAppoinment";
import CollapseUsers from "./CollapseUsers";

export default function CollapseContent({ selectDate, putChangeQuotes }) {
    const { locale } = useApp();
    const [tagDate, setTagDate] = useState(null);
    const [stateCollapse, setStateCollapse] = useState(1);
    const [selectUser, setSelectUser] = useState(null);
    const [selectAppoin, setSelectAppoin] = useState(null);

    useEffect(() => {
        if (selectDate) {
            setTagDate(
                moment(selectDate).locale(locale).format("dddd, DD MMMM, YYYY")
            );
            ShowQuotes();
        }
    }, [selectDate]);

    const ShowQuotes = () => {
        setStateCollapse(1);
        setSelectAppoin(null);
        setSelectUser(null);
    };

    const ShowEdit = (row) => {
        setStateCollapse(2);
        setSelectAppoin(row);
    };

    const ShowForm = () => {
        setStateCollapse(2);
    };

    const ShowUsers = () => {
        setStateCollapse(3);
    };

    const SetUser = (user) => {
        setSelectUser(user);
        setStateCollapse(2);
    };

    return (
        <>
            {/* <div>{elementsChanges}</div> */}
            {stateCollapse == 1 && (
                <div className="row sty-cont-option-1">
                    <div className="col-6">
                        <button
                            className="sty-button-dash-1"
                            onClick={() => ShowForm()}
                            // onClick={this.handleNewAppointment}
                        >
                            <div className="sty-icon">
                                <img src="/static/img/favicons/app/add_w.svg" />
                            </div>
                            <div className="sty-tag">
                                <TagLang
                                    group={"button"}
                                    tag={"tag_d_new_quote"}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            )}
            <div className="sty-content-data-1">
                {stateCollapse == 1 && (
                    <Table
                        titleTable={tagDate}
                        selectDate={selectDate}
                        ShowEdit={ShowEdit}
                        putChangeQuotes={putChangeQuotes}
                    />
                    // <TableQuotes
                    //     idDayElement={idDayElement}
                    //     dayElementData={dayElementData}
                    //     handleCreateAppointment={handleCreateAppointment}
                    //     handleEditAppointment={this.handleEditAppointment}
                    //     handleSelectPatient={this.handleSelectPatient}
                    //     handleGetDataAppointment={this.handleGetDataAppointment}
                    //     flagDrawTable={flagDrawTable}
                    // />
                )}
                {stateCollapse == 2 && (
                    <>
                        <div className="sty-card-title">{tagDate}</div>
                        <FormAppoinment
                            putChangeQuotes={putChangeQuotes}
                            selectAppoin={selectAppoin}
                            ShowQuotes={ShowQuotes}
                            selectDate={selectDate}
                            ShowUsers={ShowUsers}
                            selectUser={selectUser}
                        />
                    </>
                )}
                {stateCollapse == 3 && <CollapseUsers SetUser={SetUser} />}
            </div>
        </>
    );
}
