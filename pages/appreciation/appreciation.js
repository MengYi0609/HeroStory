//获取全局应用
const app = getApp();

Page({
  toGo(e){
    const str = e.target.dataset.url;
    if (str === '') {
      wx.showModal({
        content: "敬请期待",
        confirmText: "确定",
        showCancel: false,
        confirmColor:'#ff9999'
      })
    }
    else{
      wx.navigateTo({
        url:`/pages/${str}/${str}`
      })
    }
  }
})
