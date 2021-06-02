<template>
	<view class="category-box">
		<!-- 二级分类 -->
		<sh-two-catgory :categoryData="classification"></sh-two-catgory>
		<!-- 连续弹窗提醒 -->
		<app-notice-modal></app-notice-modal>
		<!-- 登录提示 -->
		<app-login-modal></app-login-modal>
	</view>
</template>

<script>
import shTwoCatgory from './components/category/sh-two-catgory.vue';
import category from '@/csJson/category.json';
export default {
	components: {
		shTwoCatgory,
	},
	data() {
		return {
			classification: []
		};
	},
	computed: {},
	onLoad(options) {
		this.getCategory();
	},
	methods: {
		/**
		 * 获取分类数据
		 */
		getCategory() {
			let that = this;
			that.$api('goods.classification', {}).then(res => {
				if (res.flag) {
					that.classification = res.data
				}
			});
		}
	}
};
</script>

<style lang="scss">
.category-box {
	height: 100%;
	flex: 1;
	overflow: hidden;
}
</style>
