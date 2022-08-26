import React from "react";
import i18n from "../../../helper/i18n/config";
import classnames from "classnames";

import TagLang from "../../modules/GetTagLang";

export default function FormValidationMessage({ error }) {
    return (
        <>
            {error && (
                <div
                    className={`tag-error ${classnames({
                        active: error,
                    })}`}
                >
                    <div className="text">
                        <TagLang group={"validation"} tag={error} />
                    </div>
                </div>
            )}
        </>
    );
}
