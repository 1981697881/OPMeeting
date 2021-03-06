/**
 * 接口列表文件
 */
export default {
	/** 初始化 ↓ **/
	init: {
		url: 'index/init',
		auth: false,
		method: 'GET',
		// desc: '初始化数据',
	},
	/** 上传图片 ↓ **/
	upload: {
		url: 'index/upload',
		auth: true,
		method: 'POST',
		// desc: '上传',
	},

	/** 上传Base64图片 ↓ **/
	uploadBase64: {
		url: 'index/uploadBase64',
		auth: false,
		method: 'POST',
		// desc: '上传Base64位图片',
	},

	/** 消息订阅模板 ↓ **/
	messageIds: {
		url: 'notification/template',
		auth: true,
		method: 'GET',
		// desc: '订阅消息模板ids',
	},

	/** 模板信息 ↓ **/
	template: {
		url: 'index/template',
		auth: false,
		method: 'GET',
		// desc: '模板信息',
	},
	/** 自定义模板页面 ↓ **/
	custom: {
		url: 'index/custom',
		auth: false,
		method: 'GET',
		// desc: '自定义模板页面',
	},

	/** 签到 ↓ **/
	user_sign: {
		index: {
			url: 'user_sign/index',
			auth: true,
			method: 'GET',
			// desc: '签到记录',
		},
		sign: {
			url: 'user_sign/sign',
			auth: true,
			method: 'POST',
			// desc: '签到',
		}
	},

	/** 同步路由 ↓ **/
	dev: {
		asyncLink: {
			url: 'index/asyncLink',
			auth: false,
			method: 'POST',
			// desc: '路由表',
		},
		asyncDecorateScreenShot: {
			url: 'index/asyncDecorateScreenShot',
			auth: false,
			method: 'POST',
			// desc: '更新店铺装修截图',
		},
		asyncBannerBgColor: {
			url: 'index/asyncBannerBgColor',
			auth: false,
			method: 'POST',
			// desc: '路由表',
		},
		debug: {
			url: 'index/debugLog',
			auth: false,
			method: 'POST',
		}
	},

	/** 富文本  ↓ **/
	richtext: {
		url: 'index/richtext',
		auth: false,
		method: 'GET',
		// desc: '富文本数据',
	},

	/** 三级分类 ↓ **/
	category: {
		url: 'category',
		auth: false,
		method: 'GET',
		// desc: '三级分类',
	},
	/** 二级分类 ↓ **/
	categoryGoods: {
		url: 'category/goods',
		auth: false,
		method: 'GET',
		// desc: '点餐用',
	},

	/** 商品评论 ↓ **/
	goods_comment: {
		list: {
			url: 'goods_comment/index',
			auth: false,
			method: 'GET',
			// desc: '商品评论列表',
		},
		type: {
			url: 'goods_comment/type',
			auth: false,
			method: 'GET',
			// desc: '商品评论分类',
		},
	},
	/** 商品 ↓ **/
	goods: {
		classification: {
			url: 'app/api/classification',
			auth: false,
			method: 'POST',
			// desc: '商品分类',
		},
		lists: {
			url: 'goods/lists',
			auth: false,
			method: 'GET',
			// desc: '商品列表',
		},
		commodityList: {
			url: 'app/api/spuList',
			auth: false,
			method: 'POST',
			// desc: '订货会商品列表',
		},
		commodityListDetail: {
			url: 'app/api/findSkuBySpuId ',
			auth: false,
			method: 'POST',
			// desc: '订货会商品明细列表',
		},
		memberGoodsList: {
			url: 'memberGoods/memberGoodsList',
			auth: true,
			method: 'POST',
			// desc: '商品订单列表',
		},
		seckillList: {
			url: 'goods/seckillList',
			auth: false,
			method: 'GET',
			// desc: '秒杀列表',
		},
		activity: {
			url: 'goods/activity',
			auth: false,
			method: 'GET',
			// desc: '活动商品',
		},
		myGroupon: {
			url: 'activity_groupon/myGroupon',
			auth: true,
			method: 'GET',
			// desc: '我的拼团',
		},
		grouponDetail: {
			url: 'activity_groupon/detail',
			auth: true,
			method: 'GET',
			// desc: '拼团详情',
		},
		grouponItem: {
			url: 'activity_groupon/index',
			auth: false,
			method: 'GET',
			// desc: '拼购列表',
		},
		grouponList: {
			url: 'goods/grouponList',
			auth: false,
			method: 'GET',
			// desc: '拼团商品列表',
		},
		detail: {
			url: 'goods/detail',
			auth: false,
			method: 'GET',
			// desc: '商品详情',
		},
		favorite: {
			url: 'goods/favorite',
			auth: true,
			method: 'POST',
			// desc: '商品收藏',
		},
		favoriteList: {
			url: 'goods/favoriteList',
			auth: true,
			method: 'GET',
			// desc: '商品收藏列表',
		},
		viewList: {
			url: 'goods/viewList',
			auth: true,
			method: 'GET',
			// desc: '足迹列表',
		},
		viewDelete: {
			url: 'goods/viewDelete',
			auth: true,
			method: 'POST',
			// desc: '删除足迹',
		},
		storeAddress: {
			url: 'goods/store',
			auth: true,
			method: 'GET',
			// desc: '商品支持的自提点',
		},
	},

	/** 用户 ↓ **/
	user: {
		info: {
			url: 'user',
			auth: true,
			method: 'GET',
			// desc: '用户信息',
		},
		member: {
			url: 'member/loginMember',
			auth: true,
			method: 'POST',
			// desc: '用户信息',
		},
		transactionLogDorRList: {
			url: 'transactionLog/transactionLogDorRList',
			auth: true,
			method: 'POST',
			// desc: '用户钱包账单列表',
		},

		profile: {
			url: 'user/profile',
			auth: true,
			method: 'POST',
			// desc: '修改用户信息',
		},

		changemobile: {
			url: 'user/changemobile',
			auth: true,
			method: 'POST',
			// desc: '修改手机号',
		},

		changepwd: {
			url: 'user/changepwd',
			auth: true,
			method: 'POST',
			// desc: '修改密码',
		},

		resetpwd: {
			url: 'user/resetpwd',
			auth: false,
			method: 'POST',
			// desc: '重置密码',
		},

		mobileLogin: {
			url: 'user/mobileLogin',
			auth: false,
			method: 'POST',
			// desc: '手机验证码登录',
		},

		accountLogin: {
			url: 'user/accountLogin',
			auth: false,
			method: 'POST',
			// desc: '账号密码登录',
		},

		getWxMiniProgramSessionKey: {
			url: 'weChat/memberAuthorize',
			auth: false,
			method: 'POST',
			// desc: '获取用户session_key',
		},
		getWxMiniPhoneNumber: {
			url: 'phone/phoneNumber',
			auth: false,
			method: 'POST',
			// desc: '获取用户手机号码',
		},

		wxMiniProgramLogin: {
			url: 'weChat/memberLogin',
			auth: false,
			method: 'POST',
			// desc: '微信小程序登录',
		},

		wxOpenPlatformLogin: {
			url: 'user/wxOpenPlatformLogin',
			auth: false,
			method: 'POST',
			// desc: '微信APP登录',
		},

		register: {
			url: 'user/register',
			auth: false,
			method: 'POST',
			// desc: '用户注册',
		},
		forgot: {
			url: 'user/forgot',
			auth: false,
			method: 'POST',
			// desc: '忘记密码',
		},
	},

	/** 分享 ↓ **/
	share: {
		add: {
			url: 'share/add',
			auth: false,
			method: 'POST',
			// desc: '添加分享记录',
		}
	},

	/** 位置 ↓ **/
	address: {
		area: {
			url: 'address/area',
			auth: false,
			method: 'GET',
			// desc: '省市区',
		},
		list: {
			url: 'address',
			auth: true,
			method: 'GET',
			// desc: '地址列表',
		},
		edit: {
			url: 'address/edit',
			auth: true,
			method: 'POST',
			// desc: '修改地址',
		},
		defaults: {
			url: 'address/defaults',
			auth: true,
			method: 'GET',
			// desc: '默认地址',
		},
		info: {
			url: 'address/info',
			auth: true,
			method: 'GET',
			// desc: '地址详情',
		},
		del: {
			url: 'address/del',
			auth: true,
			method: 'POST',
			// desc: '删除',
		},
	},

	/** 短信 ↓ **/
	sms: {
		send: {
			url: 'sms/send',
			auth: false,
			method: 'POST',
			// desc: '发送短信',
		},
	},

	/** 常见问题 ↓ **/
	faq: {
		list: {
			url: 'faq',
			auth: false,
			method: 'GET',
			// desc: '常见问题列表',
		},
	},
	/** 购物车 ↓ **/
	cart: {
		index: {
			url: 'cart',
			auth: true,
			method: 'POST',
			// desc: '购物车商品列表',
		},
		add: {
			url: 'cart/add',
			auth: true,
			method: 'POST',
			// desc: '添加购物车',
		},

		edit: {
			url: 'cart/edit',
			auth: true,
			method: 'POST',
			// desc: '编辑购物车',
		},
	},

	/** 订单 ↓ **/
	order: {
		index: {
			url: 'order/index',
			auth: true,
			method: 'GET',
			// desc: '订单列表',
		},
		orderByOpenId: {
			url: 'memberOrder/orderByOpenId',
			auth: true,
			method: 'POST',
			// desc: '订货会订单列表',
		},
		generateOrder: {
			url: 'memberOrder/generateOrder',
			auth: true,
			method: 'POST',
			// desc: '订货会生成订单',
		},
		findDetails: {
			url: 'memberOrderDetails/findDetails',
			auth: true,
			method: 'POST',
			// desc: '订货会订单详情',
		},
		pre: {
			url: 'order/pre',
			auth: true,
			method: 'POST',
			// desc: '预备提交订单',
		},
		createOrder: {
			url: 'order/createOrder',
			auth: true,
			method: 'POST',
			// desc: '提交订单',
		},
		detail: {
			url: 'order/detail',
			auth: true,
			method: 'GET',
			// desc: '订单详情',
		},
		itemDetail: {
			url: 'order/itemDetail',
			auth: true,
			method: 'GET',
			// desc: '订单商品详情',
		},
		confirm: {
			url: 'order/confirm',
			auth: true,
			method: 'POST',
			// desc: '确认收货',
		},
		refund: {
			url: 'order/refund',
			auth: true,
			method: 'POST',
			// desc: '申请退款',
		},
		cancel: {
			url: 'order/cancel',
			auth: true,
			method: 'POST',
			// desc: '取消订单',
		},
		statusNum: {
			url: 'order/statusNum',
			auth: true,
			method: 'GET',
			// desc: '订单dot',
		},
		comment: {
			url: 'order/comment',
			auth: true,
			method: 'POST',
			// desc: '评价商品',
		},
		coupons: {
			url: 'order/coupons',
			auth: true,
			method: 'POST',
			// desc: '商品可用优惠券',
		},
		aftersale: {
			url: 'order_aftersale/aftersale',
			auth: true,
			method: 'POST',
			// desc: '申请售后',
		},
		aftersaleList: {
			url: 'order_aftersale/index',
			auth: true,
			method: 'GET',
			// desc: '售后列表',
		},
		aftersaleDetail: {
			url: 'order_aftersale/detail',
			auth: true,
			method: 'GET',
			// desc: '售后列表详情',
		},
		deleteOrder: {
			url: 'order/delete',
			auth: true,
			method: 'POST',
			// desc: '删除订单',
		},
		deleteAftersaleOrder: {
			url: 'order_aftersale/delete',
			auth: true,
			method: 'POST',
			// desc: '删除售后订单',
		},
		cancelAftersaleOrder: {
			url: 'order_aftersale/cancel',
			auth: true,
			method: 'POST',
			// desc: '取消售后订单',
		},
		expressList: {
			url: 'order_express/index',
			auth: true,
			method: 'GET',
			// desc: '包裹列表',
		},
		expressDetail: {
			url: 'order_express/detail',
			auth: true,
			method: 'GET',
			// desc: '包裹详情',
		},
		/* itemDetail: {
			url: 'order/itemDetail',
			auth: true,
			method: 'GET',
			// desc: '订单商品详情',
		} */
	},

	/** 支付 ↓ **/
	pay: {
		prepay: {
			url: 'WeChat/payMoney',
			auth: true,
			method: 'POST',
			// desc: '发起支付',
		},
	},

	/** 钱包明细 ↓ **/
	user_wallet_log: {
		url: 'user_wallet_log',
		auth: true,
		method: 'GET',
		// desc: '钱包明细',
	},

	/** 银行卡 ↓ **/
	user_bank: {
		info: {
			url: 'user_bank/info',
			auth: true,
			method: 'GET',
			// desc: '银行卡信息',
		},
		edit: {
			url: 'user_bank/edit',
			auth: true,
			method: 'POST',
			// desc: '编辑银行卡信息',
		}
	},

	/** 评论 ↓ **/
	comment: {
		submit: {
			url: 'comment/submit',
			auth: true,
			method: 'POST',
			// desc: '提交评论',
		},
		list: {
			url: 'comment/list',
			auth: true,
			method: 'GET',
			// desc: '评论列表',
		}
	}, 
};
