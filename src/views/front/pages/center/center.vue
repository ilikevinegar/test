<template>
	<view class="content">
		<view :style='{"padding":"80rpx 0 160rpx","borderColor":"#21d5ae","alignItems":"stretch","display":"block","minHeight":"100vh","overflow":"hidden","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221230/5dd9030386864bee8dbcc815a8942660.png) no-repeat center top / 100% auto,url(http://codegen.caihongy.cn/20221230/6c6025ba94804e88a222a9febaaf8c2c.png) no-repeat center bottom / 100% auto,#d5f1f6","borderWidth":"0px 0 0","width":"100%","position":"relative","borderStyle":"dashed","height":"auto"}'>
			<view :style='{"padding":"0px 0 20rpx","boxShadow":"inset 0px 0px 0px 0px #f7dcab","margin":"40rpx auto 40rpx","borderColor":"#c8c8ef","display":"flex","justifyContent":"space-between","borderRadius":"0","flexWrap":"wrap","background":"none","borderWidth":"0px 0px 0px 0px","width":"calc(100% - 60rpx)","borderStyle":"dotted dashed solid","height":"auto","order":"2"}' @tap="onPageTap('../user-info/user-info')" class="header" v-bind:class="{'status':isH5Plus}">
				<view :style='{"padding":"0","margin":"0","alignItems":"flex-start","flexWrap":"wrap","background":"none","display":"block","width":"calc(100% - 220rpx)","position":"relative","height":"auto","order":"2"}' v-if="tableName=='yonghu'" class="userinfo">
					<image :style='{"padding":"0px","margin":"20rpx 0 20rpx","borderColor":"#1bd0a9","objectFit":"cover","textAlign":"center","borderRadius":"100%","top":"0","left":"-200rpx","background":"none","borderWidth":"0px 0px 0px","width":"160rpx","position":"absolute","borderStyle":"solid","height":"160rpx","zIndex":"19999"}' :src="user.touxiang?baseUrl+user.touxiang:'/static/gen/upload.png'"></image>
					<view :style='{"padding":"20rpx 24rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"0 auto","borderColor":"#b2e2eb","flexDirection":"column","display":"flex","float":"right","justifyContent":"center","minHeight":"280rpx","borderRadius":"24rpx","background":"url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 8rpx 8rpx / 24rpx 24rpx,url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 98% 94% / 24rpx 24rpx,radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(224,255,254,1) 100%)","borderWidth":"12rpx 12rpx 12rpx 12rpx","width":"100%","borderStyle":"solid","height":"auto"}' class="info">
						<view :style='{"padding":"4rpx 20rpx","boxShadow":"inset 0px 0px 0px 0px #ffaeae","borderColor":"#2dca96","margin":"0 0 0px","color":"#333","borderWidth":"0 0 0px","background":"none","width":"100%","lineHeight":"48rpx","fontSize":"24rpx","borderStyle":"solid"}'>{{user.yonghuzhanghao}}<text v-if="user.vip&& user.vip=='是'">(VIP)</text></view>
					</view>
				</view>
				<view :style='{"padding":"170rpx 0 0","margin":"0px 20rpx 0 0px","borderColor":"#1bd0a9","alignItems":"flex-start","borderRadius":"24rpx","background":"rgba(255,255,255,.0)","borderWidth":"0px 0px 0px","display":"flex","width":"200rpx","borderStyle":"solid","justifyContent":"center","height":"auto"}' class="setting">
					<view :style='{"border":"0","borderColor":"#a2a2e5","color":"#333","borderRadius":"100%","textAlign":"center","background":"rgba(255,255,255,0)","borderWidth":"0px","width":"160rpx","fontSize":"80rpx","lineHeight":"140rpx","borderStyle":"inset","height":"160rpx"}' class="cuIcon-settings"></view>
				</view>
			</view>
		
		
			<view :style='{"padding":"20rpx 40rpx 60rpx","boxShadow":"inset 0px 0px 0px 0px #f9edd9","margin":"40rpx 32rpx 0","borderColor":"#b2e2eb","alignItems":"flex-start","display":"flex","justifyContent":"space-between","borderRadius":"20rpx","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 16rpx 16rpx / 32rpx 32rpx,url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 98% 98% / 32rpx 32rpx,rgba(255,255,255,1)","borderWidth":"12rpx","width":"calc(100% - 64rpx)","borderStyle":"solid","height":"auto"}' class="list">

				<block v-for="item in menuList" v-bind:key="item.roleName">
					<block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.backMenu">
						<block v-bind:key="sort" v-for=" (child,sort) in menu.child">
							<view :style='{"padding":"0 20rpx 0px","boxShadow":"0px 0px 0px #bbb,inset 0px 0px 0px 0px #eee","borderColor":"#b2e2eb","margin":"0 auto 8rpx","whiteSpace":"nowrap","alignItems":"center","display":"flex","overflow":"hidden","borderRadius":"0px","borderWidth":"0px 0px 8rpx","background":"rgba(255,255,255,0)","width":"100%","lineHeight":"88rpx","textOverflow":"ellipsis","borderStyle":"double","height":"88rpx"}' v-if="child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' && child.tableName!='exampaper' && child.tableName!='examquestion' " @tap="onPageTap('../'+child.tableName+'/list?userid='+user.id+'&menuJump='+child.menuJump)" class="li" hover-class="hover">
								<view v-if="true" :style='{"width":"48rpx","lineHeight":"48rpx","fontSize":"48rpx","color":"#36B1AC"}' :class="child.appFrontIcon"></view>
								<view :style='{"width":"100%","padding":"0 20rpx","fontSize":"28rpx","color":"#333","flex":"1"}' class="text">{{child.menu}}</view>
								<view v-if="true" :style='{"width":"28rpx","lineHeight":"28rpx","fontSize":"28rpx","color":"#555"}' class="cuIcon-right"></view>
							</view>
						</block>
					</block>
				</block>


			</view>
		</view>
	</view>
</template>
<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				isH5Plus: true,
				user: {},
				tableName:'',
				role: '',
				menuList: [],
        iconArr: [
          'cuIcon-same',
          'cuIcon-deliver',
          'cuIcon-evaluate',
          'cuIcon-shop',
          'cuIcon-ticket',
          'cuIcon-cascades',
          'cuIcon-discover',
          'cuIcon-question',
          'cuIcon-pic',
          'cuIcon-filter',
          'cuIcon-footprint',
          'cuIcon-pulldown',
          'cuIcon-pullup',
          'cuIcon-moreandroid',
          'cuIcon-refund',
          'cuIcon-qrcode',
          'cuIcon-remind',
          'cuIcon-profile',
          'cuIcon-home',
          'cuIcon-message',
          'cuIcon-link',
          'cuIcon-lock',
          'cuIcon-unlock',
          'cuIcon-vip',
          'cuIcon-weibo',
          'cuIcon-activity',
          'cuIcon-friendadd',
          'cuIcon-friendfamous',
          'cuIcon-friend',
          'cuIcon-goods',
          'cuIcon-selection'
        ],
			};
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad(){
			this.role = uni.getStorageSync("role");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
		},
		async onShow(){
            uni.removeStorageSync("useridTag");
			this.role = uni.getStorageSync("role");
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			this.tableName = table;
			let menus = menu.list();
			this.menuList = menus;
		},
		methods: {
			onPageTap(url) {
                uni.setStorageSync("useridTag",1);
				uni.navigateTo({
					url: url,
					fail: function() {
						uni.switchTab({
							url: url
						});
					}
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: calc(100vh - 94px);
		box-sizing: border-box;
	}
</style>
