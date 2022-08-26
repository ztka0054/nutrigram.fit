import React from "react";
import { map } from "lodash";

import MessageValidation from "../../../../../modules/Forms/MessageValidation";

export default function FormSubContQuestions({ formik, arrayHelpers, father }) {
    return (
        <>
            {map(formik.values.questions, (content, index) => {
                return (
                    <div className="col-6" key={`question_${father}_${index}`}>
                        <div className="sty-cont-input-2">
                            <div className="sty-tag">{content.question}</div>
                            <div className="sty-input">
                                <textarea
                                    name={`${father}[${index}].answer`}
                                    value={formik.values[father][index].answer}
                                    onChange={formik.handleChange}
                                    rows={3}
                                />
                                <MessageValidation
                                    error={
                                        formik.errors?.[father]?.[index].answer
                                    }
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
