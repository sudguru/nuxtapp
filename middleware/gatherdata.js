  import axios from 'axios'
  const myurl = 'http://localhost:3000'
  export default function({ store }) {
      return axios.get(myurl+'/data/'+store.state.currentlanguage+'/general.json')
      .then((res) => {
        //store.commit('setStars', res.data)
        store.state.stopdata = res.data
      })
}