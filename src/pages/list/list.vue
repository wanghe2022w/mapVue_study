<template>
  <div class="listContainer">
    <swiper  	indicator-dots autoplay circular>
      <swiper-item>
        <img src="https://github.com/wanghe2022w/images/blob/main/static/images/detail/carousel/01.jpg"/>
      </swiper-item>
      <swiper-item>
        <img src="https://github.com/wanghe2022w/images/blob/main/static/images/detail/carousel/02.jpg"/>
      </swiper-item>
      <swiper-item>
        <img src="https://github.com/wanghe2022w/images/blob/main/static/images/detail/carousel/03.jpg"/>
      </swiper-item>
      <swiper-item>
        <img src="https://github.com/wanghe2022w/images/blob/main/static/images/detail/carousel/04.jpg"/>
      </swiper-item>
    </swiper>
    <div>
      <ListTmp v-for="(list,index) in listTmp" :key="index" :list="list" :index="index"/>
    </div>
  </div>
</template >

<script>
  import ListTmp from '../listTemplate/listTemplate.vue'
  import {mapState} from 'vuex'
  export default{
    components:{
      ListTmp
    },
    beforeMount(){
      // 分发一个action,修改state的状态
      this.$store.dispatch('getList')
    },
    computed:{
     // 映射状态到本组件
      ...mapState(['listTmp'])
    }
  }

</script>
<style>
 .listContainer swiper{
    width: 100%;
   height: 400rpx;
 }
  .listContainer swiper img{
    width: 100%;
    height: 100%;
  }
</style>
