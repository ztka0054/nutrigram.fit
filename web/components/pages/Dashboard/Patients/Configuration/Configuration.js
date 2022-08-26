import React from "react";

import TagLang from "../../../../modules/GetTagLang";

import QuestionsClinicalHistory from "./QuestionsClinicalHistory";
import MedicalRecordFields from "./ActiveMedicalRecordFields";
import PersonalizedQuestions from "./PersonalizedQuestions";
import ActiveQuestion from "./ActivateQuestions";
import ActiveAnthropometries from "./ActiveAnthropometries";
import ActiveFolds from "./ActiveFolds";
import ActiveCircumference from "./ActiveCircumference";
import ActiveFieldsConsulation from "./ActiveFieldsConsulation";

export default function Configuration() {
    return (
        <div className="sty-content-data-1">
            <div className="sty-card-title">
                <TagLang group={"dashboard"} tag={"tit_pacient_2_4"} />
            </div>
            <QuestionsClinicalHistory />
            <MedicalRecordFields />
            <div className="sty-card-title margin-1">
                <TagLang group={"dashboard"} tag={"tit_pacient_2_5"} />
            </div>
            <PersonalizedQuestions />
            <ActiveQuestion />
            <ActiveAnthropometries />
            <ActiveFolds />
            <ActiveCircumference />
            <ActiveFieldsConsulation />
        </div>
    );
}
