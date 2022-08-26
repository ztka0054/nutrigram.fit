import React, { useState, useEffect } from "react";
import { Collapse } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { size } from "lodash";

import useApp from "../../../../../../hooks/useApp";
import TagLang from "../../../../../modules/GetTagLang";

import request from "../../../../../../helper/core_services/core/requestService";
import medical from "../../../../../../helper/core_services/endpoints/medical_records";

import Form from "./FormQuestionnarie";

export default function index({
    idPatient,
    setFormQuestions,
    setFlagSendQuestions,
}) {
    const { locale } = useApp();
    const [questionsInfo, setQuestionsInfo] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const toogle = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        GetDietHabitual();
    }, []);

    const GetDietHabitual = async () => {
        let req = await request(
            medical.get_medical_records,
            { category: 1 },
            null,
            {
                locale,
            }
        );
        if (req != null) {
            setQuestionsInfo(req.result);
            if (size(req.result) == 0) setFlagSendQuestions(true);
        }
    };

    return (
        <>
            {size(questionsInfo) > 0 && (
                <>
                    <div
                        className="sty-header-collapse-1"
                        onClick={() => toogle()}>
                        <div className="tag">
                            <TagLang
                                group={"dashboard"}
                                tag={"tit_pacient_1_tag_4"}
                            />
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faSortDown} />
                        </div>
                    </div>
                    <Collapse isOpen={isOpen}>
                        <div className="sty-collapse-1">
                            <Form
                                idPatient={idPatient}
                                questionsInfo={questionsInfo}
                                setFormQuestions={setFormQuestions}
                                setFlagSendQuestions={setFlagSendQuestions}
                            />
                        </div>
                    </Collapse>
                </>
            )}
        </>
    );
}
