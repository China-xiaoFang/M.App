/*
 * JS服务文件
 * Author：Mr.Fang
 * QQ：2875616188
 * Version：1.1.0
 * WebSite：https://mchen.vip
 * Time：2020.3.27
 */


/**当前网站Url */
currentUrlPath = window.document.location.href;
/**当前主机Url后的Url */
postUrlPath = window.document.location.pathname;
/**当前主机Url */
hostUrlPath = currentUrlPath.substring(0, currentUrlPath.lastIndexOf(postUrlPath));


/**站点页面头部标签 */
var headHtml = document.getElementsByTagName("head").item(0);


/**加载站点配置JS文件 */
function loadAppConfigurationSeiver() {
    var script = document.createElement("script");
    script.async = false;
    //script.type = "text/javascript";
    script.src = hostUrlPath + "/assets/plugins/appConfiguration/appConfigurationSeiver.js";
    headHtml.appendChild(script);
    console.log("站点配置 JS文件加载成功！");
}
loadAppConfigurationSeiver();