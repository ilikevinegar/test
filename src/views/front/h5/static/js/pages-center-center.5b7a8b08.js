(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-center"],{"27ae":function(e,n,r){"use strict";r.r(n);var t=r("55b4"),i=r.n(t);for(var a in t)"default"!==a&&function(e){r.d(n,e,(function(){return t[e]}))}(a);n["default"]=i.a},"55b4":function(e,n,r){"use strict";var t=r("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,r("96cf");var i=t(r("3b8d")),a=t(r("2971")),o={data:function(){return{isH5Plus:!0,user:{},tableName:"",role:"",menuList:[],iconArr:["cuIcon-same","cuIcon-deliver","cuIcon-evaluate","cuIcon-shop","cuIcon-ticket","cuIcon-cascades","cuIcon-discover","cuIcon-question","cuIcon-pic","cuIcon-filter","cuIcon-footprint","cuIcon-pulldown","cuIcon-pullup","cuIcon-moreandroid","cuIcon-refund","cuIcon-qrcode","cuIcon-remind","cuIcon-profile","cuIcon-home","cuIcon-message","cuIcon-link","cuIcon-lock","cuIcon-unlock","cuIcon-vip","cuIcon-weibo","cuIcon-activity","cuIcon-friendadd","cuIcon-friendfamous","cuIcon-friend","cuIcon-goods","cuIcon-selection"]}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var n,r,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.role=uni.getStorageSync("role"),n=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(n);case 4:r=e.sent,this.user=r.data,this.tableName=n,t=a.default.list(),this.menuList=t;case 9:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),onShow:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){var n,r,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.removeStorageSync("useridTag"),this.role=uni.getStorageSync("role"),n=uni.getStorageSync("nowTable"),e.next=5,this.$api.session(n);case 5:r=e.sent,this.user=r.data,this.tableName=n,t=a.default.list(),this.menuList=t;case 10:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),methods:{onPageTap:function(e){uni.setStorageSync("useridTag",1),uni.navigateTo({url:e,fail:function(){uni.switchTab({url:e})}})}}};n.default=o},"65ef":function(e,n,r){"use strict";var t,i=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{padding:"80rpx 0 160rpx",borderColor:"#21d5ae",alignItems:"stretch",display:"block",minHeight:"100vh",overflow:"hidden",flexWrap:"wrap",background:"url(http://codegen.caihongy.cn/20221230/5dd9030386864bee8dbcc815a8942660.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221230/6c6025ba94804e88a222a9febaaf8c2c.png) no-repeat center bottom / 100% auto,#d5f1f6",borderWidth:"0px 0 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[r("v-uni-view",{staticClass:"header",class:{status:e.isH5Plus},style:{padding:"0px 0 20rpx",boxShadow:"inset 0px 0px 0px 0px #f7dcab",margin:"40rpx auto 40rpx",borderColor:"#c8c8ef",display:"flex",justifyContent:"space-between",borderRadius:"0",flexWrap:"wrap",background:"none",borderWidth:"0px 0px 0px 0px",width:"calc(100% - 60rpx)",borderStyle:"dotted dashed solid",height:"auto",order:"2"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.onPageTap("../user-info/user-info")}}},["yonghu"==e.tableName?r("v-uni-view",{staticClass:"userinfo",style:{padding:"0",margin:"0",alignItems:"flex-start",flexWrap:"wrap",background:"none",display:"block",width:"calc(100% - 220rpx)",position:"relative",height:"auto",order:"2"}},[r("v-uni-image",{style:{padding:"0px",margin:"20rpx 0 20rpx",borderColor:"#1bd0a9",objectFit:"cover",textAlign:"center",borderRadius:"100%",top:"0",left:"-200rpx",background:"none",borderWidth:"0px 0px 0px",width:"160rpx",position:"absolute",borderStyle:"solid",height:"160rpx",zIndex:"19999"},attrs:{src:e.user.touxiang?e.baseUrl+e.user.touxiang:"/static/gen/upload.png"}}),r("v-uni-view",{staticClass:"info",style:{padding:"20rpx 24rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"0 auto",borderColor:"#b2e2eb",flexDirection:"column",display:"flex",float:"right",justifyContent:"center",minHeight:"280rpx",borderRadius:"24rpx",background:"url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 8rpx 8rpx / 24rpx 24rpx,url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 98% 94% / 24rpx 24rpx,radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(224,255,254,1) 100%)",borderWidth:"12rpx 12rpx 12rpx 12rpx",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{style:{padding:"4rpx 20rpx",boxShadow:"inset 0px 0px 0px 0px #ffaeae",borderColor:"#2dca96",margin:"0 0 0px",color:"#333",borderWidth:"0 0 0px",background:"none",width:"100%",lineHeight:"48rpx",fontSize:"24rpx",borderStyle:"solid"}},[e._v(e._s(e.user.yonghuzhanghao)),e.user.vip&&"是"==e.user.vip?r("v-uni-text",[e._v("(VIP)")]):e._e()],1)],1)],1):e._e(),r("v-uni-view",{staticClass:"setting",style:{padding:"170rpx 0 0",margin:"0px 20rpx 0 0px",borderColor:"#1bd0a9",alignItems:"flex-start",borderRadius:"24rpx",background:"rgba(255,255,255,.0)",borderWidth:"0px 0px 0px",display:"flex",width:"200rpx",borderStyle:"solid",justifyContent:"center",height:"auto"}},[r("v-uni-view",{staticClass:"cuIcon-settings",style:{border:"0",borderColor:"#a2a2e5",color:"#333",borderRadius:"100%",textAlign:"center",background:"rgba(255,255,255,0)",borderWidth:"0px",width:"160rpx",fontSize:"80rpx",lineHeight:"140rpx",borderStyle:"inset",height:"160rpx"}})],1)],1),r("v-uni-view",{staticClass:"list",style:{padding:"20rpx 40rpx 60rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",margin:"40rpx 32rpx 0",borderColor:"#b2e2eb",alignItems:"flex-start",display:"flex",justifyContent:"space-between",borderRadius:"20rpx",flexWrap:"wrap",background:"url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 16rpx 16rpx / 32rpx 32rpx,url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 98% 98% / 32rpx 32rpx,rgba(255,255,255,1)",borderWidth:"12rpx",width:"calc(100% - 64rpx)",borderStyle:"solid",height:"auto"}},[e._l(e.menuList,(function(n){return[e._l(n.backMenu,(function(t,i){return e.role==n.roleName?[e._l(t.child,(function(n,t){return["yifahuodingdan"!=n.tableName&&"yituikuandingdan"!=n.tableName&&"yiquxiaodingdan"!=n.tableName&&"weizhifudingdan"!=n.tableName&&"yizhifudingdan"!=n.tableName&&"yiwanchengdingdan"!=n.tableName&&"exampaper"!=n.tableName&&"examquestion"!=n.tableName?r("v-uni-view",{key:t+"_0",staticClass:"li",style:{padding:"0 20rpx 0px",boxShadow:"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee",borderColor:"#b2e2eb",margin:"0 auto 8rpx",whiteSpace:"nowrap",alignItems:"center",display:"flex",overflow:"hidden",borderRadius:"0px",borderWidth:"0px 0px 8rpx",background:"rgba(255,255,255,0)",width:"100%",lineHeight:"88rpx",textOverflow:"ellipsis",borderStyle:"double",height:"88rpx"},attrs:{"hover-class":"hover"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onPageTap("../"+n.tableName+"/list?userid="+e.user.id+"&menuJump="+n.menuJump)}}},[r("v-uni-view",{class:n.appFrontIcon,style:{width:"48rpx",lineHeight:"48rpx",fontSize:"48rpx",color:"#36B1AC"}}),r("v-uni-view",{staticClass:"text",style:{width:"100%",padding:"0 20rpx",fontSize:"28rpx",color:"#333",flex:"1"}},[e._v(e._s(n.menu))]),r("v-uni-view",{staticClass:"cuIcon-right",style:{width:"28rpx",lineHeight:"28rpx",fontSize:"28rpx",color:"#555"}})],1):e._e()]}))]:e._e()}))]}))],2)],1)],1)},a=[];r.d(n,"b",(function(){return i})),r.d(n,"c",(function(){return a})),r.d(n,"a",(function(){return t}))},"6ca8":function(e,n,r){"use strict";var t=r("918e"),i=r.n(t);i.a},"918e":function(e,n,r){var t=r("acd8");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var i=r("4f06").default;i("392ba6e6",t,!0,{sourceMap:!1,shadowMode:!1})},acd8:function(e,n,r){var t=r("24fb");n=t(!1),n.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-60c72194]{height:calc(100vh - 94px);box-sizing:border-box}',""]),e.exports=n},d2c0:function(e,n,r){"use strict";r.r(n);var t=r("65ef"),i=r("27ae");for(var a in i)"default"!==a&&function(e){r.d(n,e,(function(){return i[e]}))}(a);r("6ca8");var o,c=r("f0c5"),d=Object(c["a"])(i["default"],t["b"],t["c"],!1,null,"60c72194",null,!1,t["a"],o);n["default"]=d.exports}}]);