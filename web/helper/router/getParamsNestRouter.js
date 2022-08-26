import Router from '../../routes'

export default (asPath) => {
    // console.log(Router.routes)
    if(asPath==undefined) return {}
    let paramsFinal = {}
    Router.routes.some((element, i)=>{
        let pathReq = asPath.split('/')
        let pathRoute = element.pattern.split('/')
        var indexs = []
        var params = {}
        pathRoute = pathRoute.map((paths, j)=>{
            if(paths.includes(":", 0)){
                indexs.push(j)
                let attr = ''
                if(paths.includes("("))
                attr = paths.substring(0, paths.indexOf('(')).replace(':', '')
                else
                attr = paths.replace(':', '')
                params[attr] = null
                return '&'
            }
            return paths
        })
        var keys = Object.keys( params ) 
        indexs.map((index, j) => {
            params[keys[j]] = pathReq[index]
            pathReq[index]='&'
        })
        if(pathReq.join('/')==pathRoute.join('/')){
            paramsFinal = params
            return  true
        }
    })
    return paramsFinal
}