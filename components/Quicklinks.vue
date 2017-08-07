<template>
	<div class="container">
		<div class="homepage-bar">
			<div class="row">
				<div class="col-md-3" v-for="quicklink in quicklinks">
					<i :class="quicklink.icon" class="bar-icon"></i>
					<div class="bar-textarea">
						<h3><a :href="quicklink.link">{{ quicklink.title }}</a></h3>
						<!-- <p><a :href="quicklink.link">Learn More</a></p> -->
						<!-- <p>Free shipping on all orders over $99.</p> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'quicklinks',
		data() {
			return {
				quicklinks: {}
			}
		},
		mounted: function () {
			this.$http.get('quicklinks.json').then(response => {
				this.quicklinks = response.body;
			}, response => {
				console.log(response);
			});
		}
	}
</script>

<style scoped>
	.container
	{
		margin-top: 10px;
	}
	.bar-textarea h3 a
	{
		color: #111;
		cursor: pointer;
	}
	
</style>