<template>
<view class="content">
	<view :style='{"minHeight":"100vh","padding":"80rpx 0 160rpx","borderColor":"#21d5ae","background":"url(http://codegen.caihongy.cn/20221230/5dd9030386864bee8dbcc815a8942660.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221230/6c6025ba94804e88a222a9febaaf8c2c.png) no-repeat center bottom / 100% auto,#d5f1f6","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
		<form :style='{"padding":"20rpx 40rpx 60rpx","borderColor":"#b2e2eb","margin":"40rpx auto 0","borderRadius":"20rpx","background":"url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 8rpx 8rpx / 32rpx 32rpx,url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 98% 98% / 32rpx 32rpx,#fff","borderWidth":"12rpx","width":"calc(100% - 64rpx)","borderStyle":"solid","height":"auto"}' class="app-update-pv">
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"double","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">用户账号</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.yonghuzhanghao" v-model="ruleForm.yonghuzhanghao" placeholder="用户账号"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"double","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">用户姓名</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.yonghuxingming" v-model="ruleForm.yonghuxingming" placeholder="用户姓名"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"double","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">密码</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.mima" v-model="ruleForm.mima" placeholder="密码"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"double","height":"auto"}' class=" select">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">性别</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}' @change="xingbieChange" :value="xingbieIndex"  :range="xingbieOptions">
					<view :style='{"color":"#333","width":"100%","fontSize":"28rpx"}' class="uni-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"double","height":"auto"}' class="" @tap="touxiangTap">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">头像</view>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-if="ruleForm.touxiang" :src="baseUrl+ruleForm.touxiang.split(',')[0]" mode="aspectFill"></image>
				<image :style='{"width":"72rpx","margin":"12rpx 0","borderRadius":"100%","objectFit":"cover","display":"block","height":"72rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"double","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">电话号码</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.dianhuahaoma" v-model="ruleForm.dianhuahaoma" placeholder="电话号码"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"double","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">职业</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.zhiye" v-model="ruleForm.zhiye" placeholder="职业"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"double","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">企业名称</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.qiyemingcheng" v-model="ruleForm.qiyemingcheng" placeholder="企业名称"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.9)","display":"flex","width":"100%","lineHeight":"80rpx","borderStyle":"double","height":"auto"}' class="">
				<view :style='{"width":"auto","padding":"0 20rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">邮箱</view>
				<input :style='{"border":"0","padding":"0px 20rpx","margin":"0px","color":"#333","borderRadius":"8rpx","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx"}' :disabled="ro.youxiang" v-model="ruleForm.youxiang" placeholder="邮箱"></input>
			</view>
			
			<!-- 否 -->
 

			
			
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
				yonghuzhanghao: '',
				yonghuxingming: '',
				mima: '',
				xingbie: '',
				touxiang: '',
				dianhuahaoma: '',
				zhiye: '',
				qiyemingcheng: '',
				youxiang: '',
				},
				xingbieOptions: [],
				xingbieIndex: 0,
				// 登录用户信息
				user: {},
                ro:{
                   yonghuzhanghao : false,
                   yonghuxingming : false,
                   mima : false,
                   xingbie : false,
                   touxiang : false,
                   dianhuahaoma : false,
                   zhiye : false,
                   qiyemingcheng : false,
                   youxiang : false,
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
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取


			// 自定义下拉框值
			this.xingbieOptions = "男,女".split(',')

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
				res = await this.$api.info(`yonghu`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='yonghuzhanghao'){
					this.ruleForm.yonghuzhanghao = obj[o];
					this.ro.yonghuzhanghao = true;
					continue;
					}
					if(o=='yonghuxingming'){
					this.ruleForm.yonghuxingming = obj[o];
					this.ro.yonghuxingming = true;
					continue;
					}
					if(o=='mima'){
					this.ruleForm.mima = obj[o];
					this.ro.mima = true;
					continue;
					}
					if(o=='xingbie'){
					this.ruleForm.xingbie = obj[o];
					this.ro.xingbie = true;
					continue;
					}
					if(o=='touxiang'){
					this.ruleForm.touxiang = obj[o].split(",")[0];
					this.ro.touxiang = true;
					continue;
					}
					if(o=='dianhuahaoma'){
					this.ruleForm.dianhuahaoma = obj[o];
					this.ro.dianhuahaoma = true;
					continue;
					}
					if(o=='zhiye'){
					this.ruleForm.zhiye = obj[o];
					this.ro.zhiye = true;
					continue;
					}
					if(o=='qiyemingcheng'){
					this.ruleForm.qiyemingcheng = obj[o];
					this.ro.qiyemingcheng = true;
					continue;
					}
					if(o=='youxiang'){
					this.ruleForm.youxiang = obj[o];
					this.ro.youxiang = true;
					continue;
					}
				}
			}
			this.styleChange()
            this.$forceUpdate()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv . .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数



			// 下拉变化
			xingbieChange(e) {
				this.xingbieIndex = e.target.value
				this.ruleForm.xingbie = this.xingbieOptions[this.xingbieIndex]
			},

			touxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'upload/' + res.file;
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
				if((!this.ruleForm.yonghuzhanghao)){
					this.$utils.msg(`用户账号不能为空`);
					return
				}
				if((!this.ruleForm.yonghuxingming)){
					this.$utils.msg(`用户姓名不能为空`);
					return
				}
				if((!this.ruleForm.mima)){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if(this.ruleForm.dianhuahaoma&&(!this.$validate.isMobile(this.ruleForm.dianhuahaoma))){
					this.$utils.msg(`电话号码应输入手机格式`);
					return
				}
				if(this.ruleForm.youxiang&&(!this.$validate.isEmail(this.ruleForm.youxiang))){
					this.$utils.msg(`邮箱应输入邮件格式`);
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
					let res = await this.$api.list(`yonghu`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
                        uni.removeStorageSync('crossCleanType');
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`yonghu`, this.ruleForm);
						}else{
							await this.$api.add(`yonghu`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`yonghu`, this.ruleForm);
					}else{
						await this.$api.add(`yonghu`, this.ruleForm);
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
