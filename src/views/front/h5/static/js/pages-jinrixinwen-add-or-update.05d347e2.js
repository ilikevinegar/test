(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-jinrixinwen-add-or-update"],{"21cc":function(e,i,t){"use strict";var r={"xia-editor":t("064f").default},n=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{style:{minHeight:"100vh",padding:"80rpx 0 160rpx",borderColor:"#21d5ae",background:"url(http://codegen.caihongy.cn/20221230/5dd9030386864bee8dbcc815a8942660.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221230/6c6025ba94804e88a222a9febaaf8c2c.png) no-repeat center bottom / 100% auto,#d5f1f6",borderWidth:"0px 0 0",width:"100%",position:"relative",borderStyle:"dashed",height:"auto"}},[t("v-uni-form",{staticClass:"app-update-pv",style:{padding:"20rpx 40rpx 60rpx",borderColor:"#b2e2eb",margin:"40rpx auto 0",borderRadius:"20rpx",background:"url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 8rpx 8rpx / 32rpx 32rpx,url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 98% 98% / 32rpx 32rpx,#fff",borderWidth:"12rpx",width:"calc(100% - 64rpx)",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee",margin:"0 0 32rpx",borderColor:"#b2e2eb",borderRadius:"0px",borderWidth:"0px 0px 8rpx",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",lineHeight:"80rpx",borderStyle:"double",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("标题")]),t("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#333",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.biaoti,placeholder:"标题"},model:{value:e.ruleForm.biaoti,callback:function(i){e.$set(e.ruleForm,"biaoti",i)},expression:"ruleForm.biaoti"}})],1),t("v-uni-view",{staticClass:" select",style:{padding:"0 20rpx 0px",boxShadow:"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee",margin:"0 0 32rpx",borderColor:"#b2e2eb",borderRadius:"0px",borderWidth:"0px 0px 8rpx",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",lineHeight:"80rpx",borderStyle:"double",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("新闻分类")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.xinwenfenleiIndex,range:e.xinwenfenleiOptions},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.xinwenfenleiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{color:"#333",width:"100%",fontSize:"28rpx"}},[e._v(e._s(e.ruleForm.xinwenfenlei?e.ruleForm.xinwenfenlei:"请选择新闻分类"))])],1)],1),t("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee",margin:"0 0 32rpx",borderColor:"#b2e2eb",borderRadius:"0px",borderWidth:"0px 0px 8rpx",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",lineHeight:"80rpx",borderStyle:"double",height:"auto"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.tupianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("图片")]),e.ruleForm.tupian?t("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:e.baseUrl+e.ruleForm.tupian.split(",")[0],mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),t("v-uni-view",{staticClass:" select",style:{padding:"0 20rpx 0px",boxShadow:"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee",margin:"0 0 32rpx",borderColor:"#b2e2eb",borderRadius:"0px",borderWidth:"0px 0px 8rpx",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",lineHeight:"80rpx",borderStyle:"double",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("事发日期")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{mode:"date",value:e.ruleForm.shifariqi},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.shifariqiChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{color:"#333",width:"100%",fontSize:"28rpx"}},[e._v(e._s(e.ruleForm.shifariqi?e.ruleForm.shifariqi:"请选择事发日期"))])],1)],1),t("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee",margin:"0 0 32rpx",borderColor:"#b2e2eb",borderRadius:"0px",borderWidth:"0px 0px 8rpx",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",lineHeight:"80rpx",borderStyle:"double",height:"auto"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.xiangguanshipinTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("相关视频")]),e.ruleForm.xiangguanshipin?t("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#333",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{placeholder:"相关视频"},model:{value:e.baseUrl+e.ruleForm.xiangguanshipin,callback:function(i){e.$set(e.baseUrl+e.ruleForm,"xiangguanshipin",i)},expression:"baseUrl+ruleForm.xiangguanshipin"}}):t("v-uni-image",{staticClass:"avator",style:{width:"72rpx",margin:"12rpx 0",borderRadius:"100%",objectFit:"cover",display:"block",height:"72rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),t("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee",margin:"0 0 32rpx",borderColor:"#b2e2eb",borderRadius:"0px",borderWidth:"0px 0px 8rpx",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",lineHeight:"80rpx",borderStyle:"double",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("事发地点")]),t("v-uni-input",{style:{border:"0",padding:"0px 20rpx",margin:"0px",color:"#333",borderRadius:"8rpx",flex:"1",background:"rgba(255, 255, 255, 0)",fontSize:"28rpx"},attrs:{disabled:e.ro.shifadidian,placeholder:"事发地点"},model:{value:e.ruleForm.shifadidian,callback:function(i){e.$set(e.ruleForm,"shifadidian",i)},expression:"ruleForm.shifadidian"}})],1),t("v-uni-view",{staticClass:" select",style:{padding:"0 20rpx 0px",boxShadow:"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee",margin:"0 0 32rpx",borderColor:"#b2e2eb",borderRadius:"0px",borderWidth:"0px 0px 8rpx",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",lineHeight:"80rpx",borderStyle:"double",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("发布时间")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{mode:"date",value:e.ruleForm.fabushijian},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.fabushijianChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{color:"#333",width:"100%",fontSize:"28rpx"}},[e._v(e._s(e.ruleForm.fabushijian?e.ruleForm.fabushijian:"请选择发布时间"))])],1)],1),t("v-uni-view",{style:{padding:"0 20rpx 0px",boxShadow:"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee",margin:"0 0 32rpx",borderColor:"#b2e2eb",borderRadius:"0px",borderWidth:"0px 0px 8rpx",background:"rgba(255,255,255,.9)",display:"flex",width:"100%",lineHeight:"80rpx",borderStyle:"double",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"auto",padding:"0 20rpx",fontSize:"28rpx",color:"#333",textAlign:"right"}},[e._v("新闻概要")]),t("v-uni-textarea",{style:{border:"0",minHeight:"240rpx",padding:"40rpx 40rpx 64rpx",margin:"0px",color:"#333",borderRadius:"8rpx",flex:"1",background:"#fff",fontSize:"28rpx"},attrs:{placeholder:"新闻概要"},model:{value:e.ruleForm.xinwengaiyao,callback:function(i){e.$set(e.ruleForm,"xinwengaiyao",i)},expression:"ruleForm.xinwengaiyao"}})],1),t("v-uni-view",{style:{padding:"12rpx 20rpx",boxShadow:"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee",margin:"0 0 24rpx 0",borderColor:"#b2e2eb",borderRadius:"0px",borderWidth:"0 0 8rpx",background:"#fff",width:"100%",borderStyle:"double",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"100%",padding:"0 24rpx",lineHeight:"48rpx",fontSize:"28rpx",color:"#333",fontWeight:"500"}},[e._v("新闻详情")]),t("xia-editor",{ref:"editor",style:{minHeight:"240rpx",padding:"24rpx 24rpx 64rpx",boxShadow:"inset 0px 0px 0px 0px #f9edd9",borderColor:"#c8c8ef",borderRadius:"0px",color:"#555",background:"none",borderWidth:"0px 0px 0px 0px",width:"100%",borderStyle:"dotted dashed solid",height:"auto"},attrs:{placeholder:"新闻详情"},on:{editorChange:function(i){arguments[0]=i=e.$handleEvent(i),e.xinwenxiangqingChange.apply(void 0,arguments)}},model:{value:e.ruleForm.xinwenxiangqing,callback:function(i){e.$set(e.ruleForm,"xinwenxiangqing",i)},expression:"ruleForm.xinwenxiangqing"}})],1),t("v-uni-view",{staticClass:"btn",style:{width:"100%",margin:"40rpx 0 0 0",justifyContent:"center",display:"flex",height:"auto"}},[t("v-uni-button",{staticClass:"bg-red",style:{padding:"0 40rpx",boxShadow:"0px 0px 0px #cfcfe3",margin:"0 40rpx 0 0",borderColor:"#d7f5f4",color:"#111",display:"inline",minWidth:"212rpx",borderRadius:"8rpx",background:"#8bdcd9",borderWidth:"8rpx 8rpx 8rpx",width:"auto",lineHeight:"72rpx",fontSize:"28rpx",borderStyle:"outset",height:"88rpx"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];t.d(i,"b",(function(){return n})),t.d(i,"c",(function(){return a})),t.d(i,"a",(function(){return r}))},"3b4e":function(e,i,t){"use strict";t.r(i);var r=t("82bd"),n=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(i,e,(function(){return r[e]}))}(a);i["default"]=n.a},"82bd":function(e,i,t){"use strict";var r=t("4ea4");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("a481"),t("c5f6"),t("f559"),t("ac6a"),t("28a5"),t("96cf");var n=r(t("3b8d")),a=r(t("e2b1")),o=r(t("064f")),s=r(t("bd56")),u={data:function(){return{cross:"",ruleForm:{biaoti:"",xinwenfenlei:"",tupian:"",xinwengaiyao:"",shifariqi:"",xiangguanshipin:"",shifadidian:"",fabushijian:"",xinwenxiangqing:""},xinwenfenleiOptions:[],xinwenfenleiIndex:0,user:{},ro:{biaoti:!1,xinwenfenlei:!1,tupian:!1,xinwengaiyao:!1,shifariqi:!1,xiangguanshipin:!1,shifadidian:!1,fabushijian:!1,xinwenxiangqing:!1,thumbsupnum:!1,crazilynum:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:s.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(i){var t,r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.fabushijian=this.$utils.getCurDate(),t=uni.getStorageSync("nowTable"),e.next=4,this.$api.session(t);case 4:return r=e.sent,this.user=r.data,e.next=8,this.$api.option("xinwenfenlei","xinwenfenlei",{});case 8:if(r=e.sent,this.xinwenfenleiOptions=r.data,this.xinwenfenleiOptions.unshift("请选择新闻分类"),this.ruleForm.userid=uni.getStorageSync("userid"),i.refid&&(this.ruleForm.refid=i.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!i.id){e.next=19;break}return this.ruleForm.id=i.id,e.next=17,this.$api.info("jinrixinwen",this.ruleForm.id);case 17:r=e.sent,this.ruleForm=r.data;case 19:if(this.cross=i.cross,!i.cross){e.next=71;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 23:if((e.t1=e.t0()).done){e.next=71;break}if(a=e.t1.value,"biaoti"!=a){e.next=29;break}return this.ruleForm.biaoti=n[a],this.ro.biaoti=!0,e.abrupt("continue",23);case 29:if("xinwenfenlei"!=a){e.next=33;break}return this.ruleForm.xinwenfenlei=n[a],this.ro.xinwenfenlei=!0,e.abrupt("continue",23);case 33:if("tupian"!=a){e.next=37;break}return this.ruleForm.tupian=n[a].split(",")[0],this.ro.tupian=!0,e.abrupt("continue",23);case 37:if("xinwengaiyao"!=a){e.next=41;break}return this.ruleForm.xinwengaiyao=n[a],this.ro.xinwengaiyao=!0,e.abrupt("continue",23);case 41:if("shifariqi"!=a){e.next=45;break}return this.ruleForm.shifariqi=n[a],this.ro.shifariqi=!0,e.abrupt("continue",23);case 45:if("xiangguanshipin"!=a){e.next=49;break}return this.ruleForm.xiangguanshipin=n[a],this.ro.xiangguanshipin=!0,e.abrupt("continue",23);case 49:if("shifadidian"!=a){e.next=53;break}return this.ruleForm.shifadidian=n[a],this.ro.shifadidian=!0,e.abrupt("continue",23);case 53:if("fabushijian"!=a){e.next=57;break}return this.ruleForm.fabushijian=n[a],this.ro.fabushijian=!0,e.abrupt("continue",23);case 57:if("xinwenxiangqing"!=a){e.next=61;break}return this.ruleForm.xinwenxiangqing=n[a],this.ro.xinwenxiangqing=!0,e.abrupt("continue",23);case 61:if("thumbsupnum"!=a){e.next=65;break}return this.ruleForm.thumbsupnum=n[a],this.ro.thumbsupnum=!0,e.abrupt("continue",23);case 65:if("crazilynum"!=a){e.next=69;break}return this.ruleForm.crazilynum=n[a],this.ro.crazilynum=!0,e.abrupt("continue",23);case 69:e.next=23;break;case 71:this.styleChange(),this.$forceUpdate();case 73:case"end":return e.stop()}}),e,this)})));function i(i){return e.apply(this,arguments)}return i}(),methods:{xinwenxiangqingChange:function(e){this.ruleForm.xinwenxiangqing=e},styleChange:function(){this.$nextTick((function(){}))},shifariqiChange:function(e){this.ruleForm.shifariqi=e.target.value,this.$forceUpdate()},fabushijianChange:function(e){this.ruleForm.fabushijian=e.target.value,this.$forceUpdate()},xinwenfenleiChange:function(e){this.xinwenfenleiIndex=e.target.value,this.ruleForm.xinwenfenlei=this.xinwenfenleiOptions[this.xinwenfenleiIndex]},tupianTap:function(){var e=this;this.$api.upload((function(i){e.ruleForm.tupian="upload/"+i.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},xiangguanshipinTap:function(){var e=this;this.$api.upload((function(i){e.ruleForm.xiangguanshipin="upload/"+i.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var i,t,r,n,a,o,s,u,p,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.ruleForm.thumbsupnum||this.$validate.isIntNumer(this.ruleForm.thumbsupnum)){e.next=3;break}return this.$utils.msg("赞应输入整数"),e.abrupt("return");case 3:if(!this.ruleForm.crazilynum||this.$validate.isIntNumer(this.ruleForm.crazilynum)){e.next=6;break}return this.$utils.msg("踩应输入整数"),e.abrupt("return");case 6:if(!this.cross){e.next=23;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=23;break}if(i||(i=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=19;break}for(s in i)s==a&&(i[s]=o);return u=uni.getStorageSync("crossTable"),e.next=17,this.$api.update("".concat(u),i);case 17:e.next=23;break;case 19:t=Number(uni.getStorageSync("userid")),r=i["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 23:if(!r||!t){e.next=46;break}return this.ruleForm.crossuserid=t,this.ruleForm.crossrefid=r,p={page:1,limit:10,crossuserid:t,crossrefid:r},e.next=29,this.$api.list("jinrixinwen",p);case 29:if(d=e.sent,!(d.data.total>=n)){e.next=36;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 36:if(!this.ruleForm.id){e.next=41;break}return e.next=39,this.$api.update("jinrixinwen",this.ruleForm);case 39:e.next=43;break;case 41:return e.next=43,this.$api.add("jinrixinwen",this.ruleForm);case 43:this.$utils.msgBack("提交成功");case 44:e.next=54;break;case 46:if(!this.ruleForm.id){e.next=51;break}return e.next=49,this.$api.update("jinrixinwen",this.ruleForm);case 49:e.next=53;break;case 51:return e.next=53,this.$api.add("jinrixinwen",this.ruleForm);case 53:this.$utils.msgBack("提交成功");case 54:case"end":return e.stop()}}),e,this)})));function i(){return e.apply(this,arguments)}return i}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var i=new Date,t=i.getFullYear(),r=i.getMonth()+1,n=i.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,n=n>9?n:"0"+n,"".concat(t,"-").concat(r,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};i.default=u},8516:function(e,i,t){"use strict";var r=t("8c2c"),n=t.n(r);n.a},"8c2c":function(e,i,t){var r=t("936d");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=t("4f06").default;n("15835f02",r,!0,{sourceMap:!1,shadowMode:!1})},"936d":function(e,i,t){var r=t("24fb");i=r(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-34107c25]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=i},c466:function(e,i,t){"use strict";t.r(i);var r=t("21cc"),n=t("3b4e");for(var a in n)"default"!==a&&function(e){t.d(i,e,(function(){return n[e]}))}(a);t("8516");var o,s=t("f0c5"),u=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"34107c25",null,!1,r["a"],o);i["default"]=u.exports}}]);