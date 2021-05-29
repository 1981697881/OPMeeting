/**
 * 接口列表文件
 */
export default {
	/** 初始化 ↓ **/
	init: {
		url: 'web/index/init',
		auth: false,
		method: 'GET',
		// desc: '初始化数据',
	},
	/** 上传图片 ↓ **/
	upload: {
		url: 'web/index/upload',
		auth: true,
		method: 'POST',
		// desc: '上传',
	},

	/** 上传Base64图片 ↓ **/
	uploadBase64: {
		url: 'web/index/uploadBase64',
		auth: false,
		method: 'POST',
		// desc: '上传Base64位图片',
	},

	/** 消息订阅模板 ↓ **/
	messageIds: {
		url: 'web/notification/template',
		auth: true,
		method: 'GET',
		// desc: '订阅消息模板ids',
	},

	/** 模板信息 ↓ **/
	template: {
		url: 'web/index/template',
		auth: false,
		method: 'GET',
		// desc: '模板信息',
	},
	/** 自定义模板页面 ↓ **/
	custom: {
		url: 'web/index/custom',
		auth: false,
		method: 'GET',
		// desc: '自定义模板页面',
	},

	/** 签到 ↓ **/
	user_sign: {
		index: {
			url: 'web/user_sign/index',
			auth: true,
			method: 'GET',
			// desc: '签到记录',
		},
		sign: {
			url: 'web/user_sign/sign',
			auth: true,
			method: 'POST',
			// desc: '签到',
		}
	},

	/** 同步路由 ↓ **/
	dev: {
		asyncLink: {
			url: 'web/index/asyncLink',
			auth: false,
			method: 'POST',
			// desc: '路由表',
		},
		asyncDecorateScreenShot: {
			url: 'web/index/asyncDecorateScreenShot',
			auth: false,
			method: 'POST',
			// desc: '更新店铺装修截图',
		},
		asyncBannerBgColor: {
			url: 'web/index/asyncBannerBgColor',
			auth: false,
			method: 'POST',
			// desc: '路由表',
		},
		debug: {
			url: 'web/index/debugLog',
			auth: false,
			method: 'POST',
		}
	},

	/** 富文本  ↓ **/
	richtext: {
		url: 'web/index/richtext',
		auth: false,
		method: 'GET',
		// desc: '富文本数据',
	},

	/** 三级分类 ↓ **/
	category: {
		url: 'web/category',
		auth: false,
		method: 'GET',
		// desc: '三级分类',
	},
	/** 二级分类 ↓ **/
	categoryGoods: {
		url: 'web/category/goods',
		auth: false,
		method: 'GET',
		// desc: '点餐用',
	},

	/** 商品评论 ↓ **/
	goods_comment: {
		list: {
			url: 'web/goods_comment/index',
			auth: false,
			method: 'GET',
			// desc: '商品评论列表',
		},
		type: {
			url: 'web/goods_comment/type',
			auth: false,
			method: 'GET',
			// desc: '商品评论分类',
		},
	},
	/** 商品 ↓ **/
	goods: {
		classification: {
			url: 'web/app/api/Classification',
			auth: false,
			method: 'POST',
			// desc: '商品分类',
		},
		lists: {
			url: 'web/goods/lists',
			auth: false,
			method: 'GET',
			// desc: '商品列表',
		},
		commodityList: {
			url: 'web/app/api/spuList',
			auth: false,
			method: 'POST',
			// desc: '订货会商品列表',
		},
		commodityListDetail: {
			url: 'web/app/api/findSkuBySpuId ',
			auth: false,
			method: 'POST',
			// desc: '订货会商品明细列表',
		},
		memberGoodsList: {
			url: 'web/memberGoods/memberGoodsList',
			auth: true,
			method: 'POST',
			// desc: '商品订单列表',
		},
		seckillList: {
			url: 'web/goods/seckillList',
			auth: false,
			method: 'GET',
			// desc: '秒杀列表',
		},
		activity: {
			url: 'web/goods/activity',
			auth: false,
			method: 'GET',
			// desc: '活动商品',
		},
		myGroupon: {
			url: 'web/activity_groupon/myGroupon',
			auth: true,
			method: 'GET',
			// desc: '我的拼团',
		},
		grouponDetail: {
			url: 'web/activity_groupon/detail',
			auth: true,
			method: 'GET',
			// desc: '拼团详情',
		},
		grouponItem: {
			url: 'web/activity_groupon/index',
			auth: false,
			method: 'GET',
			// desc: '拼购列表',
		},
		grouponList: {
			url: 'web/goods/grouponList',
			auth: false,
			method: 'GET',
			// desc: '拼团商品列表',
		},
		detail: {
			url: 'web/goods/detail',
			auth: false,
			method: 'GET',
			// desc: '商品详情',
		},
		favorite: {
			url: 'web/goods/favorite',
			auth: true,
			method: 'POST',
			// desc: '商品收藏',
		},
		favoriteList: {
			url: 'web/goods/favoriteList',
			auth: true,
			method: 'GET',
			// desc: '商品收藏列表',
		},
		viewList: {
			url: 'web/goods/viewList',
			auth: true,
			method: 'GET',
			// desc: '足迹列表',
		},
		viewDelete: {
			url: 'web/goods/viewDelete',
			auth: true,
			method: 'POST',
			// desc: '删除足迹',
		},
		storeAddress: {
			url: 'web/goods/store',
			auth: true,
			method: 'GET',
			// desc: '商品支持的自提点',
		},
	},

	/** 用户 ↓ **/
	user: {
		info: {
			url: 'web/user',
			auth: true,
			method: 'GET',
			// desc: '用户信息',
		},
		member: {
			url: 'web/member/loginMember',
			auth: true,
			method: 'POST',
			// desc: '用户信息',
		},
		transactionLogDorRList: {
			url: 'web/transactionLog/transactionLogDorRList',
			auth: true,
			method: 'POST',
			// desc: '用户钱包账单列表',
		},

		profile: {
			url: 'web/user/profile',
			auth: true,
			method: 'POST',
			// desc: '修改用户信息',
		},

		changemobile: {
			url: 'web/user/changemobile',
			auth: true,
			method: 'POST',
			// desc: '修改手机号',
		},

		changepwd: {
			url: 'web/user/changepwd',
			auth: true,
			method: 'POST',
			// desc: '修改密码',
		},

		resetpwd: {
			url: 'web/user/resetpwd',
			auth: false,
			method: 'POST',
			// desc: '重置密码',
		},

		mobileLogin: {
			url: 'web/user/mobileLogin',
			auth: false,
			method: 'POST',
			// desc: '手机验证码登录',
		},

		accountLogin: {
			url: 'web/user/accountLogin',
			auth: false,
			method: 'POST',
			// desc: '账号密码登录',
		},

		getWxMiniProgramSessionKey: {
			url: 'web/weChat/memberAuthorize',
			auth: false,
			method: 'POST',
			// desc: '获取用户session_key',
		},
		getWxMiniPhoneNumber: {
			url: 'web/phone/phoneNumber',
			auth: false,
			method: 'POST',
			// desc: '获取用户手机号码',
		},

		wxMiniProgramLogin: {
			url: 'web/weChat/memberLogin',
			auth: false,
			method: 'POST',
			// desc: '微信小程序登录',
		},

		wxOpenPlatformLogin: {
			url: 'web/user/wxOpenPlatformLogin',
			auth: false,
			method: 'POST',
			// desc: '微信APP登录',
		},

		register: {
			url: 'web/user/register',
			auth: false,
			method: 'POST',
			// desc: '用户注册',
		},
		forgot: {
			url: 'web/user/forgot',
			auth: false,
			method: 'POST',
			// desc: '忘记密码',
		},
	},

	/** 分享 ↓ **/
	share: {
		add: {
			url: 'web/share/add',
			auth: false,
			method: 'POST',
			// desc: '添加分享记录',
		}
	},

	/** 位置 ↓ **/
	address: {
		area: {
			url: 'web/address/area',
			auth: false,
			method: 'GET',
			// desc: '省市区',
		},
		list: {
			url: 'web/address',
			auth: true,
			method: 'GET',
			// desc: '地址列表',
		},
		edit: {
			url: 'web/address/edit',
			auth: true,
			method: 'POST',
			// desc: '修改地址',
		},
		defaults: {
			url: 'web/address/defaults',
			auth: true,
			method: 'GET',
			// desc: '默认地址',
		},
		info: {
			url: 'web/address/info',
			auth: true,
			method: 'GET',
			// desc: '地址详情',
		},
		del: {
			url: 'web/address/del',
			auth: true,
			method: 'POST',
			// desc: '删除',
		},
	},

	/** 短信 ↓ **/
	sms: {
		send: {
			url: 'web/sms/send',
			auth: false,
			method: 'POST',
			// desc: '发送短信',
		},
	},

	/** 常见问题 ↓ **/
	faq: {
		list: {
			url: 'web/faq',
			auth: false,
			method: 'GET',
			// desc: '常见问题列表',
		},
	},
	/** 购物车 ↓ **/
	cart: {
		index: {
			url: 'web/cart',
			auth: true,
			method: 'POST',
			// desc: '购物车商品列表',
		},
		add: {
			url: 'web/cart/add',
			auth: true,
			method: 'POST',
			// desc: '添加购物车',
		},

		edit: {
			url: 'web/cart/edit',
			auth: true,
			method: 'POST',
			// desc: '编辑购物车',
		},
	},

	/** 订单 ↓ **/
	order: {
		index: {
			url: 'web/order/index',
			auth: true,
			method: 'GET',
			// desc: '订单列表',
		},
		orderByOpenId: {
			url: 'web/memberOrder/orderByOpenId',
			auth: true,
			method: 'POST',
			// desc: '订货会订单列表',
		},
		generateOrder: {
			url: 'web/memberOrder/generateOrder',
			auth: true,
			method: 'POST',
			// desc: '订货会生成订单',
		},
		findDetails: {
			url: 'web/memberOrderDetails/findDetails',
			auth: true,
			method: 'POST',
			// desc: '订货会订单详情',
		},
		pre: {
			url: 'web/order/pre',
			auth: true,
			method: 'POST',
			// desc: '预备提交订单',
		},
		createOrder: {
			url: 'web/order/createOrder',
			auth: true,
			method: 'POST',
			// desc: '提交订单',
		},
		detail: {
			url: 'web/order/detail',
			auth: true,
			method: 'GET',
			// desc: '订单详情',
		},
		itemDetail: {
			url: 'web/order/itemDetail',
			auth: true,
			method: 'GET',
			// desc: '订单商品详情',
		},
		confirm: {
			url: 'web/order/confirm',
			auth: true,
			method: 'POST',
			// desc: '确认收货',
		},
		refund: {
			url: 'web/order/refund',
			auth: true,
			method: 'POST',
			// desc: '申请退款',
		},
		cancel: {
			url: 'web/order/cancel',
			auth: true,
			method: 'POST',
			// desc: '取消订单',
		},
		statusNum: {
			url: 'web/order/statusNum',
			auth: true,
			method: 'GET',
			// desc: '订单dot',
		},
		comment: {
			url: 'web/order/comment',
			auth: true,
			method: 'POST',
			// desc: '评价商品',
		},
		coupons: {
			url: 'web/order/coupons',
			auth: true,
			method: 'POST',
			// desc: '商品可用优惠券',
		},
		aftersale: {
			url: 'web/order_aftersale/aftersale',
			auth: true,
			method: 'POST',
			// desc: '申请售后',
		},
		aftersaleList: {
			url: 'web/order_aftersale/index',
			auth: true,
			method: 'GET',
			// desc: '售后列表',
		},
		aftersaleDetail: {
			url: 'web/order_aftersale/detail',
			auth: true,
			method: 'GET',
			// desc: '售后列表详情',
		},
		deleteOrder: {
			url: 'web/order/delete',
			auth: true,
			method: 'POST',
			// desc: '删除订单',
		},
		deleteAftersaleOrder: {
			url: 'web/order_aftersale/delete',
			auth: true,
			method: 'POST',
			// desc: '删除售后订单',
		},
		cancelAftersaleOrder: {
			url: 'web/order_aftersale/cancel',
			auth: true,
			method: 'POST',
			// desc: '取消售后订单',
		},
		expressList: {
			url: 'web/order_express/index',
			auth: true,
			method: 'GET',
			// desc: '包裹列表',
		},
		expressDetail: {
			url: 'web/order_express/detail',
			auth: true,
			method: 'GET',
			// desc: '包裹详情',
		},
		/* itemDetail: {
			url: 'web/order/itemDetail',
			auth: true,
			method: 'GET',
			// desc: '订单商品详情',
		} */
	},

	/** 支付 ↓ **/
	pay: {
		prepay: {
			url: 'web/WeChat/payMoney',
			auth: true,
			method: 'POST',
			// desc: '发起支付',
		},
	},

	/** 钱包明细 ↓ **/
	user_wallet_log: {
		url: 'web/user_wallet_log',
		auth: true,
		method: 'GET',
		// desc: '钱包明细',
	},

	/** 银行卡 ↓ **/
	user_bank: {
		info: {
			url: 'web/user_bank/info',
			auth: true,
			method: 'GET',
			// desc: '银行卡信息',
		},
		edit: {
			url: 'web/user_bank/edit',
			auth: true,
			method: 'POST',
			// desc: '编辑银行卡信息',
		}
	},

	/** 评论 ↓ **/
	comment: {
		submit: {
			url: 'web/comment/submit',
			auth: true,
			method: 'POST',
			// desc: '提交评论',
		},
		list: {
			url: 'web/comment/list',
			auth: true,
			method: 'GET',
			// desc: '评论列表',
		}
	}, 
};
