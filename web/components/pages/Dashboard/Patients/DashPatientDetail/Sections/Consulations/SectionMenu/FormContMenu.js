import React from "react";
import { map } from "lodash";

import InputTimeForm from "../../../../../../../components/Inputs/InputTypeForm_1/InputTimeForm_1";
import InputTimeForm_min from "../../../../../../../components/Inputs/InputTypeForm_1/InputTimeForm_1_min";
import InputTimeForm_max from "../../../../../../../components/Inputs/InputTypeForm_1/InputTimeForm_1_max";

export default function FormContMenu({ formik, arrayHelpers, father }) {
    return (
        <>
            {map(formik.values[father], (content, index) => (
                <div className="row">
                    <div className="col-4">
                        <div className="sty-dyna-title-1">{content.name}</div>
                    </div>
                    {/* <div className="col-12"> */}
                    {/* <div className="row"> */}
                    <div className="col-4">
                        <InputTimeForm_max
                            formik={formik}
                            title={"start"}
                            name={`${father}[${index}].fromTime`}
                            value={formik.values[father][index].fromTime}
                            maxHour={formik.values[father][index].toTime}
                        />
                    </div>
                    <div className="col-4">
                        <InputTimeForm_min
                            formik={formik}
                            title={"end"}
                            name={`${father}[${index}].toTime`}
                            value={formik.values[father][index].toTime}
                            error={formik.errors[father]?.[index]?.toTime}
                            minHour={formik.values[father][index].fromTime}
                        />

                        {/* </div> */}
                        {/* </div> */}
                    </div>
                </div>
            ))}
        </>
    );
}
