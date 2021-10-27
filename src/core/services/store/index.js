import { createStore } from 'vuex'

import config from "./modules/config.module"
import math from "./modules/math.module"
import option from "./modules/option.module"

export default createStore({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    config,
    option,
    math
  }
})