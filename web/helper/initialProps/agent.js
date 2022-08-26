export default function agent(ctx) {
    const isServer = !!ctx.req;
    const userAgent = isServer
        ? ctx.req.headers["user-agent"]
        : navigator.userAgent;
    // const isLine = /\bLine\//i.test(userAgent) || false;
    const isMobile = /(iPad|iPhone|Android|Mobile)/i.test(userAgent) || false;
    const rules = [
        "WebView",
        "(iPhone|iPod|iPad)(?!.*Safari/)",
        "Android.*(wv|.0.0.0)",
    ];
    const regex = new RegExp(`(${rules.join("|")})`, "ig");
    const isInApp = Boolean(userAgent.match(regex));
    // console.log("=================");
    // console.log("userAgent: ", userAgent);
    // console.log("isLine: ", isLine);
    // console.log("isMobile: ", isMobile);

    // console.log("isInApp: ", isInApp);
    // console.log("=================");

    return { agent: { userAgent, isMobile, isInApp } };
}
