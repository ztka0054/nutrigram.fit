import React, { useState, useRef, useEffect } from "react";
import { size } from "lodash";

import TagLang from "../../../components/modules/GetTagLang";
import MessageValidation from "../../../components/modules/Forms/MessageValidation";

const picture = "/static/img/favicons/app/human.png";

export default function pic({ formik, father, name, index }) {
    const [statePic, setStatePic] = useState(picture);
    const contPic = useRef();

    useEffect(() => {
        ChangeIndex();
    }, [formik.values[father][index]]);

    const Click = (e) => {
        contPic.current.click();
    };

    const Change = (e) => {
        if (size(e.target.files) > 0) {
            formik.setFieldValue(
                `${father}[${index}].${name}`,
                e.target.files[0]
            );
            formik.setFieldValue(
                `${father}[${index}].${name}_check`,
                URL.createObjectURL(e.target.files[0])
            );
            setStatePic(URL.createObjectURL(e.target.files[0]));
        } else {
            formik.setFieldValue(`${father}[${index}].${name}`, "");
            formik.setFieldValue(`${father}[${index}].${name}_check`, "");
            setStatePic(picture);
        }
    };

    const ChangeIndex = () => {
        let value = formik.values[father][index]?.[name];
        if (typeof value == "string") {
            setStatePic(value);
        } else if (value) setStatePic(URL.createObjectURL(value));
    };

    return (
        <div className="sty-cont-load-img-1" onClick={(e) => Click(e)}>
            <div className="sty-pic">
                <img src={statePic} />
            </div>
            <div className="sty-tag">
                <div className="sty-icon">
                    <img src="/static/img/favicons/app/add_b.svg" />
                </div>
                <div className="sty-name">
                    <TagLang group={"input"} tag={"tag_add_img"} />
                </div>
            </div>
            <input
                ref={contPic}
                name={`${father}[${index}].${name}`}
                type="file"
                accept="image/x-png,image/gif,image/jpeg"
                className="sty-hide-element"
                onChange={(e) => Change(e)}
            />
            <input
                name={`${father}[${index}].${name}_check`}
                type="text"
                className="sty-hide-element"
            />
            <MessageValidation
                error={formik.errors[father]?.[index]?.[`${name}_check`]}
            />
        </div>
    );
}
