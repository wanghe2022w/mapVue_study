/**
 提交更新数据的方法，用于修改state的状态数据
 */
import {
RECEIVE_LIST,
RECEIVE_MOVIE_DETAIL
} from './mutation-types'

export default {
  [RECEIVE_LIST](state,{list_data}){
    state.listTmp = list_data
  },
  [RECEIVE_MOVIE_DETAIL](state,data){
    state.moviesArr=data
    console.log(state)
  }
}