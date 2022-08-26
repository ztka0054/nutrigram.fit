import React, { useState, useEffect } from "react";
import i18n from "../../helper/i18n/config";
import { map } from "lodash";
import useApp from "../../hooks/useApp";

export default function GetTagLang({ group = "", tag, dynamic = [] }) {
    let { locale } = useApp();

    const [tagValue, setTagValue] = useState(null);

    useEffect(() => {
        if (locale) PutTag();
    }, [locale, dynamic]);

    const PutTag = () => {
        let tagValue = i18n.t(`${group}:${tag}`);
        map(dynamic, (element) => {
            tagValue = tagValue.replaceAt(tagValue.indexOf("#"), element);
        });
        setTagValue(tagValue);
    };

    return <>{tagValue}</>;
}

String.prototype.replaceAt = function (index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }

    return this.substring(0, index) + replacement + this.substring(index + 1);
};
