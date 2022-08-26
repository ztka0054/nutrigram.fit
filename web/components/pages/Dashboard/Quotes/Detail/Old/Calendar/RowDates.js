import React, { useState, useEffect, usePrevi } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import moment from "moment";
import { map } from "lodash";

import useApp from "../../../../../../hooks/useApp";

import ElementDate from "./ElementDate";
import CollapseContent from "./CollapseContent";
import PendingAppointments from "../Pending/PendingAppointments";

export default function RowDates({
    dateSelect,
    allDays,
    dataAppoinments,
    pendingAppoinments = [],
    putChangeQuotes,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectDate, setSelectDate] = useState(null);
    const [pendingChange, setPendingChange] = useState([]);

    useEffect(() => {
        if (selectDate != null) GetQuotesRow();
    }, [dataAppoinments, selectDate]);

    useEffect(() => {
        setIsOpen(false);
    }, [dateSelect]);

    const SelectDay = (active, date) => {
        if (selectDate != date) {
            setSelectDate(date);
            setIsOpen(true);
        } else {
            setSelectDate(null);
            setIsOpen(false);
        }
        // if (active) setIsOpen(!isOpen);
    };

    const GetQuotesRow = () => {
        let finder = pendingAppoinments.filter((obj) => {
            return (
                moment(obj.datetime).format("YYYY-MM-DD") ===
                moment(selectDate).format("YYYY-MM-DD")
            );
        });
        if (finder != undefined) {
            setPendingChange(finder);
        }
    };

    return (
        <>
            <div className="sty-cont-row">
                {allDays?.[0] && (
                    <ElementDate
                        element={allDays[0]}
                        SelectDay={SelectDay}
                        dataAppoinments={dataAppoinments}
                        pendingAppoinments={pendingAppoinments}
                    />
                )}
                {allDays?.[1] && (
                    <ElementDate
                        element={allDays[1]}
                        SelectDay={SelectDay}
                        dataAppoinments={dataAppoinments}
                        pendingAppoinments={pendingAppoinments}
                    />
                )}
                {allDays?.[2] && (
                    <ElementDate
                        element={allDays[2]}
                        SelectDay={SelectDay}
                        dataAppoinments={dataAppoinments}
                        pendingAppoinments={pendingAppoinments}
                    />
                )}
                {allDays?.[3] && (
                    <ElementDate
                        element={allDays[3]}
                        SelectDay={SelectDay}
                        dataAppoinments={dataAppoinments}
                        pendingAppoinments={pendingAppoinments}
                    />
                )}
                {allDays?.[4] && (
                    <ElementDate
                        element={allDays[4]}
                        SelectDay={SelectDay}
                        dataAppoinments={dataAppoinments}
                        pendingAppoinments={pendingAppoinments}
                    />
                )}
                {allDays?.[5] && (
                    <ElementDate
                        element={allDays[5]}
                        SelectDay={SelectDay}
                        dataAppoinments={dataAppoinments}
                        pendingAppoinments={pendingAppoinments}
                    />
                )}
                {allDays?.[6] && (
                    <ElementDate
                        element={allDays[6]}
                        SelectDay={SelectDay}
                        dataAppoinments={dataAppoinments}
                        pendingAppoinments={pendingAppoinments}
                    />
                )}
                {allDays?.[7] && (
                    <ElementDate
                        element={allDays[7]}
                        SelectDay={SelectDay}
                        dataAppoinments={dataAppoinments}
                        pendingAppoinments={pendingAppoinments}
                    />
                )}
            </div>
            <div className="col-12">
                <Collapse isOpen={isOpen} className="sty-data-content">
                    <Card>
                        <CardBody className="sty-cont-option">
                            <PendingAppointments
                                pendingChange={pendingChange}
                                putChangeQuotes={putChangeQuotes}
                            />
                            <CollapseContent
                                selectDate={selectDate}
                                putChangeQuotes={putChangeQuotes}
                            />
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        </>
    );
}
