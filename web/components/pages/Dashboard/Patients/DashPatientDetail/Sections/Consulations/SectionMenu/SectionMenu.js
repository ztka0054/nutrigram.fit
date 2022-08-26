import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { Collapse, CardBody, Card } from "reactstrap";

import TagLang from "../../../../../../../modules/GetTagLang";
import request from "../../../../../../../../helper/core_services/core/requestService";
import apiMenu from "../../../../../../../../helper/core_services/endpoints/menu";
import Table from "./Table";
import Form from "./FormMenuPatient";
import ShowMenu from "./ShowMenu";

export default function SectionMenun({
    dataMenu,
    setDataMenu,
    ClickShowConsult,
    dataMenuPatient,
}) {
    const router = useRouter();

    const [statusElement, setStatusElement] = useState(0);
    const [menuSelect, setMenuSelect] = useState(null);
    const [idMenu, setIdMenu] = useState(null);

    useEffect(() => {
        if (dataMenu != null) {
            setStatusElement(2);
            setIdMenu(dataMenu.menu);
        }
    }, [dataMenu]);

    const ClickAsignMenu = () => {
        setStatusElement(1);
    };

    const SelectMenu = async (row) => {
        let resultMenu = await request(apiMenu.get_menu, null, [row.id], {
            locale: router.locale,
        });
        if (resultMenu != null) {
            setMenuSelect(resultMenu);
            setIdMenu(resultMenu.id);
        }
        setStatusElement(2);
    };

    const ClickShowMenu = () => {
        setStatusElement(3);
    };

    const ClickShowForm = () => {
        setStatusElement(2);
    };

    return (
        <>
            <div className="sty-content-data-1">
                <div className="row margin-top-2">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-6">
                                {statusElement == 0 && (
                                    <button
                                        className="sty-button-dash-1"
                                        type="button"
                                        onClick={() => ClickAsignMenu()}>
                                        <div className="sty-tag">
                                            <TagLang
                                                group={"button"}
                                                tag={"assign_menu"}
                                            />
                                        </div>
                                    </button>
                                )}
                                {statusElement == 2 && (
                                    <button
                                        className="sty-button-dash-1"
                                        type="button"
                                        onClick={() => ClickAsignMenu()}>
                                        <div className="sty-tag">
                                            <TagLang
                                                group={"button"}
                                                tag={"change_menu"}
                                            />
                                        </div>
                                    </button>
                                )}
                            </div>
                            <div className="col-6 text-right">
                                {statusElement == 2 && (
                                    <button
                                        className="sty-button-dash-1"
                                        type="button"
                                        onClick={() => ClickShowMenu()}>
                                        <div className="sty-tag">
                                            <TagLang
                                                group={"button"}
                                                tag={"see_menu"}
                                            />
                                        </div>
                                    </button>
                                )}
                                {statusElement == 3 && (
                                    <button
                                        className="sty-button-dash-1"
                                        type="button"
                                        onClick={() => ClickShowForm()}>
                                        <div className="sty-tag">
                                            <TagLang
                                                group={"button"}
                                                tag={"back"}
                                            />
                                        </div>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 margin-top-2">
                        {statusElement == 0 && (
                            <div className="sty-empty-mesage-1 text-center">
                                <TagLang
                                    group={"validation"}
                                    tag={"without_assigned_menu"}
                                />
                            </div>
                        )}
                        {statusElement == 1 && (
                            <Table
                                // values={{ selectMeals }}
                                SelectMenu={SelectMenu}
                            />
                        )}
                        {statusElement == 2 && (
                            <Form
                                dataMenu={dataMenu}
                                ClickShowConsult={ClickShowConsult}
                                setDataMenu={setDataMenu}
                                menuSelect={menuSelect}
                                dataMenuPatient={dataMenuPatient}
                            />
                        )}
                        {statusElement == 3 && <ShowMenu idMenu={idMenu} />}
                    </div>
                </div>
            </div>
        </>
    );
}
