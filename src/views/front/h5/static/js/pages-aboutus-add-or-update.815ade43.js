(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-aboutus-add-or-update"],{"03f5":function(e,t,r){var i=r("8aca");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=r("4f06").default;n("1d3d8ec2",i,!0,{sourceMap:!1,shadowMode:!1})},1172:function(e,t,r){"use strict";var i=r("03f5"),n=r.n(i);n.a},4297:function(e,t,r){"use strict";var i=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("a481"),r("c5f6"),r("f559"),r("ac6a"),r("28a5"),r("96cf");var n=i(r("3b8d")),a=i(r("e2b1")),o=i(r("064f")),s=i(r("bd56")),u={data:function(){return{cross:"",ruleForm:{title:"",subtitle:"",content:"",picture1:"",picture2:"",picture3:""},user:{},ro:{title:!1,subtitle:!1,content:!1,picture1:!1,picture2:!1,picture3:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:s.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(t){var r,i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(i=e.sent,this.user=i.data,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=13;break}return this.ruleForm.id=t.id,e.next=11,this.$api.info("aboutus",this.ruleForm.id);case 11:i=e.sent,this.ruleForm=i.data;case 13:if(this.cross=t.cross,!t.cross){e.next=45;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 17:if((e.t1=e.t0()).done){e.next=45;break}if(a=e.t1.value,"title"!=a){e.next=23;break}return this.ruleForm.title=n[a],this.ro.title=!0,e.abrupt("continue",17);case 23:if("subtitle"!=a){e.next=27;break}return this.ruleForm.subtitle=n[a],this.ro.subtitle=!0,e.abrupt("continue",17);case 27:if("content"!=a){e.next=31;break}return this.ruleForm.content=n[a],this.ro.content=!0,e.abrupt("continue",17);case 31:if("picture1"!=a){e.next=35;break}return this.ruleForm.picture1=n[a].split(",")[0],this.ro.picture1=!0,e.abrupt("continue",17);case 35:if("picture2"!=a){e.next=39;break}return this.ruleForm.picture2=n[a].split(",")[0],this.ro.picture2=!0,e.abrupt("continue",17);case 39:if("picture3"!=a){e.next=43;break}return this.ruleForm.picture3=n[a].split(",")[0],this.ro.picture3=!0,e.abrupt("continue",17);case 43:e.next=17;break;case 45:this.styleChange(),this.$forceUpdate();case 47:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{contentChange:function(e){this.ruleForm.content=e},styleChange:function(){this.$nextTick((function(){}))},picture1Tap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.picture1="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},picture2Tap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.picture2="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},picture3Tap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.picture3="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var t,r,i,n,a,o,s,u,p,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.title){e.next=3;break}return this.$utils.msg("标题不能为空"),e.abrupt("return");case 3:if(this.ruleForm.content){e.next=6;break}return this.$utils.msg("内容不能为空"),e.abrupt("return");case 6:if(!this.cross){e.next=23;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=23;break}if(t||(t=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=19;break}for(s in t)s==a&&(t[s]=o);return u=uni.getStorageSync("crossTable"),e.next=17,this.$api.update("".concat(u),t);case 17:e.next=23;break;case 19:r=Number(uni.getStorageSync("userid")),i=t["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 23:if(!i||!r){e.next=46;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=i,p={page:1,limit:10,crossuserid:r,crossrefid:i},e.next=29,this.$api.list("aboutus",p);case 29:if(c=e.sent,!(c.data.total>=n)){e.next=36;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 36:if(!this.ruleForm.id){e.next=41;break}return e.next=39,this.$api.update("aboutus",this.ruleForm);case 39:e.next=43;break;case 41:return e.next=43,this.$api.add("aboutus",this.ruleForm);case 43:this.$utils.msgBack("提交成功");case 44:e.next=54;break;case 46:if(!this.ruleForm.id){e.next=51;break}return e.next=49,this.$api.update("aboutus",this.ruleForm);case 49:e.next=53;break;case 51:return e.next=53,this.$api.add("aboutus",this.ruleForm);case 53:this.$utils.msgBack("提交成功");case 54:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,r=t.getFullYear(),i=t.getMonth()+1,n=t.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(r,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};t.default=u},"4d2b":function(e,t,r){"use strict";r.r(t);var i=r("4297"),n=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);t["default"]=n.a},7546:function(e,t,r){"use strict";r.r(t);var i=r("8bc5"),n=r("4d2b");for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);r("1172");var o,s=r("f0c5"),u=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"482cb37a",null,!1,i["a"],o);t["default"]=u.exports},"8aca":function(e,t,r){var i=r("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-482cb37a]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=t},"8bc5":function(e,t,r){"use strict";var i={"xia-editor":r("064f").default},n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{style:{minHeight:"100vh",padding:"80rpx 0 160rpx",borderColor:"#21d5ae",background:"url(http://codegen.caihongy.cn/20221230/5dd9030386864bee8dbcc815a8942660.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221230/6c6025ba94804e88a222a9febaaf8c2c.png) no-repeat center bottom / 100% auto,#d5f1f6",borderWidth:"0px 0 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[r("v-uni-form",{staticClass:"app-update-pv",style:{padding:"20rpx 40rpx 60rpx",borderColor:"#b2e2eb",margin:"40rpx auto 0",borderRadius:"20rpx",background:"url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 8rpx 8rpx / 32rpx 32rpx,url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 98% 98% / 32rpx 32rpx,#fff",borderWidth:"12rpx",width:"calc(100% - 64rpx)",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee",margin:"0 0 32rpx",borderColor:"#b2e2eb",borderRadius:"0px",borderWidth:"0px 0px 8rpx",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",lineHeight:"80rpx",borderStyle:"double",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("标题")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#333",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.title,placeholder:"标题"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee",margin:"0 0 32rpx",borderColor:"#b2e2eb",borderRadius:"0px",borderWidth:"0px 0px 8rpx",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",lineHeight:"80rpx",borderStyle:"double",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("副标题")]),r("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#333",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.subtitle,placeholder:"副标题"},model:{value:e.ruleForm.subtitle,callback:function(t){e.$set(e.ruleForm,"subtitle",t)},expression:"ruleForm.subtitle"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee",margin:"0 0 32rpx",borderColor:"#b2e2eb",borderRadius:"0px",borderWidth:"0px 0px 8rpx",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",lineHeight:"80rpx",borderStyle:"double",height:"auto"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.picture1Tap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("图片1")]),e.ruleForm.picture1?r("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:e.baseUrl+e.ruleForm.picture1.split(",")[0],mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee",margin:"0 0 32rpx",borderColor:"#b2e2eb",borderRadius:"0px",borderWidth:"0px 0px 8rpx",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",lineHeight:"80rpx",borderStyle:"double",height:"auto"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.picture2Tap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("图片2")]),e.ruleForm.picture2?r("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:e.baseUrl+e.ruleForm.picture2.split(",")[0],mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),r("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee",margin:"0 0 32rpx",borderColor:"#b2e2eb",borderRadius:"0px",borderWidth:"0px 0px 8rpx",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",lineHeight:"80rpx",borderStyle:"double",height:"auto"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.picture3Tap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("图片3")]),e.ruleForm.picture3?r("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:e.baseUrl+e.ruleForm.picture3.split(",")[0],mode:"aspectFill"}}):r("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),r("v-uni-view",{style:{padding:"12rpx 20rpx",boxShadow:"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee",margin:"0 0 24rpx 0",borderColor:"#b2e2eb",borderRadius:"0px",borderWidth:"0 0 8rpx",background:"#fff",width:"100%",borderStyle:"double",height:"auto"}},[r("v-uni-view",{staticClass:"title",style:{width:"100%",padding:"0 24rpx",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",fontWeight:"500"}},[e._v("内容")]),r("xia-editor",{ref:"editor",style:{minHeight:"240rpx",padding:"24rpx 24rpx 64rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",borderColor:"#c8c8ef",borderRadius:"0px",color:"#555",background:"none",borderWidth:"0px 0px 0px 0px",width:"100%",borderStyle:"dotted dashed solid",height:"auto"},attrs:{placeholder:"内容"},on:{editorChange:function(t){arguments[0]=t=e.$handleEvent(t),e.contentChange.apply(void 0,arguments)}},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}})],1),r("v-uni-view",{staticClass:"btn",style:{width:"100%",margin:"40rpx 0 0 0",justifyContent:"center",display:"flex",height:"auto"}},[r("v-uni-button",{staticClass:"bg-red",style:{padding:"0 40rpx",boxShadow:"0px 0px 0px #cfcfe3",margin:"0 40rpx 0 0",borderColor:"#d7f5f4",color:"#111",display:"inline",minWidth:"212rpx",borderRadius:"8rpx",background:"#8bdcd9",borderWidth:"8rpx 8rpx 8rpx",width:"auto",lineHeight:"72rpx",fontSize:"28rpx",borderStyle:"outset",height:"88rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return i}))}}]);