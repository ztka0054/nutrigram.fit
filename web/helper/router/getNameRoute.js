import Router from '../../routes'

export default (asPath) => {
    let nameRoute = null
    Router.routes.some((element, i)=>{
        let pathReq = asPath.split('/')
        let pathRoute = element.pattern.split('/')
        var indexs = []
        pathRoute = pathRoute.map((paths, j)=>{
            if(paths.includes(":", 0)){
                indexs.push(j)
                return '&'
            }
            return paths
        })
        indexs.map((index, j) => {
            pathReq[index]='&'
        })
        if(pathReq.join('/')==pathRoute.join('/')){
            nameRoute = element.name
            return  true
        }
    })
    return nameRoute
}