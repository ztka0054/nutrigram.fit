import { getToken } from "../../../utils/localStorage";
// import { get_cookies } from "../../cookies/get_cookies_initial";

export default function request(
    endpoint,
    params = null,
    ids = null,
    headers = {}
) {
    let { url, typeRequest } = endpoint;
    let configRequest = {
        headers: {
            Accept: "application/json",
            // 'X-Timezone': 'UTC'
        },
    };

    if (headers != undefined && headers != null)
        Object.keys(headers).forEach((key) => {
            if (key == "locale")
                if (headers[key] != null)
                    configRequest.headers["Accept-Language"] = headers[key];
            if (key == "currency")
                configRequest.headers["X-Currency"] = headers[key];
        });

    if (getToken() != null)
        configRequest.headers.Authorization = `Token ${getToken()}`;

    if (ids != null) {
        ids.map((element, i) => {
            url = url.replaceAt(url.indexOf("#"), element);
        });
    }
    switch (typeRequest) {
        case "get":
            configRequest.headers["Content-Type"] = "application/json";
            configRequest["method"] = "GET";
            if (params !== null) {
                var elements = [];
                Object.keys(params).forEach((key) => {
                    elements.push(`${key}=${encodeURIComponent(params[key])}`);
                });
                url = `${url}?${elements.join("&")}`;
            }
            break;

        case "post":
            configRequest.headers["Content-Type"] = "application/json";
            configRequest["method"] = "POST";
            if (params != null) configRequest["body"] = JSON.stringify(params);
            break;

        case "post-form":
            configRequest["method"] = "POST";
            if (params !== null) {
                var formData = new FormData();
                var elements = [];
                Object.keys(params).forEach((key) => {
                    formData.append(key, params[key]);
                });
                configRequest["body"] = formData;
            }
            break;

        case "put":
            configRequest.headers["Content-Type"] = "application/json";
            configRequest["method"] = "PUT";
            if (params != null) configRequest["body"] = JSON.stringify(params);
            break;
            break;

        case "put-form":
            configRequest["method"] = "PUT";
            if (params !== null) {
                var formData = new FormData();
                var elements = [];
                Object.keys(params).forEach((key) => {
                    formData.append(key, params[key]);
                });
                configRequest["body"] = formData;
            }
            break;

        case "patch":
            configRequest.headers["Content-Type"] = "application/json";
            configRequest["method"] = "PATCH";
            if (params != null) configRequest["body"] = JSON.stringify(params);
            break;

        case "patch-form":
            configRequest["method"] = "PATCH";
            if (params !== null) {
                var formData = new FormData();
                var elements = [];
                Object.keys(params).forEach((key) => {
                    formData.append(key, params[key]);
                });
                configRequest["body"] = formData;
            }
            break;

        case "delete":
            configRequest.headers["Content-Type"] = "application/json";
            configRequest["method"] = "DELETE";
            if (params != null) configRequest["body"] = JSON.stringify(params);
            break;

        default:
            break;
    }

    return fetch(url, configRequest)
        .then((res) => {
            var data = { error: false };
            data.statusHttp = res.status;
            switch (res.status) {
                case 404:
                    data.error = true;
                    data.errorMessage = res.statusText;
                    break;
                case 400:
                    data.error = true;
                    data.errorMessage = res.json();
                    break;
                default:
                    data.response = {};
                    break;
            }
            if (res.status >= 200 && res.status < 204) {
                data.response = res.json();
            }
            return data;
        })
        .catch((error) => {
            console.error("Error:", error);
            return null;
        });
}

String.prototype.replaceAt = function (index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }

    return this.substring(0, index) + replacement + this.substring(index + 1);
};
