import APIS from '../../config/server'

Page({
  data:{
    music:{},
    poster:'',
    name:'王者荣耀语音',
    author:'naice',
    src:'',
  },

  onLoad(){
    this.fatchData();
  },

  onReady(){
    this.audioCtx = wx.createAudioContext("myAudio")
  },

  playMain(){
    var that = this;
    let url = that.data.music.yllb_38[0].gq_db

    if (!/^http/.test(url)) {
      url = 'https:' + url
    }

    that.setData({
      src:url
    });

    setTimeout(() => {
      that.audioCtx.play()
    }, 10)
  },

  play(e){
    var that = this;
    let url = e.target.dataset.url

    if (!/^http/.test(url)) {
      url = 'https:' + url
    }

    this.setData({
      src:url
    })

    setTimeout(() => {
      that.audioCtx.play()
    },10)
  },

  fatchData(){
    let that = this;
    wx.request({
      url:APIS.music,
      data:{},
      success:function(res){
        console.log(res.data.data)
        if (res.data.success) {
          that.setData({
            music:res.data.data
          })
        }
      }
    })
  }
})
