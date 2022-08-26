import React, { useState, useRef, useEffect } from "react";
import { size } from "lodash";

import Icons from "../../../components/modules/Icons";
import TagLang from "../../../components/modules/GetTagLang";

const picture = "/static/img/favicons/app/pic_1.png";

export default function pic({ formik, name }) {
    const [elementPreview, setElementPreview] = useState(picture);
    const [videoFlag, setVideoFlag] = useState(false);
    const contVideo = useRef();
    const video = useRef();

    useEffect(() => {
        ChangeFormik();
    }, [formik.values[name]]);

    const Click = () => {
        contVideo.current.click();
    };

    const Change = (e) => {
        if (size(e.target.files) > 0) {
            formik.setFieldValue(name, e.target.files[0]);
        } else {
            formik.setFieldValue(null);
        }
    };

    const ChangeFormik = () => {
        let value = formik.values[name];
        if (value) {
            if (typeof value == "string") {
                setElementPreview(value);
                setVideoFlag(true);
            } else {
                setElementPreview(URL.createObjectURL(value));
                setVideoFlag(true);
            }
        } else {
            setElementPreview(picture);
        }
        if (video?.current) video.current.load();
    };

    return (
        <div className="sty-cont-load-img-1" onClick={() => Click()}>
            <div className="sty-pic">
                {!videoFlag && <img src={elementPreview} />}
                {videoFlag && (
                    <video id="video-element" controls ref={video}>
                        <source type="video/mp4" src={elementPreview} />
                    </video>
                )}
            </div>
            <div className="sty-tag">
                <div className="sty-icon">
                    <img src="/static/img/favicons/app/add_b.svg" />
                </div>
                <div className="sty-name">
                    <TagLang group={"input"} tag={"tag_add_video"} />
                </div>
            </div>
            <input
                ref={contVideo}
                type="file"
                accept="video/mp4"
                className="sty-hide-element"
                onChange={(e) => Change(e)}
            />
        </div>
    );
}
