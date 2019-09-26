import APIS from '../../config/server'

const mainTitleImag = {
  '482175': 'https://game.gtimg.cn/images/yxzj/act/a20160510story/btn_por_origin5_hover.jpg',
  '482168': 'https://game.gtimg.cn/images/yxzj/act/a20160510story/btn_por_origin4_hover.jpg',
  '482154': 'https://game.gtimg.cn/images/yxzj/act/a20160510story/btn_por_origin3_hover.jpg',
  '482143': 'https://game.gtimg.cn/images/yxzj/act/a20160510story/btn_por_origin2_hover.jpg',
  '482129': 'https://game.gtimg.cn/images/yxzj/act/a20160510story/btn_por_origin1_hover.jpg'
}

Page({
  data:{
    navTitle:'https://game.gtimg.cn/images/yxzj/act/a20160510story/btn_por_origin5_hover.jpg',
    mainNav:{},
    subNav:[],
    constent:{},
    navIndex:-1
  },
  onLoad(option){
    this.fatchNav(option.id);
    this.setData({
      navTitle:mainTitleImag[option.id]
    })
  },
  fatchNav(id){
    var that = this;
    wx.request({
      url:APIS.wordNav,
      data:{id},
      success:function(res){
        console.log(res)
        if (res.data.success) {
          let r = res.data.data;
          let main = r.shift() //把数组的第一个元素从其中删除，并返回第一个元素的值

          that.setData({
            mainNav:main,
            subNav:r
          })

          that.fatchDetail(main.InfoId,main.infourl);
        }
      }
    })
  },
  fatchDetail(id,url){
    var that = this;
    wx.request({
      url:APIS.wordDetail,
      method:"POST",
      data:{id,url},
      success:function(res){
        
        if (res.data.success) {
          that.setData({
            constent:res.data.data
          })
        }
      }
    })
  },
  tapMain(){
    let id = this.data.mainNav.InfoId
    let url = this.data.mainNav.infourl

    this.setData({
      navIndex:-1
    })

    this.fatchDetail(id,url)
  },
  tapSub(e){
    let index = e.target.dataset.index
    let id = this.data.subNav[index].InfoId
    let infourl = this.data.subNav[index].infourl

    this.setData({
      navIndex:index
    })

    this.fatchDetail(id,infourl)
  }
})
