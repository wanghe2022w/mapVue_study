<template>
  <div class="detailContainer">
    <img class="detailHead" :src="detailObj.detail_img">

    <img class="detailMusic" @tap="onPlay" :src="isPlay?'https://github.com/wanghe2022w/images/blob/main/static/images/music/music-start.png':'https://github.com/wanghe2022w/images/blob/main/static/images/music/music-stop.png'">
    <div class="avatarDate">
      <img :src="detailObj.avatar">
      <span>{{detailObj.author}}</span>
      <span>发布于</span>
      <span>{{detailObj.date}}</span>
    </div>
    <text class="company">{{detailObj.title}}</text>
    <div class="collectionShareContainer">
      <div class="collectionShare">
        <img @tap="handelCollection" :src="isCollected ? 'https://github.com/wanghe2022w/images/blob/main/static/images/icon/collection.png' : 'https://github.com/wanghe2022w/images/blob/main/static/images/icon/collection-anti.png'">
        <img @tap="handelShare" :src="isShare? 'https://github.com/wanghe2022w/images/blob/main/static/images/icon/share.png':'https://github.com/wanghe2022w/images/blob/main/static/images/icon/share-anti.png'">
      </div>
      <div class="line"></div>
    </div>
    <button class="btn" open-type="share">转发此文章</button>
    <p class="content">{{detailObj.detail_content}}</p>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    data(){
      return {
        detailObj:{},
        isCollected:false, // 收藏文章的状态
        isPlay:false, // 默认音乐不播放
        currentOpen:-1, // 当前哪一页是播放状态
        isShare:false
      }
    },
    beforeMount(){
      console.log(this)
      // 页面加载之前获取index,取代原生小程序中的onLoad中的options
      this.index = this.$mp.query.index
     // 读取缓存
     let oldStorage = wx.getStorageSync('isCollected')
      // oldStorage true  false undefined
     if(!oldStorage){ // 如果没有缓存，为空
       // 设置缓存为空对象
       wx.setStorage({
         key:'isCollected',
         data:{}
       })
     }else {
      this.isCollected = oldStorage[this.index] ? true : false
     }
      this.music = wx.getBackgroundAudioManager()

      // 读取本地缓存的音乐状态
      let oldMusicStorage = wx.getStorageSync('isPlay')
      if(!oldMusicStorage){ // 缓存为空
        // 设置缓存为空对象
        wx.setStorageSync('isPlay',{})
      }else {
        this.isPlay=oldMusicStorage[this.index]  ? true:false
      }
     // 监听音乐播放与暂停
      this.music.onPlay(()=>{
        this.isPlay=true
      })
      this.music.onStop(()=>{
        this.isPlay=false
      })
    },
    computed:{
      ...mapState(['listTmp'])

    },
    mounted(){
      this.detailObj = this.listTmp[this.index]
    },
    methods:{
      // 点击收藏按钮，修改状态
      handelCollection(){
        this.isCollected = !this.isCollected
        let title = this.isCollected ? '收藏成功':'取消收藏'
        wx.showToast({
          title,
          icon:'success'
        })
        // 读取之前本地缓存的状态是否为收藏状态
         let oldStorage =  wx.getStorageSync('isCollected')
         oldStorage[this.index] = this.isCollected
       // let obj ={}
       // obj[this.index]=this.isCollected
        // 将本次设置的结果在缓存到本地
          wx.setStorage({
            key:'isCollected',
            data: oldStorage
          })

      },
      // 点击音乐播放
      onPlay(){
        this.isPlay = !this.isPlay
        this.music.title=this.detailObj.music.title
        this.music.coverImgUrl=this.detailObj.music.coverImgUrl
        this.music.src=this.detailObj.music.dataUrl
        if(this.isPlay){
          // 音乐播放
          this.music.play()
        }else {
          // 音乐停止
          this.music.stop()
        }

        // 读取上一次的本地缓存
       let oldMusicStorage = wx.getStorageSync('isPlay')
        // 判断哪页正在播放，将播放关闭
        if(this.currentOpen>=0){
          oldMusicStorage[this.currentOpen] = false
        }

        if(this.isPlay){
          this.currentOpen = this.index
        }
        // 将本次设置的结果保存到缓存
        oldMusicStorage[this.index] = this.isPlay
        wx.setStorageSync('isPlay',oldMusicStorage)

      },
      // 点击分享
      handelShare(){
        this.isShare= !this.isShare
        wx.showActionSheet({
          itemList: ['分享到朋友圈', '分享到朋微博', '分享到微信好友'],
          success (res) {
            console.log(res.tapIndex)
          },
          fail (res) {
            console.log(res.errMsg)
          }
      })
      }
    }
  }

</script>
<style>
   .detailContainer{
     display: flex;
     flex-direction: column;
   }
  .detailHead{
    width: 100%;
    height: 400rpx;
  }
  .detailMusic{
    width: 60rpx;
    height: 60rpx;
    position: absolute;
    top:200rpx;
    left: 50%;
    margin-left: -30rpx;

  }
  .avatarDate img{
    width: 60rpx;
    height: 60rpx;
    vertical-align: middle;
    margin: 10rpx;
  }
  .avatarDate span{
    font-size: 28rpx;
    margin-left: 10rpx;
  }
  .company{
    font-size: 40rpx;
    font-weight: bold;
    padding: 10rpx;
  }
  .collectionShareContainer{
    width: 100%;
    position: relative;
  }

   .collectionShare{
     margin-left: 500rpx;
   }
  .collectionShare img{
    width: 90rpx;
    height: 90rpx;
    margin-right: 10rpx;

  }
  .line{
    width: 90%;
    height: 1px;
    background-color: #eee;
    position: absolute;
    top:40rpx;
    z-index: -1;
  }
  .content{
    font-size: 32rpx;
    text-indent: 32rpx;
    letter-spacing: 2rpx;
    margin: 20rpx 0;
  }
</style>
