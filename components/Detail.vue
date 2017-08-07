<template>

	<div class="container">
	<div class="white">
		<div class="row">
			<div class="col-md-8" style="padding:15px">
				<div v-for="post in postdata" v-if="post.slug == $route.params.slug">
					<ul class="breadcrumb">
						<li><router-link to="/">Home</router-link></li>
						<li><router-link :to="'/'+$store.state.currentlanguage+'/category/'+post.categoryslug">{{post.category}}</router-link></li>
						<li><router-link :to="post.slug">{{post.title}}</router-link></li>
					</ul>
					<article>
						<h1>{{ post.title }}</h1>
						<div v-html="post.content"></div>
					</article>
				</div>
			</div>
			<div class="col-md-4 p20" >
				{{ $store.state.tollfree }}
			</div>
		</div>
	</div>
	</div>
</template>
<script>
	export default {
		name:'detail',
		data() {
			return {
				postdata: JSON.parse(this.$localStorage.get('posts')),
				x: 1
			}
		}
	}
</script>
<style scoped>
	.white
	{
		background-color: #fff;
		padding: 0 20px;
	}
	.p20
	{
		padding-top: 20px
	}
</style>