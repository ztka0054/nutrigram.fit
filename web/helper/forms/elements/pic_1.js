import React, { useState, useEffect, useRef } from "react";
import { size } from "lodash";

import TagLang from "../../../components/modules/GetTagLang";
import MessageValidation from "../../../components/modules/Forms/MessageValidation";

const picture = "/static/img/favicons/app/pic_1.png";

export default function pic({ formik, name }) {
    const [statePic, setStatePic] = useState(picture);
    const contPic = useRef();

    useEffect(() => {
        if (formik.values?.[`${name}_pic_preview`])
            setStatePic(formik.values?.[`${name}_pic_preview`]);
    }, [formik.values?.[`${name}_pic_preview`]]);

    const Click = (e) => {
        contPic.current.click();
    };

    const Change = (e) => {
        if (size(e.target.files) > 0) {
            formik.setFieldValue(name, e.target.files[0]);
            formik.setFieldValue(
                `${name}_check`,
                URL.createObjectURL(e.target.files[0])
            );
            setStatePic(URL.createObjectURL(e.target.files[0]));
        } else {
            formik.setFieldValue(name, "");
            formik.setFieldValue(`${name}_check`, "");
            setStatePic(picture);
        }
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
                name={name}
                type="file"
                accept="image/x-png,image/gif,image/jpeg"
                className="sty-hide-element"
                onChange={(e) => Change(e)}
            />
            <input
                name={`${name}_check`}
                type="text"
                className="sty-hide-element"
            />
            <MessageValidation error={formik.errors[`${name}_check`]} />
        </div>
    );
}
