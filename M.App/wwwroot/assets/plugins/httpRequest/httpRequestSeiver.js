/**
 * HTTP请求服务
 * @param {any} obj 请求方式、路径、参数。实例：obj: {method:"get",url:"",data:{},dataType:""};
 * @param {any} successFun 请求成功回调方法
 * @param {any} errorFun 请求失败回调方法
 * @param {any} async 是否异步，默认异步
 * @param {any} apiRequest 是否为API请求，默认为API请求
 */
function httpRequest(obj, successFun, errorFun, async = true, apiRequest = true) {
    // 创建 XMLHttpRequest 对象
    var xmlHttp = null;
    // 老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象：xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    if (window.XMLHttpRequest) {
        // code for all new browsers
        xmlHttp = new XMLHttpRequest;
    } else if (window.ActiveXObject) {
        // code for IES and IE6
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 判断是否支持请求
    if (xmlHttp == null) {
        info = "浏览器不支持xmlHttp请求，请更换更高级的浏览器再试试。";
        console.log("【Mr.Fang网络】温馨提示：" + info);
        alert("【Mr.Fang网络】温馨提示：" + info);
    }
    // 请求方式，转换为大写
    var httpMethod = (obj.method || "Get").toUpperCase();
    // 数据类型
    xmlHttp.responseType = obj.dataType || "json";
    // url
    var httpUrl = obj.url || '';
    // 判断是否为API请求
    var httpApiRequest = apiRequest == null || apiRequest == undefined || apiRequest == '' && apiRequest != false ? true : apiRequest;
    if (httpApiRequest) {
        httpUrl = '' || appConfiguration.ProjectInfo.ApiRequestUrl + "/api/" + httpUrl;
    } else {
        httpUrl = '' || hostUrlPath + "/" + httpUrl;
    }
    // 异步请求
    var httpAsync = async == null || async == undefined || async == '' && async != false ? true : async;
    // get请求时参数处理
    if (httpMethod == "GET") {
        // 请求体中的参数get请求参数格式为：?paraml=test&param2=test2
        var data = obj.data || {};
        var requestData = '';
        for (var key in data) {
            requestData += key + "=" + data[key] + "&";
        }
        if (requestData != '') {
            httpUrl += "?";
            requestData = requestData.substring(0, requestData.length - 1);
            httpUrl += requestData;
        }
    }
    // onreadystatechange 是一个事件句柄。
    // 它的值(state_Change) 是一个函数的名称，当 XMLHttpRequest 对象的状态发生改变时，会触发此函数。状态从 0(uninitialized) 到 4(complete) 进行变化。仅在状态为 4 时，我们才执行代码
    xmlHttp.onreadystatechange = function () {
        // complete
        if (xmlHttp.readyState == 4) {
            console.log(xmlHttp);
            if (xmlHttp.status == 200) {
                // 请求成功执行的回调函数
                successFun(xmlHttp);
            } else {
                // 请求失败执行的回调函数
                errorFun(xmlHttp, xmlHttp.status, xmlHttp.statusText);
            }
        }
    }
    // 请求接口
    if (httpMethod == "GET") {
        xmlHttp.open("GET", httpUrl, httpAsync);
        xmlHttp.send(null);
    } else {
        xmlHttp.open(httpMethod, httpUrl, httpAsync);
        xmlHttp.setRequestHeader("Content-Type", "application/json");
        xmlHttp.send(JSON.stringify(obj.data));
    }
}

/**得到默认配置信息文件 */
function getAppConfigurationSeiver() {
    httpRequest({
        method: "get",
        url: "assets/js/appConfigurationSeiver.json",
    }, function (res) {
        // 配置信息
        appConfigurationServer = res;
        appConfiguration = res.response;
        // 配置js文件引用
        var headHtml = document.getElementsByTagName("head").item(0);
        for (var jsFile in appConfiguration.JSFileInfo.DefaultJSFile) {
            var script = document.createElement("script");
            script.async = false;
            //script.type = "text/javascript";
            script.src = hostUrlPath + '/' + appConfiguration.JSFileInfo.DefaultJSFile[jsFile];
            headHtml.appendChild(script);
        }
        // 添加访问日志
        addAccessHistoryLog();
    }, function (res, status, statusText) {
    }, true, false);
}

/**添加访问日志 */
function addAccessHistoryLog() {
    httpRequest({
        method: "post",
        url: "AccessHistoryLogAppService/CreateAccessHistoryLog",
        data: {
            "deviceInfo": Navigator.appVersion,
            "url": currentUrlPath
        }
    }, function (res) {
    }, function () {
    });
}

// 配置信息
getAppConfigurationSeiver();



    // 浏览器信息