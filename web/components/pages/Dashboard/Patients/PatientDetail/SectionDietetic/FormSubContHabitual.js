import React from "react";
import { map } from "lodash";

import TagLang from "../../../../../modules/GetTagLang";

import FormSubFieldHabitual from "./FormSubFieldHabitual";

export default function FormSubContHabitual({ formik, arrayHelpers, father }) {
    return (
        <>
            {map(formik.values[father], (content, index) => (
                <div className="row" key={`diet_${father}_${index}`}>
                    <div className="col-12">
                        <div className="sty-dyna-title-1">{content.name}</div>
                        <FormSubFieldHabitual
                            formik={formik}
                            arrayHelpers={arrayHelpers}
                            father={father}
                            content={content}
                            index={index}
                        />
                    </div>
                </div>
            ))}
        </>
    );
}
