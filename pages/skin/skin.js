import APIS from '../../config/server'

Page({
  data:{
    skin:[]
  },
  onLoad(){
    this.fatchData()
  },
  fatchData(){
    var that = this;
    wx.request({
      url:APIS.skin,
      data:{},
      success:function(res){
        console.log(res.data.data);
        if (res.data.success) {
          that.setData({
            skin:res.data.data
          })
        }
      }
    })
  },
  skinDetail(e){
    //获取wxml定义的自定义属性的值(data-item)
    let item = e.target.dataset.item;
    wx.navigateTo({
      url:`/pages/skinInfo/skinInfo?params=${item.url}`
    })
  }
})
