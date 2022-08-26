import React from "react";
import { map } from "lodash";

import FormFieldHydratation from "./FormFieldHydratation";

export default function FormContHydratation({ formik, arrayHelpers, father }) {
    return (
        <>
            {map(formik.values[father], (content, index) => (
                <FormFieldHydratation
                    key={`hydratation_fields_${index}`}
                    formik={formik}
                    arrayHelpers={arrayHelpers}
                    father={father}
                    content={content}
                    index={index}
                />
            ))}
        </>
    );
}
