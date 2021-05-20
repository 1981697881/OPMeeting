<template>
	<view class="page_box">
		<view class="content_box">
			<scroll-view scroll-y="true" v-show="" enable-back-to-top @scrolltolower="loadMore" class="scroll-box">
				<view class="order-list" v-for="(order, orderIndex) in orderList" :key="order.id" >
					<view class="order-head x-bc">
						<text class="no">{{ order.spuName }}</text>
						<text class="state">颜色：{{ order.skuColor }}</text>
					</view>
					<!-- <view class="goods-order" v-for="goods in order.item" :key="goods.id">
						<view class="order-content"><app-mini-card :type="'order'" :detail="goods"></app-mini-card></view>
					</view> -->
					<view class="order-bottom">
						<view class="order-head x-bc" style="border-bottom: none;">
							<text class="no">尺码：{{ order.numberOfYards}}</text>
							<text class="state">数量：{{ order.skuCount }}</text>
						</view>
					</view>
				</view>
				<!-- 空白页 -->
				<app-empty v-if="!orderList.length && !isLoading" :emptyData="emptyData"></app-empty>
				<!-- load -->
				<app-load v-model="isLoading"></app-load>
				<!-- 更多 -->
				<view v-if="orderList.length" class="cu-load text-gray" :class="loadStatus"></view>
			</scroll-view>
		</view>
		<view class="foot_box"></view>
		<!-- 自定义底部导航 -->
		<app-tabbar></app-tabbar>
		<!-- 关注弹窗 -->
		<app-float-btn></app-float-btn>
		<!-- 登录提示 -->
		<app-login-modal></app-login-modal>
	</view>
</template>

<script>
import appMiniCard from '@/components/app-mini-card/app-mini-card.vue';
export default {
	components: {
		appMiniCard
	},
	data() {
		return {
			routerTo: this.$Router,
			isLoading: true,
			loadStatus: '', //loading,over分页
			currentPage: 1,
			lastPage: 1,
			orderType: 'all',
			orderList: [],
			emptyData: {
				img: '/static/imgs/empty/empty_groupon.png',
				tip: '暂无商品，还有更多好货等着你噢~'
			},
		};
	},
	computed: {},
	onLoad() {
		if (this.$Route.query.type) {
			this.orderType = this.$Route.query.type;
		}
		this.getOrderList();
	},
	onShow() {
		// this.orderList = [];
	},
	methods: {
		jump(path, parmas) {
			this.$Router.push({
				path: path,
				query: parmas
			});
		},
		// 订单列表
		getOrderList() {
			let that = this;
			that.isLoading = true;
			that.loadStatus = 'loading';
			that.$api('order.findDetails', {
				orderId: that.$Route.query.orderId,
			}).then(res => {
				if (res.flag) {
					that.isLoading = false;
					that.orderList = [...res.data];
					that.lastPage = res.data.last_page;
					if (that.currentPage < res.data.last_page) {
						that.loadStatus = '';
					} else {
						that.loadStatus = 'over';
					}
				}
			});
		},
		// 加载更多
		loadMore() {
			if (this.currentPage < this.lastPage) {
				this.currentPage += 1;
				this.getOrderList();
			}
		},
	}
};
</script>

<style lang="scss">
.order-nav {
	background: #fff;
	height: 80rpx;

	.nav-item {
		flex: 1;

		.item-title {
			font-size: 30rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			line-height: 76rpx;
		}

		.nav-line {
			width: 100rpx;
			height: 4rpx;
			background: #fff;
		}

		.line-active {
			background: rgba(230, 184, 115, 1);
		}
	}
}

.order-list {
	background: #fff;
	margin: 20rpx 0;
	.order-bottom {
		padding-bottom: 20rpx;
		.btn-box {
			justify-content: flex-end;
		}
		.all-msg {
			font-size: 24rpx;
			color: #999;
			justify-content: flex-end;
			margin-bottom: 10rpx;
			padding: 0 30rpx;
			.all-unit {
				font-size: 20rpx;
			}
			.all-money {
				font-size: 26rpx;
				color: #333;
				font-weight: 500;
				&::before {
					content: '￥';
					font-size: 20rpx;
				}
			}
		}
		.obtn1 {
			width: 160rpx;
			height: 60rpx;
			background: rgba(238, 238, 238, 1);
			border-radius: 30rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			margin-right: 20rpx;
			padding: 0;
		}
		.obtn2 {
			width: 160rpx;
			height: 60rpx;
			background: linear-gradient(90deg, rgba(233, 180, 97, 1), rgba(238, 204, 137, 1));
			box-shadow: 0px 7rpx 6rpx 0px rgba(229, 138, 0, 0.22);
			border-radius: 30rpx;
			margin-right: 20rpx;
			font-size: 26rpx;
			font-family: PingFang SC;
			font-weight: 400;
			color: #fff;
			padding: 0;
		}
	}
	.order-head {
		padding: 0 25rpx;
		height: 77rpx;
		border-bottom: 1rpx solid #dfdfdf;

		.no {
			font-size: 26rpx;
			color: #999;
		}

		.state {
			font-size: 26rpx;
			color: #a8700d;
		}
	}
	.order-content {
		padding-bottom: 20rpx;
	}
	.goods-order {
		border-bottom: 1px solid rgba(223, 223, 223, 0.5);
		padding: 20rpx 20rpx 0;
		margin-bottom: 20rpx;
	}

	.goods-bottom {
		background: #fff;
		padding-bottom: 30rpx;
	}
}
</style>
