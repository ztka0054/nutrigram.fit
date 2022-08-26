import React from "react";

import TagLang from "../../../../../../../modules/GetTagLang";
import MessageValidation from "../../../../../../../modules/Forms/MessageValidation";

import FieldTime from "../../../../../../../../helper/forms/elements/time_array";

import FormDaysMenu from "./FormDaysMenu";

export default function FormFieldMenu({
    formik,
    arrayHelpers,
    father,
    content,
    index,
}) {
    return (
        <div className="col-12 sty-cont-form-1">
            <div className="row">
                <div className="col-6">
                    <div className="sty-dyna-title-1">{content.name}</div>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <div className="sty-cont-input-2">
                                <div className="sty-tag">
                                    <TagLang group={"input"} tag={"start"} />
                                </div>
                                <div className="sty-input">
                                    <FieldTime
                                        formik={formik}
                                        name={"fromTime"}
                                        father={father}
                                        index={index}
                                    />
                                    <MessageValidation
                                        error={
                                            formik.errors[father]?.[index]
                                                ?.fromTime
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="sty-cont-input-2">
                                <div className="sty-tag">
                                    <TagLang group={"input"} tag={"end"} />
                                </div>
                                <div className="sty-input">
                                    <FieldTime
                                        formik={formik}
                                        name={"toTime"}
                                        father={father}
                                        index={index}
                                    />
                                    <MessageValidation
                                        error={
                                            formik.errors[father]?.[index]
                                                ?.fromTime
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sty-card-menu-days">
                <FormDaysMenu
                    formik={formik}
                    father={father}
                    index={index}
                    content={content}
                    day={"monday"}
                />
                <FormDaysMenu
                    formik={formik}
                    father={father}
                    index={index}
                    content={content}
                    day={"tuesday"}
                />
                <FormDaysMenu
                    formik={formik}
                    father={father}
                    index={index}
                    content={content}
                    day={"wednesday"}
                />
                <FormDaysMenu
                    formik={formik}
                    father={father}
                    index={index}
                    content={content}
                    day={"thursday"}
                />
                <FormDaysMenu
                    formik={formik}
                    father={father}
                    index={index}
                    content={content}
                    day={"friday"}
                />
                <FormDaysMenu
                    formik={formik}
                    father={father}
                    index={index}
                    content={content}
                    day={"saturday"}
                />
                <FormDaysMenu
                    formik={formik}
                    father={father}
                    index={index}
                    content={content}
                    day={"sunday"}
                />
                {/* <div className="sty-con-day">
                    <div className="sty-con-name">
                        <TagLang group={"app"} tag={"tuesday"} />
                    </div>
                    {!content?.tuesday && (
                        <div className="sty-cont-tag-1">
                            <div>
                                <div className="sty-icon" />
                                <div className="sty-text">
                                    <TagLang
                                        group={"validation"}
                                        tag={"not_assigned"}
                                    />
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
                <div className="sty-con-day">
                    <div className="sty-con-name">
                        <TagLang group={"app"} tag={"wednesday"} />
                    </div>
                    {!content?.wednesday && (
                        <div className="sty-cont-tag-1">
                            <div>
                                <div className="sty-icon" />
                                <div className="sty-text">
                                    <TagLang
                                        group={"validation"}
                                        tag={"not_assigned"}
                                    />
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
                <div className="sty-con-day">
                    <div className="sty-con-name">
                        <TagLang group={"app"} tag={"thursday"} />
                    </div>
                    {!content?.thursday && (
                        <div className="sty-cont-tag-1">
                            <div>
                                <div className="sty-icon" />
                                <div className="sty-text">
                                    <TagLang
                                        group={"validation"}
                                        tag={"not_assigned"}
                                    />
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
                <div className="sty-con-day">
                    <div className="sty-con-name">
                        <TagLang group={"app"} tag={"friday"} />
                    </div>
                    {!content?.friday && (
                        <div className="sty-cont-tag-1">
                            <div>
                                <div className="sty-icon" />
                                <div className="sty-text">
                                    <TagLang
                                        group={"validation"}
                                        tag={"not_assigned"}
                                    />
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
                <div className="sty-con-day">
                    <div className="sty-con-name">
                        <TagLang group={"app"} tag={"saturday"} />
                    </div>
                    {!content?.saturday && (
                        <div className="sty-cont-tag-1">
                            <div>
                                <div className="sty-icon" />
                                <div className="sty-text">
                                    <TagLang
                                        group={"validation"}
                                        tag={"not_assigned"}
                                    />
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
                <div className="sty-con-day">
                    <div className="sty-con-name">
                        <TagLang group={"app"} tag={"sunday"} />
                    </div>
                    {!content?.sunday && (
                        <div className="sty-cont-tag-1">
                            <div>
                                <div className="sty-icon" />
                                <div className="sty-text">
                                    <TagLang
                                        group={"validation"}
                                        tag={"not_assigned"}
                                    />
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
                </div> */}
            </div>
        </div>
    );
}
