// module.exports = function get_browser_info(){
//     var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
//     if(/trident/i.test(M[1])){
//         tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
//         return {name:'IE',version:(tem[1]||'')};
//         }
//     if(M[1]==='Chrome'){
//         tem=ua.match(/\bOPR\/(\d+)/)
//         if(tem!=null)   {return {name:'Opera', version:tem[1]};}
//         }
//     M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
//     if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
//     return {
//       name: M[0],
//       version: M[1]
//     };
//  }

 // var browser = get_browser_info();

 // console.log(browser.name);
 // console.log(browser.version);


// console.log(BrowserDetect.browser);
// console.log(BrowserDetect.version);

module.exports = request.headers['user-agent'],
    $ = {};

if (/mobile/i.test(ua))
    $.Mobile = true;

if (/like Mac OS X/.test(ua)) {
    $.iOS = /CPU( iPhone)? OS ([0-9\._]+) like Mac OS X/.exec(ua)[2].replace(/_/g, '.');
    $.iPhone = /iPhone/.test(ua);
    $.iPad = /iPad/.test(ua);
}

if (/Android/.test(ua))
    $.Android = /Android ([0-9\.]+)[\);]/.exec(ua)[1];

if (/webOS\//.test(ua))
    $.webOS = /webOS\/([0-9\.]+)[\);]/.exec(ua)[1];

if (/(Intel|PPC) Mac OS X/.test(ua))
    $.Mac = /(Intel|PPC) Mac OS X ?([0-9\._]*)[\)\;]/.exec(ua)[2].replace(/_/g, '.') || true;

if (/Windows NT/.test(ua))
    $.Windows = /Windows NT ([0-9\._]+)[\);]/.exec(ua)[1];
