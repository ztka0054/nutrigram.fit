import request from "../core/core";
import { message_1 } from "../../appearance/messages";
import { loadElement } from "../../appearance/load";
import GetLanguage from "../../i18n/getValueTagLang";

export default async (
    endpoint,
    params = {},
    ids = null,
    headers = {},
    flagMessage = true,
    flagLoad = false
) => {
    if (flagLoad) loadElement(true);
    let api_request = await request(endpoint, params, ids, headers);
    if (flagLoad) loadElement(false);
    if (api_request.statusHttp >= 500 && api_request.statusHttp < 600) {
        if (flagMessage)
            message_1(GetLanguage("validation", `unexpected_error`));
        return null;
    }
    if (api_request == null) {
        if (flagMessage) message_1(`Error inesperado`);
        return null;
    }

    if (!api_request.error) {
        let data = await api_request.response;
        if (typeof data.success != "undefined" && !data.success) {
            if (flagMessage) message_1(data.message);
            return null;
        } else {
            return data;
        }
    } else {
        if (flagMessage) {
            let message = await api_request.errorMessage;
            if (typeof message.message != "undefined")
                message_1(message.message);
            else message_1(message);
            return null;
        }
    }
};
