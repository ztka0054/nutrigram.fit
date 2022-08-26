import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { map, size } from "lodash";

import IconPlus from "../../../../../components/Icons/Plus";
import IconClose from "../../../../../components/Icons/Close";
import IconEdit from "../../../../../components/Icons/Edit";
import TagLang from "../../../../../modules/GetTagLang";

import { days } from "../../../../../../components/catalogs/quotes";

import request from "../../../../../../helper/core_services/core/requestService";
import ApiAppoinments from "../../../../../../helper/core_services/endpoints/appointments";

import Modal from "./ModalNew";
import ModalDelete from "./ModalDelete";

import style from "../Schedule.module.scss";

export default function Availaility() {
    const router = useRouter();

    const [activeNew, setActiveNew] = useState(false);
    const [activeDelete, setActiveDelete] = useState(false);
    const [avalivilities, setAvalivilities] = useState([]);
    const [availailityObject, setAvailailityObject] = useState(null);
    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        if (!router.isReady) return;
        let ignore = false;

        async function requestAvailavility() {
            let result = await request(
                ApiAppoinments.get_availabilities,
                null,
                null,
                { local: router.locale }
            );
            if (result) {
                setAvalivilities(result.result);
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
        setActiveNew(true);
        setAvailailityObject(null);
    };

    const ClickEditElement = (availaility) => {
        setActiveNew(true);
        setAvailailityObject(availaility);
    };

    const DeleteElement = (availaility) => {
        setActiveDelete(true);
        setAvailailityObject(availaility);
    };

    return (
        <>
            <Modal
                active={activeNew}
                setRefresh={setRefresh}
                availailityObject={availailityObject}
            />
            <ModalDelete
                active={activeDelete}
                availailityObject={availailityObject}
                setRefresh={setRefresh}
            />
            <div className={style.header}>
                <div className={style.titleSection}>
                    <TagLang group={"input"} tag={"title_config_1_quotes"} />
                </div>
                <div
                    className={style.buttonAdd}
                    onClick={() => ClickNewElement()}>
                    <IconPlus />
                </div>
            </div>
            <div className={style.line} />
            <div className={style.contElements}>
                {size(avalivilities) == 0 && (
                    <div className={style.empty}>
                        <TagLang group="input" tag={"empty_quotes"} />
                    </div>
                )}
                {size(avalivilities) > 0 && (
                    <table className={style.tableElements}>
                        <thead>
                            <tr>
                                <th>
                                    <TagLang group="input" tag={"day_quotes"} />
                                </th>
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
                            {map(avalivilities, (availaility) => {
                                let findDay = days.find(
                                    (obj) => obj.id === availaility?.weekday
                                );
                                let from = availaility?.fromTime
                                    ?.split(":")
                                    .splice(0, 2)
                                    .join(":");
                                let to = availaility?.toTime
                                    ?.split(":")
                                    .splice(0, 2)
                                    .join(":");
                                return (
                                    <tr key={availaility?.id}>
                                        <td>
                                            <TagLang
                                                group="input"
                                                tag={findDay?.name}
                                            />
                                        </td>
                                        <td>{from}</td>
                                        <td>{to}</td>
                                        <td className={style.contButtons}>
                                            <button
                                                className={style.buttonDelete}
                                                onClick={() =>
                                                    DeleteElement(availaility)
                                                }>
                                                <IconClose />
                                            </button>
                                            <button
                                                className={style.buttonEdit}
                                                onClick={() =>
                                                    ClickEditElement(
                                                        availaility
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
