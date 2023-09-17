// index.js
// const app = getApp()


Page({
  data: {
    
  },

  //点击跳转页面
  redirectToGame: function () {
    wx.navigateTo({
      url: '/pages/answer/index', // 跳转到游戏页面的路径
    });
  },

});
