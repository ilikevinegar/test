<template>
<view class="content">
	<view :style='{"minHeight":"100vh","padding":"80rpx 0 160rpx","borderColor":"#21d5ae","background":"url(http://codegen.caihongy.cn/20221230/5dd9030386864bee8dbcc815a8942660.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221230/6c6025ba94804e88a222a9febaaf8c2c.png) no-repeat center bottom / 100% auto,#d5f1f6","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
		<form :style='{"padding":"20rpx 40rpx 60rpx","borderColor":"#b2e2eb","margin":"40rpx auto 0","borderRadius":"20rpx","background":"url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 8rpx 8rpx / 32rpx 32rpx,url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 98% 98% / 32rpx 32rpx,#fff","borderWidth":"12rpx","width":"calc(100% - 64rpx)","borderStyle":"solid","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"double","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">标题</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.biaoti" v-model="ruleForm.biaoti" placeholder="标题"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"double","height":"auto"}' class=" select">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">新闻分类</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="xinwenfenleiChange" :value="xinwenfenleiIndex"  :range="xinwenfenleiOptions">
					<view :style='{"color":"#333","width":"100%","fontSize":"28rpx"}' class="uni-input">{{ruleForm.xinwenfenlei?ruleForm.xinwenfenlei:"请选择新闻分类"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"double","height":"auto"}' class="" @tap="tupianTap">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">图片</view>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-if="ruleForm.tupian" :src="baseUrl+ruleForm.tupian.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"double","height":"auto"}' class=" select">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">事发日期</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' mode="date" :value="ruleForm.shifariqi" @change="shifariqiChange">
					<view :style='{"color":"#333","width":"100%","fontSize":"28rpx"}' class="uni-input">{{ruleForm.shifariqi?ruleForm.shifariqi:"请选择事发日期"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"double","height":"auto"}' class="" @tap="xiangguanshipinTap">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">相关视频</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' v-if="ruleForm.xiangguanshipin"  v-model="baseUrl+ruleForm.xiangguanshipin" placeholder="相关视频"></input>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"double","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">事发地点</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.shifadidian" v-model="ruleForm.shifadidian" placeholder="事发地点"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"double","height":"auto"}' class=" select">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">发布时间</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' mode="date" :value="ruleForm.fabushijian" @change="fabushijianChange">
					<view :style='{"color":"#333","width":"100%","fontSize":"28rpx"}' class="uni-input">{{ruleForm.fabushijian?ruleForm.fabushijian:"请选择发布时间"}}</view>
				</picker>
			</view>
			
			<!-- 否 -->
 

			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"double","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">新闻概要</view>
				<textarea :style='{"border":"0","minHeight":"240rpx","padding":"40rpx 40rpx 64rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"#fff","fontSize":"28rpx"}' v-model="ruleForm.xinwengaiyao" placeholder="新闻概要"></textarea>
			</view>
			
			<view :style='{"padding":"12rpx 20rpx","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 24rpx 0","borderColor":"#b2e2eb","borderRadius":"0px","borderWidth":"0 0 8rpx","background":"#fff","width":"100%","borderStyle":"double","height":"auto"}' class="">
				<view :style='{"width":"100%","padding":"0 24rpx","lineHeight":"48rpx","fontSize":"28rpx","color":"#333","fontWeight":"500"}' class="title">新闻详情</view>
                <xia-editor ref="editor" :style='{"minHeight":"240rpx","padding":"24rpx 24rpx 64rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","borderColor":"#c8c8ef","borderRadius":"0px","color":"#555","background":"none","borderWidth":"0px 0px 0px 0px","width":"100%","borderStyle":"dotted dashed solid","height":"auto"}' v-model="ruleForm.xinwenxiangqing" placeholder="新闻详情" @editorChange="xinwenxiangqingChange"></xia-editor>
			</view>
			
			<view :style='{"width":"100%","margin":"40rpx 0 0 0","justifyContent":"center","display":"flex","height":"auto"}' class="btn" >
				<button :style='{"padding":"0 40rpx","boxShadow":"0px 0px 0px #cfcfe3","margin":"0 40rpx 0 0","borderColor":"#d7f5f4","color":"#111","display":"inline","minWidth":"212rpx","borderRadius":"8rpx","background":"#8bdcd9","borderWidth":"8rpx 8rpx 8rpx","width":"auto","lineHeight":"72rpx","fontSize":"28rpx","borderStyle":"outset","height":"88rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

	</view>
</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";
    import xiaEditor from '@/components/xia-editor/xia-editor';
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				biaoti: '',
				xinwenfenlei: '',
				tupian: '',
				xinwengaiyao: '',
				shifariqi: '',
				xiangguanshipin: '',
				shifadidian: '',
				fabushijian: '',
				xinwenxiangqing: '',
				},
				xinwenfenleiOptions: [],
				xinwenfenleiIndex: 0,
				// 登录用户信息
				user: {},
                ro:{
                   biaoti : false,
                   xinwenfenlei : false,
                   tupian : false,
                   xinwengaiyao : false,
                   shifariqi : false,
                   xiangguanshipin : false,
                   shifadidian : false,
                   fabushijian : false,
                   xinwenxiangqing : false,
                   thumbsupnum : false,
                   crazilynum : false,
                },
			}
		},
		components: {
			wPicker,
            xiaEditor,
            multipleSelect
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
            this.ruleForm.fabushijian = this.$utils.getCurDate();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取


			// 下拉框
			res = await this.$api.option(`xinwenfenlei`,`xinwenfenlei`,{});
			this.xinwenfenleiOptions = res.data;
            this.xinwenfenleiOptions.unshift("请选择新闻分类");

			// 如果有登录，获取登录后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`jinrixinwen`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='biaoti'){
					this.ruleForm.biaoti = obj[o];
					this.ro.biaoti = true;
					continue;
					}
					if(o=='xinwenfenlei'){
					this.ruleForm.xinwenfenlei = obj[o];
					this.ro.xinwenfenlei = true;
					continue;
					}
					if(o=='tupian'){
					this.ruleForm.tupian = obj[o].split(",")[0];
					this.ro.tupian = true;
					continue;
					}
					if(o=='xinwengaiyao'){
					this.ruleForm.xinwengaiyao = obj[o];
					this.ro.xinwengaiyao = true;
					continue;
					}
					if(o=='shifariqi'){
					this.ruleForm.shifariqi = obj[o];
					this.ro.shifariqi = true;
					continue;
					}
					if(o=='xiangguanshipin'){
					this.ruleForm.xiangguanshipin = obj[o];
					this.ro.xiangguanshipin = true;
					continue;
					}
					if(o=='shifadidian'){
					this.ruleForm.shifadidian = obj[o];
					this.ro.shifadidian = true;
					continue;
					}
					if(o=='fabushijian'){
					this.ruleForm.fabushijian = obj[o];
					this.ro.fabushijian = true;
					continue;
					}
					if(o=='xinwenxiangqing'){
					this.ruleForm.xinwenxiangqing = obj[o];
					this.ro.xinwenxiangqing = true;
					continue;
					}
					if(o=='thumbsupnum'){
					this.ruleForm.thumbsupnum = obj[o];
					this.ro.thumbsupnum = true;
					continue;
					}
					if(o=='crazilynum'){
					this.ruleForm.crazilynum = obj[o];
					this.ro.crazilynum = true;
					continue;
					}
				}
			}
			this.styleChange()
            this.$forceUpdate()
		},
		methods: {
            xinwenxiangqingChange(e) {
                this.ruleForm.xinwenxiangqing = e
            },
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数

			shifariqiChange(e) {
				this.ruleForm.shifariqi = e.target.value;
				this.$forceUpdate();
			},
			fabushijianChange(e) {
				this.ruleForm.fabushijian = e.target.value;
				this.$forceUpdate();
			},


			// 下拉变化
			xinwenfenleiChange(e) {
				this.xinwenfenleiIndex = e.target.value
				this.ruleForm.xinwenfenlei = this.xinwenfenleiOptions[this.xinwenfenleiIndex]
			},

			tupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.tupian = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},
			xiangguanshipinTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.xiangguanshipin = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {























//跨表计算判断
				var obj;
				if(this.ruleForm.thumbsupnum&&(!this.$validate.isIntNumer(this.ruleForm.thumbsupnum))){
					this.$utils.msg(`赞应输入整数`);
					return
				}
				if(this.ruleForm.crazilynum&&(!this.$validate.isIntNumer(this.ruleForm.crazilynum))){
					this.$utils.msg(`踩应输入整数`);
					return
				}
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
                    uni.setStorageSync('crossCleanType',true);
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
                        if(!obj) {
						    obj = uni.getStorageSync('crossObj');
                        }
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`jinrixinwen`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
                        uni.removeStorageSync('crossCleanType');
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`jinrixinwen`, this.ruleForm);
						}else{
							await this.$api.add(`jinrixinwen`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`jinrixinwen`, this.ruleForm);
					}else{
						await this.$api.add(`jinrixinwen`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
