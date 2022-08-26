import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Collapse } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { map } from "lodash";

import useApp from "../../../../../../hooks/useApp";
import TagLang from "../../../../../modules/GetTagLang";

import request from "../../../../../../helper/core_services/core/requestService";
import consulation from "../../../../../../helper/core_services/endpoints/consulation";
import getTagLang from "../../../../../../helper/i18n/getValueTagLang";

export default function notes() {
    const { locale } = useApp();
    const { query } = useRouter();
    const [isOpenNote, setIsOpenNote] = useState(false);
    const [elementsNotes, setElementsNotes] = useState([]);

    useEffect(() => {
        (async () => {
            if (query?.id) GetNotes();
        })();
    }, [query, locale]);

    const GetNotes = async () => {
        let req = await request(consulation.get_notes, null, [query.id], {
            locale,
        });
        if (req != null) {
            let elementsNotes = map(req.result, (element, index) => {
                return (
                    <div className="sty-note" key={`note_${index}`}>
                        <div className="title">
                            <TagLang group={"input"} tag={"note"} />
                        </div>
                        <div className="content">{element.notes}</div>
                    </div>
                );
            });
            setElementsNotes(elementsNotes);
        }
    };

    const toggleNote = () => {
        setIsOpenNote(!isOpenNote);
    };

    return (
        <div className="sty-cont-collapse-2">
            <div className="sty-header-collapse-1" onClick={toggleNote}>
                <div className="tag">{getTagLang("button", "notes")}</div>
                <div className="icon">
                    <FontAwesomeIcon icon={faSortDown} />
                </div>
            </div>
            <Collapse className="sty-collapse-2" isOpen={isOpenNote}>
                <div className="sty-cont-notes">{elementsNotes}</div>
            </Collapse>
        </div>
    );
}
