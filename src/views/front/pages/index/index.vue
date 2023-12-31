<template>
<view class="content">
	<view :style='{"minHeight":"100vh","width":"100%","padding":"160rpx 0 132rpx","background":"url(http://codegen.caihongy.cn/20221230/6c6025ba94804e88a222a9febaaf8c2c.png) no-repeat center bottom / 100% auto,url(http://codegen.caihongy.cn/20221230/3a9624138c7a442cb9a7302134ac01a7.jpg) no-repeat center top / 100% auto,#d5f1f6","height":"auto"}'>
		<swiper :style='{"padding":"0px 0px ","boxShadow":"inset 0px 0px 0px 0px #f4ead8","borderColor":"#fff","margin":"0px auto 40rpx","borderRadius":"20%","background":"rgba(255,255,255,1)","borderWidth":"12rpx 12rpx 12rpx 12rpx","width":"calc(100% - 60rpx)","borderStyle":"double","height":"360rpx"}' class="swiper" :indicator-dots='false' :autoplay='true' :circular='false' indicator-active-color='#000000' indicator-color='rgba(0, 0, 0, .3)' :duration='500' :interval='5000' :vertical='false'>
			<swiper-item :style='{"width":"calc(100% - 0px)","margin":"0 auto","position":"relative","borderRadius":"20%","background":"none","height":"360rpx"}' v-for="(swiper,index) in swiperList" :key="index" @tap="onSwiperTap(swiper)">
				<image :style='{"width":"calc(100% - 0px)","margin":"0px auto","objectFit":"cover","borderRadius":"20%","display":"block","height":"360rpx"}' mode="aspectFill" :src="baseUrl+swiper.img"></image>
				<view v-if="false" :style='{"padding":"0 20rpx 32rpx","color":"#333","left":"20rpx","textAlign":"center","background":"rgba(255,255,255,.6)","bottom":"0px","width":"calc(100% - 40rpx)","lineHeight":"60rpx","fontSize":"28rpx","position":"absolute"}'>{{ swiper.title }}</view>
			</swiper-item>
		</swiper>


		<!-- menu -->
		<view v-if="true" class="menu" :style='{"padding":"20rpx 8rpx 300rpx 24rpx","boxShadow":"0px 0px 0px #51a286,inset 0px 0px 0px 0px #6de6a8","margin":"40rpx auto 0px","borderColor":"#6de6a8","display":"flex","outline":"0px solid #ccc","borderRadius":"0px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221230/57ddc7aa5c3a4f5cb3f8d1c08f65d7d8.jpg) no-repeat center bottom / 100% auto,#004965","borderWidth":"0px 0px","width":"calc(100% - 0px)","borderStyle":"solid","height":"auto"}'>
            <block v-for="item in menuList" v-bind:key="item.roleName">
                <block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.frontMenu">
                    <block v-bind:key="sort" v-for=" (child,sort) in menu.child">
                        <block v-bind:key="sort2" v-for=" (button,sort2) in child.buttons">
                            <view :style='{"padding":"12rpx 0","boxShadow":"0px 0px 0px #36b1ac","margin":"10rpx 2% 10rpx 0","borderColor":"#36b1ac","borderRadius":"20%","background":"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(224,255,254,1) 100%),#ffff","borderWidth":"2rpx 2rpx","width":"23%","borderStyle":"solid","height":"auto"}' class="menu-list" v-if="button=='查看' && child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' " @tap="onPageTap2('../'+child.tableName+'/list')">
                                <view class="iconarr" :class="child.appFrontIcon" :style='{"padding":"8rpx 0","margin":"0px auto","color":"#333","borderRadius":"20rpx","textAlign":"center","background":"none","display":"block","width":"100%","lineHeight":"64rpx","fontSize":"64rpx","height":"auto"}'></view>
                                <view :style='{"padding":"0","margin":"12rpx auto 0","color":"#333","textAlign":"center","width":"100%","lineHeight":"28rpx","fontSize":"28rpx"}'>{{child.menu.split("列表")[0]}}</view>
                            </view>
                        </block>
                    </block>
                </block>
            </block>
		</view>
		<!-- menu -->
		
		

		<!-- 商品推荐 -->
		<!-- 商品推荐 -->
		
		
		<!-- 系统简介 -->
		<view :style='{"padding":"138rpx 0 138rpx","boxShadow":"0 0px 0px rgba(0,0,0,.2)","margin":"0px auto 20rpx","borderRadius":"0px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221230/e587346102684684a64ebf0e8b04da0b.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221230/1fdd733de8b046c79c54d68140872007.png) no-repeat left bottom / 100% auto,#fff","display":"flex","width":"calc(100% - 0px)","position":"relative","justifyContent":"center","height":"auto"}'>
		  <view :style='{"border":"0px solid #5959d9","padding":"0px 0px 0px","boxShadow":"0px 0px 0px #c1c1f2","margin":"0","color":"#fff","textAlign":"center","minHeight":"100rpx","overflow":"hidden","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20221230/97b2340d6b3d42f997ae95cca597b761.png) no-repeat center top / 100% 100%","width":"90%","lineHeight":"100rpx","fontSize":"32rpx"}'>{{systemIntroductionDetail.title}}</view>
		  <view :style='{"padding":"0px 80rpx 0 16rpx","margin":"0","overflow":"hidden","color":"#fff","borderRadius":"0","textAlign":"center","background":"url() no-repeat right top / auto 100%,#5489ed","display":"none","width":"auto","fontSize":"28rpx","lineHeight":"80rpx","height":"80rpx"}'>{{systemIntroductionDetail.subtitle}}</view>
		  <view :style='{"padding":"20rpx","margin":"60rpx 0 0px 0","borderColor":"#afe1ea","display":"flex","justifyContent":"space-between","borderRadius":"16rpx 16rpx 0 0","flexWrap":"wrap","background":"rgba(255,255,255,.93)","borderWidth":"8rpx 48rpx 8rpx 40rpx","width":"90%","position":"relative","borderStyle":"double","height":"auto"}'>
		    <img :style='{"padding":"0px","boxShadow":"inset 0px 0px 0px 0px #edf3fe","margin":"0 0 12rpx","borderColor":"#ccc","objectFit":"cover","borderRadius":"8%","borderWidth":"0 0 0px","background":"rgba(255,255,255,1)","display":"block","width":"100%","borderStyle":"solid","height":"240rpx"}' v-if="systemIntroductionDetail.picture1" :src="baseUrl+systemIntroductionDetail.picture1">
		    <img :style='{"padding":"0px","boxShadow":"inset 0px 0px 0px 0px #edf3fe","margin":"0","borderColor":"#ccc","objectFit":"cover","borderRadius":"8%","borderWidth":"8rpx 0 0","display":"none","width":"48%","borderStyle":"solid","height":"240rpx"}' v-if="systemIntroductionDetail.picture2" :src="baseUrl+systemIntroductionDetail.picture2">
		    <img :style='{"padding":"0px","margin":"0","borderColor":"#fff","objectFit":"cover","borderRadius":"0","borderWidth":"0px","display":"none","width":"49%","borderStyle":"solid","height":"240rpx"}' v-if="systemIntroductionDetail.picture3" :src="baseUrl+systemIntroductionDetail.picture3">
		  </view>
		  <view :style='{"padding":"20rpx 32rpx 40rpx","boxShadow":"inset 0px 0px 0px 0px #87acf1","margin":"40rpx 0 0px 0","borderColor":"#afe1ea","color":"#555","textIndent":"2em","minHeight":"240rpx","borderRadius":"0  0 0px 0px","background":"url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 12rpx 12rpx / 32rpx 32rpx,url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 98% 92% / 32rpx 32rpx,#f4fdfe","borderWidth":"16rpx 8rpx 2rpx 8rpx","width":"calc(90% - 0px)","lineHeight":"48rpx","fontSize":"28rpx","borderStyle":"dashed","height":"auto"}' v-html="systemIntroductionDetail.content"></view>
		  <view :style='{"width":"82%","position":"absolute","top":"208rpx","background":"url() no-repeat","display":"block","height":"36rpx"}' />
		  <view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		</view>

		<!-- 商品列表 -->
																																												<!-- 商品列表 -->
		
		<!-- 关于我们 -->
		<view :style='{"padding":"100rpx 0px 160rpx","boxShadow":"0 0px 0px rgba(0,0,0,0)","margin":"20rpx auto 40rpx","borderRadius":"0px","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20221230/e587346102684684a64ebf0e8b04da0b.png) no-repeat left top / 100% auto,url(http://codegen.caihongy.cn/20221230/1fdd733de8b046c79c54d68140872007.png) no-repeat left bottom / 100% auto,#fff","display":"flex","width":"calc(100% - 0px)","position":"relative","justifyContent":"center","height":"auto"}'>
		  <view :style='{"border":"0px solid #5959d9","padding":"0px","boxShadow":"0px 0px 0px #c1c1f2","margin":"40rpx 0 40rpx","color":"#fff","textAlign":"center","minHeight":"100rpx","overflow":"hidden","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20221230/97b2340d6b3d42f997ae95cca597b761.png) no-repeat center top / 100% 100%","width":"calc(90% - 0px)","lineHeight":"100rpx","fontSize":"32rpx"}'>{{aboutUsDetail.title}}</view>
		  <view :style='{"padding":"0px 80rpx 0 16rpx","margin":"0px 0 0","overflow":"hidden","color":"#fff","borderRadius":"0","textAlign":"center","background":"url() no-repeat right top / auto 100%,#5489ed","display":"none","width":"auto","fontSize":"28rpx","lineHeight":"80rpx","height":"80rpx"}'>{{aboutUsDetail.subtitle}}</view>
		  <view :style='{"border":"0px double #ffeeba","padding":"0px","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"40rpx 0 0 0px","borderColor":"#eeeefa","display":"flex","float":"right","justifyContent":"space-between","borderRadius":"32rpx","flexWrap":"wrap","background":"none","borderWidth":"0px","width":"90%","borderStyle":"solid","height":"auto","order":"1"}'>
		    <img :style='{"padding":"20rpx","boxShadow":"inset 0px 0px 0px 0px #7fccd3","margin":"0","borderColor":"#afe1ea","objectFit":"cover","borderRadius":"0px","borderWidth":"10rpx 2rpx 2rpx 2rpx","background":"#f4fdfe","display":"inline-block","width":"50%","borderStyle":"double","height":"300rpx"}' v-if="aboutUsDetail.picture1" :src="baseUrl+aboutUsDetail.picture1">
		    <img :style='{"padding":"16rpx","margin":"0px","borderColor":"#afe1ea","objectFit":"cover","borderRadius":"0","borderWidth":"2rpx 2rpx 10rpx 2rpx","background":"#f4fdfe","display":"block","width":"48%","borderStyle":"double","height":"300rpx"}' v-if="aboutUsDetail.picture2" :src="baseUrl+aboutUsDetail.picture2">
		    <img :style='{"width":"48%","margin":"0px","objectFit":"cover","borderRadius":"16rpx","display":"none","height":"160rpx"}' v-if="aboutUsDetail.picture3" :src="baseUrl+aboutUsDetail.picture3">
		  </view>
		  <view :style='{"padding":"20rpx","margin":"40rpx 0 0","borderColor":"#afe1ea","color":"#555","textIndent":"2em","float":"left","minHeight":"240rpx","borderRadius":"0","background":"url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 12rpx 12rpx / 32rpx 32rpx,url(http://codegen.caihongy.cn/20221230/bde67d30424d40a68110c838b9a56dfd.gif) no-repeat 98% 92% / 32rpx 32rpx,#f4fdfe","borderWidth":"2rpx 2rpx 12rpx","width":"90%","lineHeight":"48rpx","fontSize":"28rpx","borderStyle":"solid","height":"auto","order":"2"}' v-html="aboutUsDetail.content"></view>
		  <view :style='{"width":"80%","position":"absolute","top":"196rpx","background":"url() no-repeat","display":"block","height":"36rpx "}' />
		  <view :style='{"width":"50%","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"160rpx"}' />
		</view>
		
		<!-- 新闻资讯 -->
																										<view class="listBox news">
			<view v-if="false && 1 == 1" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
			<view class="title" :style='{"border":"0px solid #5959d9","padding":"0px 0 0px","boxShadow":"0px 0px 0px #c1c1f2","margin":"80rpx auto 0px","display":"flex","justifyContent":"space-between","minHeight":"100rpx","overflow":"hidden","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20221230/97b2340d6b3d42f997ae95cca597b761.png) no-repeat center top / 100% 100%","width":"calc(90% - 0px)","lineHeight":"100rpx","position":"relative"}'>
				<view :style='{"padding":"0 0 0 160rpx","boxShadow":"0px 0px 0px rgba(0,0,0,.2)","margin":"0px 0 0","color":"#fff","borderRadius":"0px","textAlign":"center","background":"none","display":"inline-block","width":"calc(100% - 160rpx)","fontSize":"32rpx"}'>公告信息</view>
				<text :style='{"padding":"0 40rpx 0 0","margin":"0px 72rpx 0 0","color":"#eee","textAlign":"right","background":"none","display":"block","fontSize":"28rpx","minWidth":"160rpx","position":"absolute","right":"0"}' @tap="onPageTap('news')">查看更多</text>
			</view>
			
			<view v-if="false && 1 == 2" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
			
					  
						
						<!-- 样式3 -->
			<view class="list-box style3" :style='{"padding":"20rpx 20rpx 60rpx","boxShadow":"0px 0px 0px #ccc","margin":"40rpx auto 0","borderColor":"#21d5ae","borderRadius":"8rpx","background":"url() no-repeat right top,rgba(255,255,255,.0)","borderWidth":"0px 0","width":"calc(100% - 40rpx)","borderStyle":"dashed","height":"auto"}'>
				<view @tap="onNewsDetailTap(item.id)" v-for="(item,index) in news" :key="index" class="list-item" :style='{"boxShadow":"0 0px 0px rgba(0,0,0,.3)","padding":"20rpx","margin":"0 0 20rpx","borderColor":"#afe1ea","borderRadius":"20%","flexWrap":"wrap","background":"rgba(255,255,255,.96)","borderWidth":"16rpx","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}'>
					<image v-if="item.picture" :style='{"width":"200rpx","objectFit":"cover","borderRadius":"100%","display":"block","height":"200rpx"}' class="list-item-image" mode="aspectFill" :src="baseUrl+item.picture"></image>
					<view class="list-item-body" :style='{"width":"calc(100% - 200rpx)","padding":"0","margin":"0","height":"auto"}'>
						<view :style='{"width":"100%","padding":"0 20rpx","margin":"0","lineHeight":"48rpx","fontSize":"28rpx","color":"#333"}' class="list-item-title">{{item.title}}</view>
						<view :style='{"padding":"0 20rpx","margin":"0","color":"#999","textAlign":"right","width":"100%","lineHeight":"48rpx","fontSize":"28rpx"}' class="list-item-pirce">发布时间：{{item.addtime}}</view>
					</view>
				</view>
			</view>
						
		  <!-- 样式4 -->
		  		  
		  <!-- 样式5 -->
		  		  
		  <!-- 样式6 -->
		  		  
		  <!-- 样式7 -->
		  		  
		  <!-- 样式8 -->
		  		  
		  <!-- 样式9 -->
		  			
			<view v-if="false && 1 == 3" class="idea newsIdea" :style='{"padding":"40rpx","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box1"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box2"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box3"></view>
				<view :style='{"width":"20%","background":"#fff","height":"160rpx"}' class="box box4"></view>
			</view>
		</view>
																						<!-- 新闻资讯 -->
				

	</view>
</view>
</template>

<script>
    import menu from '@/utils/menu'
	import '@/assets/css/global-restaurant.css'
	import uniIcons from "@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				options2: {
					effect: 'flip',
					loop : true
				},
				options3: {
					effect: 'cube',
					loop : true,
					cubeEffect: {
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}
				},
				rows: 2,
				column: 4,
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
                role : '',
                aboutUsDetail: {},
                systemIntroductionDetail: {},
                menuList: [],
                swiperMenuList:[],
                user: {},
                tableName:'',

				//轮播
				swiperList: [],
				news: [],
			}
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
            this.menuList.forEach((item,key) => {
                if(this.role==item.roleName) {
                    item.frontMenu.forEach((item2,key2) => {
                        if(item2.child[0].buttons.indexOf("查看")>-1) {
                            this.swiperMenuList.push(item2);
                        }
                    })
                }
            })
        },
		async onShow() {
            let res;
			// 轮播图
			let swiperList = []
			res = await this.$api.page('config', {
				page: 1,
				limit: 5
			});
			for (let item of res.data.list) {
				if (item.name.indexOf('picture') >= 0 && item.value && item.value!="" && item.value!=null ) {
					swiperList.push({
						img: item.value,
                        title: item.name
					});
				}
			}
			if (swiperList) {
				this.swiperList = swiperList;
			}
            this.getAboutUs();
            this.getSystemIntroduction();
			// 公告信息
			res = await this.$api.list('news', {
				page: 1,
				limit: 6,
                sort: 'id',
                order: 'desc'
			});
			this.news = res.data.list


		},

		methods: {

			//轮播图跳转
			onSwiperTap(e) {

			},
            async getAboutUs() {
                let res = await this.$api.info('aboutus', 1)
                this.aboutUsDetail = res.data;
            },
            async getSystemIntroduction() {
                let res = await this.$api.info('systemintro', 1)
                this.systemIntroductionDetail = res.data;
            },
			// 新闻详情
			onNewsDetailTap(id) {
				this.$utils.jump(`../news-detail/news-detail?id=${id}`)
			},
			// 推荐列表点击详情
			onDetailTap(tableName, id) {
				this.$utils.jump(`../${tableName}/detail?id=${id}`)
			},
			onPageTap(tableName){

				uni.navigateTo({
					url: `../${tableName}/list`,
					fail: function(){
						uni.switchTab({
							url: `../${tableName}/list`
						});
					}
				});
				// this.$utils.jump(`../${tableName}/list`)
			},
            onPageTap2(url) {
                uni.setStorageSync("useridTag",0);
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
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
