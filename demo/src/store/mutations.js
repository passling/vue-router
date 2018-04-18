import * as types from './mutation-type'
const mutations = {
  [types.SET_SESSTION] (state, flag) {
    state.sesstion = flag
  }
}
export default mutations
