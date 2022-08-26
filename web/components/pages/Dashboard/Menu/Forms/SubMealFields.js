import React, { useState, useEffect } from "react";

import TagLang from "../../../../modules/GetTagLang";

const add = "/static/img/favicons/app/add_b.svg";

export default function SubMealFields({
    formik,
    arrayHelpers,
    index,
    content,
    father,
    toogleTable,
    toogleSelect,
}) {
    useEffect(() => {
        CheckState();
    }, []);

    const CheckState = () => {};

    return (
        <div className="sty-card-menu-days">
            <div className="sty-con-day" onClick={() => toogleSelect(1)}>
                <div className="sty-con-name">
                    <TagLang group={"app"} tag={"monday"} />
                </div>
                {!content?.monday && (
                    <div className="sty-cont-tag-1">
                        <div>
                            <div className="sty-icon">
                                <img src={add} />
                            </div>
                            <div className="sty-text">
                                <TagLang group={"button"} tag={"add"} />
                            </div>
                        </div>
                    </div>
                )}
                {content?.monday && (
                    <>
                        <div className="sty-cont-pic">
                            <img src={content.monday_image} />
                        </div>
                        <div className="sty-cont-info">
                            <div className="sty-text">
                                {content.monday_name}
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="sty-con-day" onClick={() => toogleSelect(2)}>
                <div className="sty-con-name">
                    <TagLang group={"app"} tag={"tuesday"} />
                </div>
                {!content?.tuesday && (
                    <div className="sty-cont-tag-1">
                        <div>
                            <div className="sty-icon">
                                <img src={add} />
                            </div>
                            <div className="sty-text">
                                <TagLang group={"button"} tag={"add"} />
                            </div>
                        </div>
                    </div>
                )}
                {content?.tuesday && (
                    <>
                        <div className="sty-cont-pic">
                            <img src={content.tuesday_image} />
                        </div>
                        <div className="sty-cont-info">
                            <div className="sty-text">
                                {content.tuesday_name}
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="sty-con-day" onClick={() => toogleSelect(3)}>
                <div className="sty-con-name">
                    <TagLang group={"app"} tag={"wednesday"} />
                </div>
                {!content?.wednesday && (
                    <div
                        className="sty-cont-tag-1"
                        onClick={() => toogleSelect(3)}
                    >
                        <div>
                            <div className="sty-icon">
                                <img src={add} />
                            </div>
                            <div className="sty-text">
                                <TagLang group={"button"} tag={"add"} />
                            </div>
                        </div>
                    </div>
                )}
                {content?.wednesday && (
                    <>
                        <div className="sty-cont-pic">
                            <img src={content.wednesday_image} />
                        </div>
                        <div className="sty-cont-info">
                            <div className="sty-text">
                                {content.wednesday_name}
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="sty-con-day" onClick={() => toogleSelect(4)}>
                <div className="sty-con-name">
                    <TagLang group={"app"} tag={"thursday"} />
                </div>
                {!content?.thursday && (
                    <div className="sty-cont-tag-1">
                        <div>
                            <div className="sty-icon">
                                <img src={add} />
                            </div>
                            <div className="sty-text">
                                <TagLang group={"button"} tag={"add"} />
                            </div>
                        </div>
                    </div>
                )}
                {content?.thursday && (
                    <>
                        <div className="sty-cont-pic">
                            <img src={content.thursday_image} />
                        </div>
                        <div className="sty-cont-info">
                            <div className="sty-text">
                                {content.thursday_name}
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="sty-con-day" onClick={() => toogleSelect(5)}>
                <div className="sty-con-name">
                    <TagLang group={"app"} tag={"friday"} />
                </div>
                {!content?.friday && (
                    <div className="sty-cont-tag-1">
                        <div>
                            <div className="sty-icon">
                                <img src={add} />
                            </div>
                            <div className="sty-text">
                                <TagLang group={"button"} tag={"add"} />
                            </div>
                        </div>
                    </div>
                )}
                {content?.friday && (
                    <>
                        <div className="sty-cont-pic">
                            <img src={content.friday_image} />
                        </div>
                        <div className="sty-cont-info">
                            <div className="sty-text">
                                {content.friday_name}
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="sty-con-day" onClick={() => toogleSelect(6)}>
                <div className="sty-con-name">
                    <TagLang group={"app"} tag={"saturday"} />
                </div>
                {!content?.saturday && (
                    <div className="sty-cont-tag-1">
                        <div>
                            <div className="sty-icon">
                                <img src={add} />
                            </div>
                            <div className="sty-text">
                                <TagLang group={"button"} tag={"add"} />
                            </div>
                        </div>
                    </div>
                )}
                {content?.saturday && (
                    <>
                        <div className="sty-cont-pic">
                            <img src={content.saturday_image} />
                        </div>
                        <div className="sty-cont-info">
                            <div className="sty-text">
                                {content.saturday_name}
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="sty-con-day" onClick={() => toogleSelect(7)}>
                <div className="sty-con-name">
                    <TagLang group={"app"} tag={"sunday"} />
                </div>
                {!content?.sunday && (
                    <div className="sty-cont-tag-1">
                        <div>
                            <div className="sty-icon">
                                <img src={add} />
                            </div>
                            <div className="sty-text">
                                <TagLang group={"button"} tag={"add"} />
                            </div>
                        </div>
                    </div>
                )}
                {content?.sunday && (
                    <>
                        <div className="sty-cont-pic">
                            <img src={content.sunday_image} />
                        </div>
                        <div className="sty-cont-info">
                            <div className="sty-text">
                                {content.sunday_name}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
