import React from "react";
import { map } from "lodash";

import GetLanguage from "../../../../../helper/i18n/getValueTagLang";

import SubContentsFields from "./SubContentsFields";

export default function SubContentFields({ formik, arrayHelpers, father }) {
    return (
        <>
            {map(formik.values[father], (content, index) => (
                <div key={index}>
                    <SubContentsFields
                        formik={formik}
                        arrayHelpers={arrayHelpers}
                        index={index}
                        content={content}
                        father={father}
                    />
                </div>
            ))}
            <div className="sty-cont-buttons-1">
                <div className="row justify-content-end">
                    <div className="col-4">
                        <button
                            className="sty-button-dash-1 fix-25"
                            type="button"
                            onClick={() =>
                                arrayHelpers.push({
                                    type: 2,
                                    text: " ",
                                })
                            }
                        >
                            <div className="sty-icon">
                                <img src="/static/img/favicons/app/add_w.svg" />
                            </div>
                            <div className="sty-tag">
                                {GetLanguage("button", "tag_d_add_text")}
                            </div>
                        </button>
                    </div>
                    <div className="col-4">
                        <button
                            className="sty-button-dash-1 fix-25"
                            type="button"
                            onClick={() =>
                                arrayHelpers.push({
                                    type: 1,
                                })
                            }
                        >
                            <div className="sty-icon">
                                <img src="/static/img/favicons/app/add_w.svg" />
                            </div>
                            <div className="sty-tag">
                                {GetLanguage("button", "tag_d_add_image")}
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
