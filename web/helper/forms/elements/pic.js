import React, { useState, useEffect, useRef } from "react";
import { size } from "lodash";

import TagLang from "../../../components/modules/GetTagLang";

const picture = "/static/img/favicons/app/human.png";

export default function pic({ formik, name }) {
    const [statePic, setStatePic] = useState(picture);
    const contPic = useRef();

    useEffect(() => {
        if (
            typeof formik.values[name] == "string" &&
            formik.values[name] != ""
        ) {
            setStatePic(formik.values[name]);
            formik.setFieldValue(name, "");
        }
    }, [formik?.values[name]]);

    const Click = (e) => {
        contPic.current.click();
    };

    const Change = (e) => {
        if (size(e.target.files) > 0) {
            formik.setFieldValue(name, e.target.files[0]);
            setStatePic(URL.createObjectURL(e.target.files[0]));
        } else {
            formik.setFieldValue(name, "");
            setStatePic(picture);
        }
    };

    return (
        <div className="row sty-cont-all-pic" onClick={(e) => Click(e)}>
            <div className="col-7 col-md-5">
                <div className="sty-u-cont-pic">
                    <div className="sty-pic" id="id_pic">
                        <img src={statePic} />
                    </div>
                </div>
            </div>
            <div className="col-5 col-md-7 sty-justify-content">
                <div className="sty-u-cont-tag-op">
                    <div className="sty-pic">
                        <img src="/static/img/favicons/app/add_b.svg" />
                    </div>
                    <div className="sty-tag">
                        <TagLang group={"input"} tag={"tag_add_img"} />
                    </div>
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
        </div>
    );
}
