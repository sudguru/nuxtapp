<template>
	<div class="container">
		<div class="row">
		<h1>{{ $route.params.slug }}</h1>
		<p>{{ $store.state.stopdata.welcome }}</p>
		</div>
	</div>
</template>

<script>
// 	import axios from 'axios'
//   	export default {
//     fetch ({ store, params }) {
//       return axios.get('http://localhost:3000/data/en/toplinks.json')
//       .then((res) => {
//         //store.commit('setStars', res.data)
//         store.state.stopdata = res.data
//       })
//     }
// }
</script>

<style scoped>
	.container
	{
		padding: 0px 15px;
	}
	.container div.row
	{
		background-color:  #FFF;
	}
</style>