<template>
  <div>
    <div @tap="toMovieDetail(index)" v-for="(movie,index) in moviesArr" :key="index" class="moviesContainer">
      <img :src="movie.data[0].poster" alt="">
      <div class="moviesDetail">
        <p class="moviesName">{{movie.data[0].name}}</p>
        <p class="moviesYear">年份:{{movie.year}}</p>
        <p class="moviesLanguage">语言:{{movie.data[0].language}}</p>
      </div>
      <p class="moviesRating">{{movie.doubanRating}}</p>
    </div>
  </div>
</template>

<script>

  export default{

   data(){
     return {
       moviesArr:[]
     }
   },
    beforeMount(){
      const MOVIE_URL = 'https://api.wmdb.tv/api/v1/top?type=Imdb&skip=0&limit=20&lang=Cn'
      // 发送请求
      this.$fly.get(MOVIE_URL)
        .then((response) =>{
         // console.log(response);
          let moviesArr = response.data
          console.log(moviesArr)
          this.$store.dispatch('getMoviesArr',moviesArr)
          this.moviesArr=moviesArr
        })
        .catch((error)=> {
          console.log(error);
        });
    },
    methods:{
      toMovieDetail(index){
        wx.navigateTo({
          url:'/pages/movieDetail/main?index='+index
        })
      }
    }

  }

</script>
<style>
  .moviesContainer{
    display: flex;
    padding: 10rpx;
    border-bottom: 1px solid #eee;
  }
  .moviesDetail{
    width: 70%;
  }
  .moviesContainer img{
    width: 128rpx;
    height: 128rpx;
    margin-right: 10rpx;
  }
  .moviesName{
    font-size: 32rpx;
    color: #333333;
  }
  .moviesYear{
    font-size: 28rpx;
    color: #999;
    margin: 10rpx 0;
  }
  .moviesLanguage{
    font-size: 30rpx;
    color: #666;
  }
  .moviesRating{
    font-size: 36rpx;
    font-weight: bold;
    color: red;
  }
</style>
