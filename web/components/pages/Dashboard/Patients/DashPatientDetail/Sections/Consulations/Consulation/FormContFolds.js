import React from "react";
import { map } from "lodash";

import TagLang from "../../../../../../../modules/GetTagLang";

export default function FormContFolds({ formik, arrayHelpers, father }) {
    return (
        <>
            {map(formik.values[father], (content, index) => {
                return (
                    <div className="col-12 col-md-6" key={`folds_${index}`}>
                        <div className="row col-12 sty-row-trait">
                            <div className="col-6">
                                <div className="sty-cont-input-3-1">
                                    <div className="text">
                                        {content.traitName}
                                    </div>
                                </div>
                            </div>
                            {content.supportsGoal && (
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="sty-cont-input-2-1">
                                                <div className="sty-tag">
                                                    <TagLang
                                                        group={"input"}
                                                        tag={"goal"}
                                                    />
                                                </div>
                                                <div className="sty-input">
                                                    <input
                                                        name={`${father}[${index}].goal`}
                                                        value={
                                                            formik.values[
                                                                father
                                                            ][index].goal
                                                        }
                                                        onChange={
                                                            formik.handleChange
                                                        }
                                                        type="number"
                                                        step="0.01"
                                                        min="0"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="sty-cont-input-2-1">
                                                <div className="sty-tag">
                                                    <TagLang
                                                        group={"input"}
                                                        tag={"previous"}
                                                    />
                                                </div>
                                                <div className="sty-input">
                                                    <input
                                                        name={`${father}[${index}].past`}
                                                        value={
                                                            formik.values[
                                                                father
                                                            ][index].past
                                                        }
                                                        onChange={
                                                            formik.handleChange
                                                        }
                                                        disabled={true}
                                                        type="number"
                                                        step="0.01"
                                                        min="0"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="sty-cont-input-2-1">
                                                <div className="sty-tag">
                                                    <TagLang
                                                        group={"input"}
                                                        tag={"current"}
                                                    />
                                                </div>
                                                <div className="sty-input">
                                                    <input
                                                        name={`${father}[${index}].value`}
                                                        value={
                                                            formik.values[
                                                                father
                                                            ][index].value
                                                        }
                                                        onChange={
                                                            formik.handleChange
                                                        }
                                                        type="number"
                                                        step="0.01"
                                                        min="0"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {!content.supportsGoal && (
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-4" />
                                        <div className="col-4" />
                                        <div className="col-4">
                                            <div className="sty-cont-input-2-1">
                                                <div className="sty-tag">
                                                    <TagLang
                                                        group={"input"}
                                                        tag={"value"}
                                                    />
                                                </div>
                                                <div className="sty-input">
                                                    <input
                                                        name={`${father}[${index}].value`}
                                                        value={
                                                            formik.values[
                                                                father
                                                            ][index].value
                                                        }
                                                        onChange={
                                                            formik.handleChange
                                                        }
                                                        type="number"
                                                        step="0.01"
                                                        min="0"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </>
    );
}
