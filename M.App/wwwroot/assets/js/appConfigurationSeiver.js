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
/**是否再引导页添加音乐播放器 */
isAddMusicPlayer = true;

/**引用默认Http请求服务 */
function introduceDefaultHttpRequestServer() {
    var headHtml = document.getElementsByTagName("head").item(0);
    var script = document.createElement("script");
    script.async = true;
    //script.type = "text/javascript";
    script.src = hostUrlPath + "/assets/plugins/httpRequest/httpRequestSeiver.js";
    headHtml.appendChild(script);
}

// 加载Http请求服务
introduceDefaultHttpRequestServer();

//jQuery(document).ready(function ($) {
//    $("head").append('<script id="ilt" src="https://player.ilt.me/player/js/player.js" key="98ffa0f27310403e85637d328e6ba248"></script>');
//});

// 添加底部备案信息