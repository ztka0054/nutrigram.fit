import 'isomorphic-fetch'
import enviroment from '../../enviroment/config'

export default function request(typeRequest, endpoit, params) {
    let url = 'https://api.stripe.com' + endpoit
    let configRequest = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            Authorization: `Bearer ${enviroment.stripe_key}`
            // Authorization: "Bearer sk_test_51HcGM0Hgpp31SX5n9dVQMMFJzN9U9ZuSCovt57SR9lhTk9DUoxJu3S626x3ShcH4tO2IoSds95lnQvimlTYBJIMQ0086FR20fE"
        }
    }

    switch(typeRequest){
        case 'get':
            configRequest.headers['Content-Type'] = "application/json"
            configRequest['method'] = "GET"
            if( params !== null ){
                var elements = []
                Object.keys( params ).forEach((key) => {
                    elements.push(`${key}=${encodeURIComponent(params[key])}`)
                });
                url = `${url}?${elements.join('&')}`
            }
        break

        case 'post':
            configRequest.headers['Content-Type'] = "application/json"
            configRequest['method'] = "POST"
            if( params != null )
                configRequest['body'] = JSON.stringify(params)
        break

        case 'post-encode':
            configRequest['method'] = "POST"
            if( params !== null ){
                var formBody = [];
                for (var property in params) {
                    var encodedKey = encodeURIComponent(property);
                    var encodedValue = encodeURIComponent(params[property]);
                    formBody.push(encodedKey + "=" + encodedValue);
                }
                formBody = formBody.join("&");
                configRequest['body'] = formBody
            }
        break

        case 'put':
            configRequest.headers['Content-Type'] = "application/json"
            configRequest['method'] = "PUT"
            if( params != null )
                configRequest['body'] = JSON.stringify(params)
            break
        break

        case 'put-form':
            configRequest['method'] = "PUT"
            if( params !== null ){
                var formData = new FormData();
                var elements = []
                Object.keys( params ).forEach((key) => {
                    formData.append(key, params[key])
                });
                configRequest['body'] = formData
            }
        break
        
        case 'patch':
            configRequest.headers['Content-Type'] = "application/json"
            configRequest['method'] = "PATCH"
            if( params != null )
                configRequest['body'] = JSON.stringify(params)
        break

        case 'patch-form':
            configRequest['method'] = "PATCH"
            if( params !== null ){
                var formData = new FormData();
                var elements = []
                Object.keys( params ).forEach((key) => {
                    formData.append(key, params[key])
                });
                configRequest['body'] = formData
            }
        break

        case 'delete':
            configRequest.headers['Content-Type'] = "application/json"
            configRequest['method'] = "DELETE"
            if( params != null )
                configRequest['body'] = JSON.stringify(params)
        break
        
        default:
        break
    }
    
    return fetch(url, configRequest)
    .then( res => {
        return res.json() 
    })
    .catch(error => { 
        console.error('Error:', error)
        return null;
    })
}