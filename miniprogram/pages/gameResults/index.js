Page({
  data: {
    target:'',
    num:'',
    
  },
  onLoad: function (options) {
    const target = options.target; // 获取名为 "target" 的参数
    const num = options.num; // 获取名为 "num" 的参数
    this.setData({
      target,
      num
    });
  },
  // 返回按钮点击事件处理函数
  returnToMenu: function () {
    // 处理返回菜单的逻辑，可以跳转到菜单页面或其他操作
    wx.navigateBack({
      delta: 1, // 返回上一页
    });
  },
});