<template>
	<div class="container">
	<div class="white">
		<div class="row">
			<div class="col-md-8">
				<ul class="breadcrumb">
						<li><router-link to="/">Home</router-link></li>
						<li><router-link :to="'/'+$store.state.currentlanguage+'/category/'+$route.params.slug">{{category}}</router-link></li>
				</ul>
				<article v-for="post in postdata" v-if="post.categoryslug == $route.params.slug">
					<h2>{{ post.title }}</h2>
					<div v-html="post.excerpt"></div>
					<router-link class="btn btn-borders btn-primary btn-xs" :to="'/'+$store.state.currentlanguage+'/post/'+post.slug">Read More</router-link>
					<hr>
				</article>
			</div>
			<div class="col-md-4">
				
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
				postdata: {},
				x: 1,
				category: document.title.split("-")[0]
			}
		},
		mounted: function () {
			this.$http.get('posts.json').then(response => {
				this.postdata = response.body;
			}, response => {
				console.log(response);
			});
		}
	}
</script>

<style scoped>
	.white
	{
		background-color: #fff;
		padding: 20px
	}
	.h1
	{
		font-weight: 800;
	}
</style>