<template>
<view class="content">
	<view class="box" :style='{"minHeight":"100vh","padding":"80rpx 0 160rpx","borderColor":"#21d5ae","background":"url(http://codegen.caihongy.cn/20221230/5dd9030386864bee8dbcc815a8942660.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221230/6c6025ba94804e88a222a9febaaf8c2c.png) no-repeat center bottom / 100% auto,#d5f1f6","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
		<view :style='{"padding":"20rpx 40rpx 60rpx","borderColor":"#b2e2eb","margin":"40rpx auto 0","borderRadius":"20rpx","background":"url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 8rpx 8rpx / 32rpx 32rpx,url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 98% 98% / 32rpx 32rpx,#fff","borderWidth":"12rpx","display":"block","width":"calc(100% - 64rpx)","borderStyle":"solid","height":"auto"}'>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.0)","width":"100%","borderStyle":"double","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"width":"auto","padding":"0 20rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>用户账号</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#333","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}' disabled="true"  v-model="ruleForm.yonghuzhanghao" placeholder="用户账号"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.0)","width":"100%","borderStyle":"double","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"width":"auto","padding":"0 20rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>用户姓名</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#333","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.yonghuxingming" placeholder="用户姓名"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.0)","width":"100%","borderStyle":"double","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"width":"auto","padding":"0 20rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>密码</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#333","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'  type="password" v-model="ruleForm.mima" placeholder="密码"></input>
			</view>
			<view v-if="tableName=='yonghu'" :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.0)","width":"100%","borderStyle":"double","height":"auto"}' class=" select">
				<view :style='{"width":"auto","padding":"0 20rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}' class="title">性别</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="yonghuxingbieChange" :value="yonghuxingbieIndex" :range="yonghuxingbieOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#333"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.0)","width":"100%","borderStyle":"double","height":"auto"}' v-if="tableName=='yonghu'" @tap="yonghutouxiangTap" class="">
				<view class="title" :style='{"width":"auto","padding":"0 20rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>头像</view>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="ruleForm.touxiang" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-else class="avator" style="margin: 0;" src="../../static/gen/upload.png" mode=""></image>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.0)","width":"100%","borderStyle":"double","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"width":"auto","padding":"0 20rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>电话号码</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#333","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.dianhuahaoma" placeholder="电话号码"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.0)","width":"100%","borderStyle":"double","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"width":"auto","padding":"0 20rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>职业</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#333","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.zhiye" placeholder="职业"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.0)","width":"100%","borderStyle":"double","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"width":"auto","padding":"0 20rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>企业名称</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#333","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.qiyemingcheng" placeholder="企业名称"></input>
			</view>
			<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","margin":"0 0 32rpx","borderColor":"#b2e2eb","alignItems":"center","display":"flex","minHeight":"80rpx","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,.0)","width":"100%","borderStyle":"double","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"width":"auto","padding":"0 20rpx","lineHeight":"80rpx","fontSize":"28rpx","color":"#333","textAlign":"right"}'>邮箱</view>
				<input :style='{"border":"0","padding":"0px 24rpx","margin":"0px","color":"#333","borderRadius":"0px","flex":"1","background":"rgba(255, 255, 255, 0)","fontSize":"28rpx","height":"80rpx"}'   v-model="ruleForm.youxiang" placeholder="邮箱"></input>
			</view>
			<view :style='{"width":"100%","margin":"64rpx 0 0","justifyContent":"center","display":"flex","height":"auto"}' class="btn">
				<button @tap="update()" class="cu-btn lg" :style='{"padding":"0 40rpx","boxShadow":"0px 0px 0px #b3d7cb","margin":"0 20rpx","borderColor":"#d7f5f4","color":"#111","minWidth":"212rpx","borderRadius":"8rpx","background":"#8bdcd9","borderWidth":"8rpx 8rpx 8rpx","width":"auto","lineHeight":"72rpx","fontSize":"28rpx","borderStyle":"outset","height":"88rpx"}'>保存</button>
				<button @tap="logout()" class="cu-btn lg" :style='{"padding":"0 40rpx","boxShadow":"0px 0px 0px #ddd","margin":"0 20rpx","borderColor":"#eee","color":"#333","minWidth":"200rpx","borderRadius":"8rpx","background":"#ccc","borderWidth":"8rpx 8rpx 8rpx","width":"auto","lineHeight":"72rpx","fontSize":"28rpx","borderStyle":"inset","height":"88rpx"}'>退出登录</button>
			</view>
		</view>
	</view>
</view>
</template>

<script>
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
				ruleForm: {
				},
				tableName:"",
				yonghuxingbieOptions: [],
				yonghuxingbieIndex: 0,
			}
		},
        components: {
            multipleSelect
        },
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad() {
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.ruleForm = res.data;
			this.tableName = table;
			// 自定义下拉框值
			if(this.tableName=='yonghu'){
				this.yonghuxingbieOptions = "男,女".split(',');
				this.yonghuxingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.yonghuxingbieIndex = index;
					}
				});
			}
			this.styleChange()
            this.$forceUpdate()
		},
		methods: {
            // 下拉变化
            yonghuxingbieChange(e) {
                    this.yonghuxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.yonghuxingbieOptions[this.yonghuxingbieIndex]
            },
			yonghutouxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'upload/' + res.file;
					_this.$forceUpdate();
				});
			},

            toggleTab(str) {
                this.$refs[str].show();
            },

			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('. .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.userInfoForm.list.input.backgroundColor
					// })
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			logout() {
				uni.setStorageSync('token', '');
				this.$utils.jump('../login/login');
			},
			// 注册
			async update() {
				if((!this.ruleForm.yonghuzhanghao) && `yonghu` == this.tableName){
					this.$utils.msg(`用户账号不能为空`);
					return
				}
				if((!this.ruleForm.yonghuxingming) && `yonghu` == this.tableName){
					this.$utils.msg(`用户姓名不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `yonghu` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if(`yonghu` == this.tableName && this.ruleForm.dianhuahaoma&&(!this.$validate.isMobile(this.ruleForm.dianhuahaoma))){
					this.$utils.msg(`电话号码应输入手机格式`);
					return
				}
				if(`yonghu` == this.tableName && this.ruleForm.youxiang&&(!this.$validate.isEmail(this.ruleForm.youxiang))){
					this.$utils.msg(`邮箱应输入邮件格式`);
					return
				}
				let table = uni.getStorageSync("nowTable");
				await this.$api.update(table, this.ruleForm);
				this.$utils.msgBack('修改成功');;
			},

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
