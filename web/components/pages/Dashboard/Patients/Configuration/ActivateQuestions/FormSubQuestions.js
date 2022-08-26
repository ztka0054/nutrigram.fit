import React, { useState, useEffect } from "react";
import { map } from "lodash";

import FormArrayQuestion from "./FormArrayQuestion";

export default function SubFormQuestions({ formik, arrayHelpers, father }) {
    return (
        <div className="col-12">
            <div className="row">
                {map(formik.values[father], (content, index) => (
                    <div key={`active_questions_${index}`} className="col-6">
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
        </div>
    );
}
