import React, { useState, useEffect, useRef } from "react";
import { size } from "lodash";

import TagLang from "../../../components/modules/GetTagLang";

const picture = "/static/img/favicons/app/doc.png";

export default function pic({ formik, name }) {
    const [nameDoc, setNameDoc] = useState(null);
    const contDoc = useRef();

    useEffect(() => {
        if (
            typeof formik.values[name] == "string" &&
            formik.values[name] != ""
        ) {
            if (typeof formik.values[name] == "string") {
                let value = formik.values[name];
                value = value.substring(value.lastIndexOf("/") + 1);
                setNameDoc(value);
                formik.setFieldValue(name, "");
            }
        }
    }, [formik?.values[name]]);

    const Click = () => {
        contDoc.current.click();
    };

    const Change = (e) => {
        if (size(e.target.files) > 0) {
            formik.setFieldValue(name, e.target.files[0]);
            setNameDoc(e.target.files[0].name);
            // setStateDocument(URL.createObjectURL(e.target.files[0]));
        } else {
            setNameDoc(null);
        }
    };

    return (
        <div className="row sty-cont-all-pic" onClick={(e) => Click(e)}>
            <div className="col-7 col-md-5">
                <div className="sty-u-cont-pic">
                    {!nameDoc && (
                        <div className="sty-pic">
                            <img src={picture} />
                        </div>
                    )}
                    {nameDoc && (
                        <div className="sty-doc">
                            <div className="sty-name">{nameDoc}</div>
                        </div>
                    )}
                </div>
            </div>
            <div className="col-5 col-md-7 sty-justify-content">
                <div className="sty-u-cont-tag-op">
                    <div className="sty-pic">
                        <img src="/static/img/favicons/app/add_b.svg" />
                    </div>
                    <div className="sty-tag">
                        <TagLang group={"input"} tag={"tag_add_doc"} />
                    </div>
                </div>
            </div>
            <input
                ref={contDoc}
                name={name}
                type="file"
                // accept=".doc, .docx, .txt, .pdf, image/x-png,image/gif,image/jpeg"
                accept="image/*"
                className="sty-hide-element"
                onChange={(e) => Change(e)}
            />
        </div>
    );
}
