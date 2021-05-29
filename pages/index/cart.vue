<template>
	<view class="page_box">
		<view class="head_box" v-if="cartList.length">
			<view class="tool-box x-bc">
				<view class="count-box">
					共
					<text class="all-num">{{ cartList.length }}</text>
					件商品
				</view>
				<button class="cu-btn set-btn" @tap="onSet">{{ isTool ? '完成' : '编辑' }}</button>
			</view>
		</view>
		<view class="content_box">
			<checkbox-group class="block" v-if="cartList.length">
				<view class="collect-list x-start" v-for="(g, index) in cartList" :key="index">
					<view class="x-c" style="height: 200rpx;" @tap="onSel(g, g.checked)">
						<checkbox :checked="g.checked" :class="{ checked: g.checked }" class="goods-radio round orange"></checkbox>
					</view>
					<app-mini-card :detail="g" type="goodsType">
						<block slot="goodsBottom">
							<view class="x-bc price-box">
								<view class="num-step"><uni-number-box @change="onChangeNum($event, g, index)" :value="g.goodsNum" :step="1" :min="0"></uni-number-box></view>
							</view>
						</block>
					</app-mini-card>
				</view>
			</checkbox-group>
			<view class="empty-box x-c" v-else><app-empty :emptyData="emptyData"></app-empty></view>
		</view>
		<view class="foot_box">
			<view class="tools-box x-bc">
				<label class="check-all x-f" @tap="onAllSel">
					<radio :checked="allSel" :class="{ checked: allSel }" class="check-all-radio orange"></radio>
					<text>全选</text>
					<text>（{{ totalCount }}）</text>
					</label>
					<view class="x-f">
					<view class="price" v-if="!isTool">￥{{ totalMoney }}</view>
					<button class="cu-btn pay-btn" :disabled="totalCount<=0||isSubOrder" v-show="!isTool" @tap="onPay">结算</button>
					<button class="cu-btn del-btn" v-show="isTool" @tap="goodsDelete">删除</button>
				</view>
			</view>
		</view>
		<!-- 自定义底部导航 -->
		<!-- <app-tabbar></app-tabbar> -->
		<!-- 关注弹窗 -->
		<!-- <app-float-btn></app-float-btn> -->
		<!-- 连续弹窗提醒 -->
		<app-notice-modal></app-notice-modal>
		<!-- 登录提示 -->
		<app-login-modal></app-login-modal>
	</view>
</template>

<script>
import appMiniCard from '@/components/app-mini-card/app-mini-card.vue';
import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue';
import appEmpty from '@/components/app-empty/app-empty.vue';
import { mapMutations, mapActions, mapState, mapGetters } from 'vuex';
let timer = null;
export default {
	components: {
		appMiniCard,
		uniNumberBox,
		appEmpty
	},
	data() {
		return {
			isTool: false,
			isSubOrder: false,
			cartList: [],
			allSel: false,
			emptyData: {
				img: '/static/imgs/empty/emptyCart.png',
				tip: '空空如也,快去逛逛吧~'
			}
		};
	},
	computed: {
		/* ...mapState({
			cartList: ({ cart }) => cart.cartList,
			allSel: ({ cart }) => cart.allSelected
		}),
		...mapGetters(['totalCount', 'isSel']) */
		...mapState({
			userInfo: state => state.user.userInfo,
		}),
		totalCount(){
			let count = 0
			this.cartList.forEach(item=>{
				if(item.checked){
					count += item.goodsNum
				}
			})
			return count
		},
		totalMoney(){
			let count = 0
			this.cartList.forEach(item=>{
				if(item.checked){
					count += Number(item.retailPrice) * Number(item.goodsNum)
				}
			})
			console.log(count)
			return count
		},
	},
	onLoad() {
		this.getCartList();
	},
	methods: {
		// 更改商品数
		async onChangeNum(e, g, index) {
			if (g.goods_num !== e) {
				/* uni.showLoading({
					mask: true
				}); */
				this.$set(this.cartList[index], 'goodsNum', +e);
				/*await this.changeCartList({ ids: [g.id], goodsNum: e, art: 'change' });
				 await uni.hideLoading(); */
			}
		},
		getCartList(){
			let cartList = uni.getStorageSync('cartInfo');
			cartList.forEach((item)=>{
				item.checked = false
			})
			this.cartList = cartList;
		},
		// 路由跳转
		jump(path, parmas) {
			this.$Router.push({
				path: path,
				query: parmas
			});
		},
		// 单选
		onSel(item, flag) {
			let that = this;
			that.$set(item,'checked',!flag)
			let number = 0
			that.cartList.forEach((item)=>{
				if(item.checked){
					number++
				}	
			})
			if(number == that.cartList.length){
				that.allSel = true
			}else{
				that.allSel = false
			}
		},
		// 功能切换
		onSet() {
			this.isTool = !this.isTool;
		},
		// 全选
		onAllSel() {
			let that = this;
			if(that.allSel){
				that.allSel = false
				}else{
					that.allSel = true
					}
			if(that.allSel){
				that.cartList.forEach((item)=>{
					item.checked = true
				})
			}else{
				that.cartList.forEach((item)=>{
					item.checked = false
				})
			}
			
		},
		// 结算
		onPay() {
			let that = this;
			let { cartList } = this;
			if (that.userInfo.phoneNumber) {
				let confirmcartList = [];
				this.cartList.forEach(item => {
					if (item.checked) {
						confirmcartList.push({
							/* skuId: item.skuId,
							spuId: item.spuId, */
							retailPrice: item.retailPrice,
							sizeCode: item.numberOfYards,
							skuColor: item.skuColor,
							spuName: item.spuName,
							skuCount: item.goodsNum,
						});
						
					}
				});
				that.isSubOrder = true;
				that.$api('order.generateOrder', { 
					openId: uni.getStorageSync('openid'),
					phoneNumber: that.userInfo.phoneNumber,
					memberOrderDetails:confirmcartList
					}).then(res => {
					if (res.flag) { 
						that.isSubOrder = false;
						let cartInfo = [];
						that.cartList.forEach((item,index) => {
							if (!item.checked) {
								cartInfo.push(item)
							}
						});
						that.cartList = cartInfo
						uni.setStorageSync('cartInfo',cartInfo)
						this.$tools.toast('下单成功');
						
					}
				});
			}else{
				uni.showToast({
					icon: 'none',
					title: '下单需要手机号码，请在“我的”授权手机号码'
				});
			}
		},
		// 删除
		goodsDelete() {
			let that = this;
			let cartList = that.cartList;
			cartList.map((item,index) => {
				if (item.checked) {
					cartList.splice(index,1)
				}
			});
			that.cartList = cartList
			uni.setStorageSync('cartInfo',cartList)
			this.$tools.toast('已删除~');
		}
	}
};
</script>

<style lang="scss">
/* #ifndef MP-WEIXIN */
.foot_box{
	position: fixed;
	z-index: 99;
	bottom: 120rpx;
}
/* #endif */
.head_box {
	.safety-box {
		height: 80rpx;
		font-size: 24rpx;
		padding: 0 30rpx;
		background: #f7f5f6;

		.cuIcon-safe {
			font-size: 32rpx;
			margin-right: 16rpx;
		}
	}
	.tip-box {
		font-size: 26rpx;
		color: #999;
		height: 90rpx;
		padding: 0 30rpx;
		background: #fff;

		.tag {
			border: 1rpx solid rgba(168, 112, 13, 1);
			border-radius: 2rpx;
			padding: 0 10rpx;
			line-height: 40rpx;
			font-size: 26rpx;
			color: #a8700d;
			margin-right: 20rpx;
		}
	}

	.tool-box {
		height: 90rpx;
		padding: 0 30rpx;
		background: #f7f5f6;

		.count-box {
			font-size: 26rpx;
			color: #999;

			.all-num {
				color: #a8700d;
			}
		}

		.set-btn {
			background: none;
			font-size: 26rpx;
			color: #a8700d;
		}
	}
}

// 空白页
.empty-box {
	flex: 1;
	width: 100%;
	height: 100%;
}

.collect-list {
	padding: 20rpx 20rpx;
	background: #fff;
	margin-bottom: 20rpx;

	/deep/ .goods-title {
		width: 420rpx !important;
	}

	.tag-box {
		.tag1 {
			line-height: 36rpx;
			padding: 0 8rpx;
			font-size: 18rpx;
			color: rgba(#fff, 0.9);
			background: #f39800;
			display: inline-block;
			box-sizing: border-box;
		}

		.tag2 {
			line-height: 34rpx;
			padding: 0 8rpx;
			font-size: 18rpx;
			color: rgba(#f39800, 0.9);
			background: #fff;
			border-top: 1rpx solid #f39800;
			border-right: 1rpx solid #f39800;
			border-bottom: 1rpx solid #f39800;
			display: inline-block;
			box-sizing: border-box;
		}
	}

	.goods-radio {
		transform: scale(0.7);
		margin-right: 20rpx;
		// background:  #E9B564;
	}

	.price-box {
		width: 420rpx;

		.price {
			color: #e1212b;
		}
	}
}

.tools-box {
	height: 100rpx;
	width: 750rpx;
	padding: 0 20rpx;
	background: #fff;

	.check-all {
		font-size: 26rpx;

		.check-all-radio {
			transform: scale(0.7);
			color: #e9b564;
		}
	}

	.price {
		color: #e1212b;
		font-size: 500;
		margin-right: 30rpx;
	}

	.pay-btn {
		width: 200rpx;
		height: 70rpx;
		background: linear-gradient(90deg, rgba(233, 180, 97, 1), rgba(238, 204, 137, 1));
		box-shadow: 0px 7rpx 6rpx 0px rgba(229, 138, 0, 0.22);
		border-radius: 35rpx;
		padding: 0;
		color: rgba(#fff, 0.9);
	}

	.del-btn {
		width: 200rpx;
		height: 70rpx;
		background: linear-gradient(90deg, rgba(244, 71, 57, 1) 0%, rgba(255, 102, 0, 1) 100%);
		border-radius: 35rpx;
		padding: 0;
		color: rgba(#fff, 0.9);
	}
}
</style>
