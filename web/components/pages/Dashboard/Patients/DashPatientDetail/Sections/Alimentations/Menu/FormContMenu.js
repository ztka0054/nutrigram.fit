import React from "react";
import { map } from "lodash";

import FormField from "./FormFieldMenu";

export default function FormContMenu({ formik, arrayHelpers, father }) {
    return (
        <>
            {map(formik.values[father], (content, index) => (
                <FormField
                    key={`menu_fields_${index}`}
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
