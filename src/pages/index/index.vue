<template>
  <div class="indexContainer">
    <Button class="btn" v-if="!isShow" @tap="getUserProfile"> 获取头像昵称 </Button>
    <div v-else class="successContainer">
      <img  class="indexImg" :src="userInfo.avatarUrl" />
      <text  class="userName">hello {{userInfo.nickName}}</text>
      <div @tap="toDetail" class="goStudy">
        <text >一起开启小程序之旅吧!!!</text>
      </div>
    </div>


  </div>
</template>

<script>
  export default{
    data(){
      return {
        userInfo:{},
        isShow:false
      }

    },
    beforeMount(){
      // 读取本地缓存
      let userStrong = wx.getStorageSync('isShow')
      // 如果本地缓存中有数据，则修改dat中的数据
      if(userStrong){
        this.userInfo=userStrong
        this.isShow=true
      }
  },

    methods:{
      // 点击按钮获取授权的方法
      getUserProfile(e) {
        // 获取用户信息
        wx.getUserProfile({
          desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (data) => {
            console.log(data)
            this.isShow=true
            this.userInfo = data.userInfo
            // 缓存数据到本地
            wx.setStorageSync('isShow',data.userInfo)
          }
        })
      },
      toDetail(){
        // console.log(11)
        wx.switchTab({
          url:'/pages/list/main'
        })
      }
    }
  }

</script>
<style>
  page{
    background-color: #8ed145;
  }
   .indexContainer{
     display: flex;
     flex-direction: column;
     align-items: center;

   }
   .successContainer{
     display: flex;
     flex-direction: column;
     align-items: center;
   }
   .btn{
     width: 300rpx;
     height: 300rpx;
     border-radius: 50%;
     font-size: 30rpx;
     line-height: 300rpx;
     margin: 200rpx;
   }
  .indexImg{
    width: 200rpx;
    height: 200rpx;
    border-radius: 50%;
    margin: 100rpx 0;
  }
  .userName{
    font-size: 40rpx;
    font-weight: bold;
    margin: 100rpx 0;
  }
  .goStudy{
    width: 280rpx;
    height: 80rpx;
    border: 1px solid black;
    text-align: center;
    line-height: 80rpx;
    border-radius: 20rpx;
    font-size: 24rpx;
    margin: 100rpx 0;
  }
</style>
