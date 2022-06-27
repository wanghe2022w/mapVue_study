<template>
  <div class="listTmpContainer" @tap="toDetail">
     <div class="avatarDate">
       <img :src="list.avatar">
       <text>{{list.date}}</text>
     </div>
    <text class="company">{{list.title}}</text>
    <img class="detailImg" :src="list.detail_img">
    <p class="content">{{list.detail_content}}</p>
    <div class="starViewContainer">
      <img src="https://github.com/wanghe2022w/images/blob/main/static/images/icon/star.png">
      <span>{{list.love_count}}</span>
      <img src="https://github.com/wanghe2022w/images/blob/main/static/images/icon/view.png">
      <span>{{list.attention_count}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    props:[
      'list','index'
    ],
    methods:{
      toDetail(){
        console.log(1)
        // 跳转到详情页
        wx.navigateTo({
          url:'/pages/detail/main?index='+this.index
        })
      }
    }
  }

</script>
<style>
  .listTmpContainer{
    display: flex;
    flex-direction: column;
    border-bottom: solid 1px #eee;
  }
  .avatarDate{
    padding: 10rpx;
  }
  .avatarDate img{
    width: 60rpx;
    height:60rpx;
    vertical-align: middle;
    margin-right: 10rpx;
  }
  .avatarDate text{
    font-size: 28rpx;
  }
  .company{
    font-size: 36rpx;
    font-weight: bold;
    margin-bottom: 10rpx;
    margin-left: 10rpx;
  }
.detailImg{
  width: 100%;
  height: 460rpx;
}
  .content{
    font-size:32rpx ;
    text-indent: 32rpx;
    line-height: 50rpx;
    letter-spacing: 2rpx;
  }

  .starViewContainer img{
    width: 32rpx;
    height: 32rpx;
    margin: 0 10rpx;
    vertical-align: middle;
  }
  .starViewContainer span{
    font-size:26rpx ;
    color: #333;
  }
</style>
