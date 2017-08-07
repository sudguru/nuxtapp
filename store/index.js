import Vuex from 'vuex'

import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      	generaldata: {},
      	posts: {},
      	currentlanguage: 'en'
    },
    mutations
  })
}

export default createStore