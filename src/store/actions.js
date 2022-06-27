/**
 Action 提交的是 mutation，而不是直接变更状态
 */
import {RECEIVE_LIST,RECEIVE_MOVIE_DETAIL} from './mutation-types'
import listData from '../datas/list-data'
export default {
  getList({commit}){
    // 触发一个对应的mutation
    commit(RECEIVE_LIST,listData)
  },
  getMoviesArr({commit},data){
    // 触发对应一个mutation
    commit(RECEIVE_MOVIE_DETAIL,data)
  }

}