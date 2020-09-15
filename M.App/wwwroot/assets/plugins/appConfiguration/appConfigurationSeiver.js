/*
 * 站点配置信息服务
 * Author：Mr.Fang
 * QQ：2875616188
 * Version：1.1.0
 * WebSite：https://fanghua.host
 * Time：2020.3.27
 */


/**配置信息 */
var appConfiguration = {
    // 站点信息
    ProjectInfo: {
        // 站点名称
        Project_Name: "Mr.Fang网络",
        // 站点版本
        Version: "V1.1.0",
        // 站点Url
        Url: "https://fanghua.host",
        // APIUrl
        ApiRequestUrl: "https://adminapi.fanghua.host",
        // 备案信息
        RecordInfo: "陇ICP备19002874号",
        // 提示框头部信息
        InfoHeader: "【Mr.Fang网络】温馨提示："
    },
    // JS文件信息
    JSFileInfo: {
        // 站点配置信息JS文件
        AppConfigurationJSFile: "assets/plugins/appConfiguration/appConfigurationSeiver.js",
        // 默认jQuery文件
        JQueryJSFile: "assets/plugins/jquery/jquery-3.4.1.min.js",
        // Http请求服务配置JS文件
        HttpRequestSeiverJSFile: "assets/plugins/httpRequest/httpRequestSeiver.js",
        // 音乐播放器信息
        MusicsPlayerJS: '<script id="ilt" src="https://player.ilt.me/player/js/player.js" key="98ffa0f27310403e85637d328e6ba248"></script>',
        // 默认加载JS文件
        DefaultJSFile: [
            // 默认layer文件
            "assets/plugins/layer/layer.js"
        ]
    }
};

var webSiteDate = new Date();

// 设置Title加站点名称
var webSiteTitle = document.getElementsByTagName("title").item(0);
webSiteTitle.text = appConfiguration.ProjectInfo.Project_Name + "-" + webSiteTitle.text;

// 备案信息
var webSiteFooter = document.getElementById("footer");
webSiteFooter.innerHTML = '<small class="copyright">' +
    'Copyright&nbsp;&copy 2019 - ' +
    webSiteDate.getFullYear() +
    '&nbsp;&nbsp;<a href="https://fanghua.host">' +
    appConfiguration.ProjectInfo.Project_Name
    + '</a>&nbsp;&nbsp;版权所有&nbsp;&nbsp;|&nbsp;&nbsp;' +
    '<a href="http://www.beian.miit.gov.cn/" target="_blank">' +
    appConfiguration.ProjectInfo.RecordInfo +
    '</a>' +
    '</small>';


/**加载jQuery文件 */
function loadJQuery() {
    var script = document.createElement("script");
    script.async = false;
    //script.type = "text/javascript";
    script.src = hostUrlPath + "/assets/plugins/jquery/jquery-3.4.1.min.js";
    headHtml.appendChild(script);
    console.log("jQuery JS文件加载成功！");
}

/**加载默认的JS文件 */
function loadDefaultJS() {
    for (var js in appConfiguration.JSFileInfo.DefaultJSFile) {
        var script = document.createElement("script");
        script.async = false;
        //script.type = "text/javascript";
        script.src = hostUrlPath + '/' + appConfiguration.JSFileInfo.DefaultJSFile[js];
        headHtml.appendChild(script);
    }
    console.log("默认的（多个） JS文件加载成功！");
}

/**加载Http请求服务配置JS文件 */
function loadHttpRequestServer() {
    var script = document.createElement("script");
    script.async = false;
    //script.type = "text/javascript";
    script.src = hostUrlPath + "/assets/plugins/httpRequest/httpRequestSeiver.js";
    headHtml.appendChild(script);
    console.log("Http请求服务 JS文件加载成功！");
}

/**加载音乐播放器 */
function loadMusicsPlayer() {
    // 当访问设备为电脑或平板（宽度大于640）时再加载播放器
    if (window.screen.width > 640) {
        $("head").append('<script id="ilt" src="https://player.ilt.me/player/js/player.js" key="98ffa0f27310403e85637d328e6ba248"></script>');
    }
}

// 执行
loadJQuery();
loadDefaultJS();
loadHttpRequestServer();


/**方法封装 */
/**
 * 错误信息提示
 * @param {any} msg
 */
function errorInfo(msg) {
    layer.msg(msg);
}
/**
 * 成功信息提示
 * @param {any} msg
 */
function successInfo(msg) {
    layer.msg(msg);
}
/**
 * 得到随机数（包括上限和下限）
 * @param {any} maxIndexOf 上限
 * @param {any} minIndexOf 下限
 */
function getRandom(maxIndexOf, minIndexOf) {
    // return parseInt(Math.random() * (maxIndexOf - minIndexOf) + minIndexOf);
    return Math.floor(Math.random() * (maxIndexOf - minIndexOf + 1)) + minIndexOf; 
}