//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showSkeleton: true,
    lists: [
      {
        songType: 0,
        title: "( (ಡωಡ) 严格说起来这是我这几个月第一次录歌～～所以选了个最短的～233333 不过这歌满满的都是回忆（*/∇＼*） 谢谢绯戈妞妞的后期哟～～～",
        type: 0,
        cover_img: "//aliimg.changba.com/cache/photo/624b1cc5-783c-44e0-93a1-b4c242dfddbe_640_640.jpg",
        songname: "相思",
        userid: "47678858",
        nickname: "曲墨～",
        headphoto: "//aliimg.changba.com/cache/photo/250730692_200_200.jpg",
        listen_num: 3273
      },
      {
        songType: 0,
        title: "很爱很爱你",
        type: 0,
        cover_img: "//aliimg.changba.com/cache/photo/624b1cc5-783c-44e0-93a1-b4c242dfddbe_640_640.jpg",
        songname: "很爱很爱你",
        userid: "5051011",
        nickname: "徐十里",
        headphoto: "//aliimg.changba.com/cache/photo/837939480_200_200.jpg",
        listen_num: 25603
      },
      {
        songType: 0,
        title: "....",
        type: 0,
        cover_img: "//aliimg.changba.com/cache/photo/47592fe2-85da-4141-9d5d-05f28d91a52f_640_640.jpg",
        songname: "男人KTV",
        userid: "132564622",
        nickname: "178·",
        headphoto: "//aliimg.changba.com/cache/photo/850390051_200_200.jpg",
        listen_num: 48595
      },
      {
        songType: 0,
        title: "( (ಡωಡ) 严格说起来这是我这几个月第一次录歌～～所以选了个最短的～233333 不过这歌满满的都是回忆（*/∇＼*） 谢谢绯戈妞妞的后期哟～～～",
        type: 0,
        cover_img: "//aliimg.changba.com/cache/photo/624b1cc5-783c-44e0-93a1-b4c242dfddbe_640_640.jpg",
        songname: "相思",
        userid: "47678858",
        nickname: "曲墨～",
        headphoto: "//aliimg.changba.com/cache/photo/250730692_200_200.jpg",
        listen_num: 3273
      },
      {
        songType: 0,
        title: "很爱很爱你",
        type: 0,
        cover_img: "//aliimg.changba.com/cache/photo/624b1cc5-783c-44e0-93a1-b4c242dfddbe_640_640.jpg",
        songname: "很爱很爱你",
        userid: "5051011",
        nickname: "徐十里",
        headphoto: "//aliimg.changba.com/cache/photo/837939480_200_200.jpg",
        listen_num: 25603
      },
      {
        songType: 0,
        title: "....",
        type: 0,
        cover_img: "//aliimg.changba.com/cache/photo/47592fe2-85da-4141-9d5d-05f28d91a52f_640_640.jpg",
        songname: "男人KTV",
        userid: "132564622",
        nickname: "178·",
        headphoto: "//aliimg.changba.com/cache/photo/850390051_200_200.jpg",
        listen_num: 48595
      },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    setTimeout(() => {
      this.setData({
        showSkeleton: false
      })
    }, 3000);
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
