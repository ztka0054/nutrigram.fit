import "isomorphic-fetch";

export default function service_request(
    endpoint,
    params = null,
    id = null,
    token = null
) {
    var url = endpoint.url;
    var header = {
        mode: "cors",
        headers: {
            Accept: "application/json",
            // 'Access-Control-Allow-Origin':'*'
        },
    };

    if (token !== null) {
        header.headers["Authorization"] = token;
    }

    if (id !== null) {
        url = `${url}/${id}`;
    }

    switch (endpoint.typeRequest) {
        case "get":
            header.headers["Content-Type"] = "application/json";
            header["method"] = "GET";
            if (params !== null) {
                var elements = [];
                Object.keys(params).forEach((key) => {
                    elements.push(`${key}=${encodeURIComponent(params[key])}`);
                });
                url = `${url}?${elements.join("&")}`;
            }
            break;
        case "post":
            header.headers["Content-Type"] = "application/json";
            header["method"] = "POST";
            if (params != null) header["body"] = JSON.stringify(params);
            break;
        case "post-form":
            header["method"] = "POST";
            if (params !== null) {
                var formData = new FormData();
                var elements = [];
                Object.keys(params).forEach((key) => {
                    formData.append(key, params[key]);
                });
                header["body"] = formData;
            }
            break;
        case "put":
            header.headers["Content-Type"] = "application/json";
            header["method"] = "PUT";
            if (params != null) header["body"] = JSON.stringify(params);
            break;
        case "delete":
            header.headers["Content-Type"] = "application/json";
            header["method"] = "DELETE";
            if (params != null) header["body"] = JSON.stringify(params);
            break;
        default:
            break;
    }

    return fetch(url, header).then(
        function (response) {
            var data = response.json();
            return data;
        },
        function (error) {
            console.log(error);
        }
    );
}
