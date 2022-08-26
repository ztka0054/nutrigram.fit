import React, { useState, useEffect } from "react";
import { map } from "lodash";

import FormArrayQuestion from "./FormArrayQuestion";

export default function SubFormQuestions({ formik, arrayHelpers, father }) {
    return (
        <div className="col-12">
            {map(formik.values[father], (content, index) => (
                <div key={`clinic_questions_${index}`}>
                    <FormArrayQuestion
                        formik={formik}
                        arrayHelpers={arrayHelpers}
                        father={father}
                        content={content}
                        index={index}
                    />
                </div>
            ))}
        </div>
    );
}
