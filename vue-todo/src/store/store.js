import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'
// import * as mutations from './mutations'
import todoApp from './modules/todoApp'

Vue.use(Vuex);
//use는 Vue의 플러그인.
//vue를 사용하는 모든 영역에 특정 기능을 추가하고 싶을 때.


export const store = new Vuex.Store({
    modules: {
        todoApp
    }
});