/**当前网站Url */
currentUrlPath = window.document.location.href;
/**当前主机Url后的Url */
postUrlPath = window.document.location.pathname;
/**当前主机Url */
hostUrlPath = currentUrlPath.substring(0, currentUrlPath.lastIndexOf(postUrlPath));
/**配置信息服务 */
appConfigurationServer = {};
/**配置信息 */
appConfiguration = {};

/**引用默认Http请求服务 */
function introduceDefaultHttpRequestServer() {
    var headHtml = document.getElementsByTagName("head").item(0);
    var script = document.createElement("script");
    script.async = true;
    //script.type = "text/javascript";
    script.src = hostUrlPath + "/plugins/httpRequest/httpRequestSeiver.js";
    headHtml.appendChild(script);
}

// 加载Http请求服务
introduceDefaultHttpRequestServer();

// 添加底部备案信息