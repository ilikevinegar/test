
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/register/register","pages/forget/forget","pages/center/center","pages/user-info/user-info","pages/news-detail/news-detail","pages/yonghu/list","pages/yonghu/add-or-update","pages/yonghu/detail","pages/xinwenfenlei/list","pages/xinwenfenlei/add-or-update","pages/xinwenfenlei/detail","pages/jinrixinwen/list","pages/jinrixinwen/add-or-update","pages/jinrixinwen/detail","pages/caogaoxiang/list","pages/caogaoxiang/add-or-update","pages/caogaoxiang/detail","pages/news/list","pages/news/add-or-update","pages/news/detail","pages/storeup/list","pages/storeup/add-or-update","pages/storeup/detail","pages/aboutus/list","pages/aboutus/add-or-update","pages/aboutus/detail","pages/systemintro/list","pages/systemintro/add-or-update","pages/systemintro/detail","pages/discussjinrixinwen/list","pages/discussjinrixinwen/add-or-update","pages/discussjinrixinwen/detail","common/linkOthers/linkOthers","pages/index/index"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"新闻聚合app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#FFFFFF","selectedColor":"#000000","borderStyle":"white","backgroundColor":"#36B1AC","list":[{"pagePath":"pages/index/index","iconPath":"static/tabs/index.png","selectedIconPath":"static/tabs/index1.png","text":"首页"},{"pagePath":"pages/jinrixinwen/list","iconPath":"/static/tabs/icon1.png","selectedIconPath":"/static/tabs/icon1_act.png","text":"今日新闻"},{"pagePath":"pages/news/list","iconPath":"static/tabs/news.png","selectedIconPath":"static/tabs/news_act.png","text":"公告信息"},{"pagePath":"pages/center/center","iconPath":"static/tabs/mine.png","selectedIconPath":"static/tabs/mine1.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"app02","compilerVersion":"3.6.4","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white","navigationBarTitleText":"登录"}},{"path":"/pages/register/register","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white","navigationBarTitleText":"注册"}},{"path":"/pages/forget/forget","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white","navigationBarTitleText":"忘记密码"}},{"path":"/pages/center/center","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white","navigationBarTitleText":"我的"}},{"path":"/pages/user-info/user-info","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white","navigationBarTitleText":"用户信息"}},{"path":"/pages/news-detail/news-detail","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white","navigationBarTitleText":"资讯详情"}},{"path":"/pages/yonghu/list","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/yonghu/add-or-update","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/yonghu/detail","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/xinwenfenlei/list","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/xinwenfenlei/add-or-update","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/xinwenfenlei/detail","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/jinrixinwen/list","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/jinrixinwen/add-or-update","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/jinrixinwen/detail","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/caogaoxiang/list","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/caogaoxiang/add-or-update","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/caogaoxiang/detail","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/news/list","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/news/add-or-update","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/news/detail","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/storeup/list","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/storeup/add-or-update","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/storeup/detail","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/aboutus/list","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/aboutus/add-or-update","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/aboutus/detail","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/systemintro/list","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/systemintro/add-or-update","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/systemintro/detail","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/discussjinrixinwen/list","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/discussjinrixinwen/add-or-update","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/discussjinrixinwen/detail","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/common/linkOthers/linkOthers","meta":{},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white"}},{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarBackgroundColor":"#36B1AC","navigationBarTextStyle":"white","navigationBarTitleText":"首页"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});