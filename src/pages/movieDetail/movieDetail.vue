<template>
  <div class="moviesDelContainer">
    <img class="moviesDelImg" :src="movieDetail.data[0].shareImage">
    <text class="moviesDelName">{{movieDetail.data[0].name}}</text>
    <div class="moviesDel">
      <p class="moviesDelRating">评分：{{movieDetail.doubanRating}}</p>
      <p class="moviesDelLanguage">语言：{{movieDetail.data[0].language}}</p>
      <div class="moviesDelInfo" :title="movieDetail.data[0].description">电影简介：{{movieDetail.data[0].description}}</div>
    </div>
    <button class="btn" type="primary">我要观影</button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    data(){
      return {
        movieDetail:{}
      }
    },
    beforeMount(){
      console.log(this)
      this.movieDetail = this.moviesArr[this.$mp.query.index]
      console.log(this.movieDetail)
    },
    computed:{
      ...mapState(['moviesArr'])
    }
  }

</script>
<style>
   .moviesDelContainer{
     display: flex;
     flex-direction: column;
     align-items: center;
   }
  .moviesDelImg{
    width: 500rpx;
    height: 700rpx;
     margin: 20rpx 0;
  }
  .moviesDelName{
    font-size: 48rpx;
    font-weight: bold;
  }
  .moviesDel{
    margin-left: 50rpx;
  }
  .moviesDelInfo{
    display: -webkit-box;
    overflow:hidden;
    -webkit-box-orient:vertical ;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
  }
   .moviesDelInfo:hover{
     overflow: visible;
     text-overflow: inherit;
   }

  .moviesDel p{
    font-size: 32rpx;
  }
  .btn{
    width: 70%;
    height:80rpx;
    line-height: 80rpx;
    margin: 20rpx 0;
  }
</style>
