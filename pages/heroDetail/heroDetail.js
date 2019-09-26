import APIS from '../../config/server'

Page({
  data:{
    hero:{}
  },
  onLoad(option){
    //把json字符串转化为对象
    let params = JSON.parse(option.params);
    this.fatchData(params.id,params.url)
  },
  fatchData(id,url){
    var that = this;
    wx.request({
      url:APIS.heroDetail,
      method:"POST",
      data:{id,url},
      success:function(res){
        if (res.data.success) {
          that.setData({
            hero:res.data.data
          })
        }
      }
    })
  },
  showHistory(){
    var that = this;
    wx.showModal({
      title: that.data.hero.historyTitle,
      content: that.data.hero.historyContent.trim(),
      showCancel: false,
      confirmColor:'#ff9999'
    })
  },
  showImg(e){
    let item = e.target.dataset.item;
    var urls = [];
    let data = this.data.hero.heroDetail;

    for (var key in data) {
      if (data[key].type == "img") {
        urls.push(`https:${data[key].text}`);
      }
    }

    wx.previewImage({
      current:item.text,
      urls:urls
    })
  }
})
