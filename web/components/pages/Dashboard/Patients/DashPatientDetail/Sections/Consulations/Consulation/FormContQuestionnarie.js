import React from "react";
import { map } from "lodash";

export default function FormContQuestionnarie({
    formik,
    arrayHelpers,
    father,
}) {
    return (
        <>
            {map(formik.values[father], (content, index) => {
                // <Field
                //     component={renderInput}
                //     type="number"
                //     className="sty-hide-element"
                //     name={`${element}.question`}
                // />
                return (
                    <div className="col-6" key={`questions_${index}`}>
                        <div className="sty-cont-input-2">
                            <div className="sty-tag">
                                {content.question_tag}
                            </div>
                            <div className="sty-input">
                                <textarea
                                    name={`${father}[${index}].answer`}
                                    value={formik.values[father][index].answer}
                                    onChange={formik.handleChange}
                                    rows={3}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
