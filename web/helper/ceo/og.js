import { size } from "lodash";
import { stripHtml } from "string-strip-html";

export const fixOgDescription = (description) => {
    let fixDescription = null;
    if (description) {
        if (size(description) > 155) {
            fixDescription = `${description.substring(0, 155)}...`;
        }
    }
    return fixDescription;
};

export const sanitizeHtmlOg = (data) => {
    let fixData = null;
    if (data) {
        fixData = stripHtml(data).result;
    }
    return fixData;
};
