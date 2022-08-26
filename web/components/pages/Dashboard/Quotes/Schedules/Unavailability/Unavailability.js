import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { map, size } from "lodash";
import moment from "moment";

import IconPlus from "../../../../../components/Icons/Plus";
import IconClose from "../../../../../components/Icons/Close";
import IconEdit from "../../../../../components/Icons/Edit";
import TagLang from "../../../../../modules/GetTagLang";

import request from "../../../../../../helper/core_services/core/requestService";
import ApiAppoinments from "../../../../../../helper/core_services/endpoints/appointments";

import Modal from "./ModalNew";
import ModalDelete from "./ModalDelete";

import style from "../Schedule.module.scss";

export default function Unavailability() {
    const router = useRouter();

    const [activeNew, setActiveNew] = useState(false);
    const [activeDelete, setActiveDelete] = useState(false);
    const [unavalivilities, setUnavalivilities] = useState([]);
    const [unavalivilityObject, setUnavalivilityObject] = useState(null);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        if (!router.isReady) return;
        let ignore = false;

        async function requestAvailavility() {
            let result = await request(
                ApiAppoinments.get_unavailabilities,
                null,
                null,
                { local: router.locale }
            );
            if (result) {
                setUnavalivilities(result.result);
            }
        }
        if (refresh) {
            requestAvailavility();
            setRefresh(false);
        }

        return () => {
            ignore = true;
        };
    }, [router, refresh]);

    useEffect(() => {
        if (activeNew) setActiveNew(false);
    }, [activeNew]);

    useEffect(() => {
        if (activeDelete) setActiveDelete(false);
    }, [activeDelete]);

    const ClickNewElement = () => {
        setUnavalivilityObject(null);
        setActiveNew(true);
    };

    const ClickEditElement = (unavalivility) => {
        setUnavalivilityObject(unavalivility);
        setActiveNew(true);
    };

    const DeleteElement = (unavalivility) => {
        setActiveDelete(true);
        setUnavalivilityObject(unavalivility);
    };

    return (
        <>
            <Modal
                active={activeNew}
                setRefresh={setRefresh}
                unavalivilityObject={unavalivilityObject}
            />
            <ModalDelete
                active={activeDelete}
                unavalivilityObject={unavalivilityObject}
                setRefresh={setRefresh}
            />
            <div className={style.header}>
                <div className={style.titleSection}>
                    <TagLang group={"input"} tag={"title_config_2_quotes"} />
                </div>
                <div
                    className={style.buttonAdd}
                    onClick={() => ClickNewElement()}>
                    <IconPlus />
                </div>
            </div>
            <div className={style.line} />
            <div className={style.contElements}>
                {size(unavalivilities) == 0 && (
                    <div className={style.empty}>
                        <TagLang group="input" tag={"empty_quotes"} />
                    </div>
                )}
                {size(unavalivilities) > 0 && (
                    <table className={style.tableElements}>
                        <thead>
                            <tr>
                                <th>
                                    <TagLang
                                        group="input"
                                        tag={"from_quotes"}
                                    />
                                </th>
                                <th>
                                    <TagLang group="input" tag={"to_quotes"} />
                                </th>
                                <th>
                                    <TagLang group="input" tag={"options"} />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {map(unavalivilities, (unavalivility) => {
                                return (
                                    <tr key={unavalivility?.id}>
                                        <td>
                                            {moment(unavalivility?.fromDate)
                                                .locale(router?.locale)
                                                .format("dddd, MMMM DD")}
                                        </td>
                                        <td>
                                            {moment(unavalivility?.toDate)
                                                .locale(router?.locale)
                                                .format("dddd, MMMM DD")}
                                        </td>
                                        <td className={style.contButtons}>
                                            <button
                                                className={style.buttonDelete}
                                                onClick={() =>
                                                    DeleteElement(unavalivility)
                                                }>
                                                <IconClose />
                                            </button>
                                            <button
                                                className={style.buttonEdit}
                                                onClick={() =>
                                                    ClickEditElement(
                                                        unavalivility
                                                    )
                                                }>
                                                <IconEdit />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}
