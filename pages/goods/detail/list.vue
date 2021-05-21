<template>
	<view class="page_box">
		<view class="head_box">
			<!-- <view class="order-nav x-f">
				<view class="nav-item y-f" v-for="(nav, index) in goodsList.colorColors" :key="index" @tap="onNav(nav.skuColor)">
					<view class="item-title">{{ nav.skuColor }}</view>
					<text class="nav-line" :class="{ 'line-active': orderType === nav.skuColor }"></text>
				</view>
			</view> -->
		</view>
		<view class="content_box">
			<!-- v-show="orderType === good.skuColor" v-for="(good, gindex) in goodsList" :key="gindex" -->
			<scroll-view scroll-y="true" enable-back-to-top class="scroll-box">
				<!-- <checkbox-group class="block" v-if="goodsList.length">
					<view class="collect-list x-start" v-for="(g, index) in good.skus" :key="index">
						<view class="x-c padding-top-xs" @tap="onSel(g, g.checked)">
						<checkbox :checked="g.checked" :class="{ checked: g.checked }" class="goods-radio round orange"></checkbox>
					</view>
						<app-mini-card :detail="g" :type="'sku'">
							<block slot="goodsBottom">
								<view class="" style="float: left;">
									<view class="num-step"><uni-number-box @change="onChangeNum($event, g, index)" :value="g.goodsNum" :step="1" :min="-1"></uni-number-box></view>
								</view>
							</block>
						</app-mini-card>
					</view>
				</checkbox-group> -->
				<z-table :tableData="goodsList" @cpnclick="Cpnclick" :columns="columns" :tableHeight="tableHeight" :stickSide="stickSide"></z-table>
				<app-empty v-if="!goodsList.length && !isLoading" :emptyData="emptyData"></app-empty>
			</scroll-view>
		</view>
		<view class="foot_box " v-if="goodsList.length">
			<view class="tools-box x-bc">
				<label class="check-all x-f" @tap="onAllSel">
					<text>数量</text>
					<text>（{{ totalCount }}）</text>
				</label>
				<view class="x-f"><button class="cu-btn pay-btn" :disabled="totalCount <= 0" v-show="!isTool" @tap="onPay">添加</button></view>
			</view>
		</view>
		<!-- 自定义底部导航 -->
		<app-tabbar></app-tabbar>
		<!-- 关注弹窗 -->
		<app-float-btn></app-float-btn>
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
import zTable from '@/components/z-table/z-table.vue';
export default {
	components: {
		appMiniCard,
		uniNumberBox,
		zTable,
		appEmpty
	},
	data() {
		return {
			isTool: false,
			goodsList: [],
			stickSide: true,
			tableHeight: 0,
			totalCount: 0,
			columns: [],
			isLoading: false,
			orderType: null,
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
		/* totalCount() {
			let count = 0;
			let that = this;
			that.goodsList.forEach(item => {
				that.columns.forEach((items,index) => {
					if(index != 0){
						count += item[items.key].goodsNum;
					}
				});
			});
			return count;
		} */
	},
	onLoad() {
		this.getGoodsList();
	},
	methods: {
		Cpnclick(val){
			let count = 0;
			let that = this;
			val.forEach(item => {
				that.columns.forEach((items,index) => {
					if(index != 0){
						count += item[items.key].goodsNum;
					}
				});
			});
			this.goodsList = [...val]
			this.totalCount = count
		},
		// 更改商品数
		async onChangeNum(e, g, index) {
			if (g.goodsNum !== e) {
				this.$set(g, 'goodsNum', +e);
				/* await this.changeCartList({ ids: [g.id], goodsNum: e, art: 'change' }); */
			}
		},
		getGoodsList() {
			let that = this;
			that.isLoading = true;
			that.loadStatus = 'loading';
			that.$api('goods.commodityListDetail', { spuId: this.$Route.query.spuId }).then(res => {
				if (res.flag) {
					that.isLoading = false;
					let arr = [];
					let columns = [{ key: 'skuColor', title: '颜色' }];
					res.data.colorColors.forEach(item => {
						let obj = {};
						obj.skuColor = item.skuColor;
						obj.spuName = res.data.spuName;
						obj.spuId = res.data.spuId;
						obj.skuId = item.skuId;
						obj.retailPrice = res.data.retailPrice;
						res.data.sizes.forEach((items, index) => {
							let jbj = {
								skuColor: items.sizeCode,
								goodsNum: 0,
								checked: false
							};
							obj[items.sizeCn] = jbj;
						});
						arr.push(obj);
					});
					res.data.sizes.forEach(items => {
						columns.push({ key: items.sizeCn, title: items.sizeCode });
					});
					that.columns = columns;
					that.goodsList = arr;
					/* that.orderType = that.goodsList[0].skuColor; */
				}
			});
		},
		onNav(id) {
			this.orderType = id;
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
			that.$set(item, 'checked', !flag);
		},
		// 功能切换
		onSet() {
			this.isTool = !this.isTool;
		},
		// 全选
		onAllSel() {
			let that = this;
			that.$store.commit('changeAllSellect'); //按钮切换全选。
			that.$store.commit('getAllSellectCartList', that.allSel); //列表全选
		},
		// 结算
		onPay() {
			let that = this;
			let confirmcartList = [];
			if (uni.getStorageSync('cartInfo') == '') {
				uni.setStorageSync('cartInfo', []);
			}
			let cartList = uni.getStorageSync('cartInfo');
			that.goodsList.forEach(item => {
				if(item.constructor==Object){
					for(let i in item){
						if(item[i].goodsNum > 0){
							let result = 0;
							cartList.some(cart => {
								if (item.skuId == cart.skuId && item.skuColor == cart.skuColor&& i == cart.numberOfYards) {
									result++;
									cart.goodsNum += item[i].goodsNum;
									return true;
								}
							});
							if (result == 0) {
								cartList.push({
									skuColor: item.skuColor,
									numberOfYards: i,
									skuId: item.skuId,
									retailPrice: item.retailPrice,
									spuPhoto: item.spuPhoto,
									goodsNum: item[i].goodsNum,
									spuId: item.spuId,
									spuName: item.spuName
								});
							}
						}
					}
				}
			});
			 /* this.goodsList.forEach(item => {
				item.skus.forEach(items => {
					if (items.goodsNum > 0) {
						let result = 0;
						cartList.some(cart => {
							if (items.skuId == cart.skuId) {
								result++;
								cart.goodsNum += items.goodsNum;
								return true;
							}
						});
						if (result == 0) {
							cartList.push({
								skuColor: item.skuColor,
								numberOfYards: items.numberOfYards,
								skuId: items.skuId,
								spuPhoto: item.spuPhoto,
								goodsNum: items.goodsNum,
								spuId: item.spuId,
								spuName: item.spuName
							});
						}
					}
				});
			}); */
			console.log(cartList)
			uni.setStorageSync('cartInfo', cartList);
			this.$tools.toast('已添加购物车~');
		}
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
	padding: 30rpx 20rpx;
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
