import React from "react";
import { map } from "lodash";

import SubMealColapse from "./SubMealCont";

export default function SubContentFields({ formik, arrayHelpers, father }) {
    return (
        <>
            {map(formik.values[father], (content, index) => (
                <div className="col-12 sty-cont-form-1" key={`meal_${index}`}>
                    <div className="sty-dyna-title-1">{content.name}</div>
                    <SubMealColapse
                        formik={formik}
                        arrayHelpers={arrayHelpers}
                        index={index}
                        content={content}
                        father={father}
                    />
                </div>
            ))}
        </>
    );
}
