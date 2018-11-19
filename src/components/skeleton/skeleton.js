/**
 * 小程序 骨架屏组件 skeleton
 * 
 * default - 默认微信UI Loading菊花
 * blink - 闪烁skeleton
 * flush - 流动效果skeleton
 * static - 静态skeleton
 */
Component({
    properties: {
        // 这里定义了属性，属性值可以在组件使用时指定
        bgcolor: {
			type: String,
			value: '#fff'
		},
		selector: {
			type: String,
			value: 'skeleton'
		},
		loading: {
			type: String,
			value: 'default'
		},
		isShow: {
			type: Boolean,
			value: true
		}
    },
    data: {
        // 这里是一些组件内部数据
        loadingAnimation: ['default', 'blink', 'flush', 'static'],
		systemInfo: {},
		skeletonRectLists: [],
		skeletonRadiusLists: [],
		skeletonItemLists: [],
    },
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名 // 此处attached的声明会被lifetimes字段中的声明覆盖
    attached: function () { 
        //默认的首屏宽高
		const systemInfo = wx.getSystemInfoSync();
		this.setData({
			systemInfo: {
				width: systemInfo.windowWidth,
				height: systemInfo.windowHeight
			},
			loading: this.data.loadingAnimation.includes(this.data.loading) ? this.data.loading : 'default'
		})
    }, 
    ready: function() {
        //绘制背景
		wx.createSelectorQuery().selectAll(`.${this.data.selector}`).boundingClientRect().exec((res) => {
			console.log(res);
			this.setData({
				'systemInfo.height': res[0][0].height + res[0][0].top
			})
		});

		if (this.data.loading == 'default') {
			wx.showLoading({
				title: '加载中...'
			})
			setTimeout(() => {
				wx.hideLoading();
			}, 3000);
		}
		else if (this.data.loading == 'static' ) {
			this.drawItemLists();
		}
		else {
			//绘制矩形
			this.drawRect();

			//绘制圆形
			this.drawRadius();
		}
     },
    methods: {
        // 这里是一个自定义方法
        drawRect: function() {
            //绘制不带样式的节点
			wx.createSelectorQuery().selectAll(`.${this.data.selector}-rect`).boundingClientRect().exec((res) => {
				console.log(res);
				this.setData({
					skeletonRectLists: res[0]
				})

				console.log(this.data);
			});
        },
        drawRadius: function() {
            //绘制不带样式的节点
			wx.createSelectorQuery().selectAll(`.${this.data.selector}-radius`).boundingClientRect().exec((res) => {
				console.log(res);
				this.setData({
					skeletonRadiusLists: res[0]
				})

				console.log(this.data);
			});
		},
		drawItemLists: function() {
            //绘制不带样式的节点
			wx.createSelectorQuery().selectAll(`.${this.data.selector}-item`).boundingClientRect().exec((res) => {
				console.log(res);
				this.setData({
					skeletonItemLists: res[0]
				})

				console.log(this.data);
			});
        }
    }
})