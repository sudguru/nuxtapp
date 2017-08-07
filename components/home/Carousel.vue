<template>
	<div class="container">
		<div class="home-slider-container">
			<div class="col-md-9 col-md-offset-3">
				<div class="row">
					<div class="col-md-10 col-md-offset-1">
						<div id="carousel-generic" class="carousel slide" data-ride="carousel">
							<!-- Indicators -->
							<ol class="carousel-indicators">
								<li v-for="(slider, index) in sliders" data-target="#carousel-generic" :data-slide-to="index" :class="{ active: index == 0 }"></li>
							</ol>
							<!-- Wrapper for slides -->
							<div class="carousel-inner" role="listbox">
								<div v-for="(slider, index) in sliders" class="item" :class="{ active: !index }">
									<img :src="slider.slide" :alt="slider.caption">
									<div v-if="slider.caption" class="carousel-caption">{{ slider.caption }}</div>
								</div>
							</div>
							<!-- Controls -->
							<a v-if="controls" class="left carousel-control" href="#carousel-generic" role="button" data-slide="prev">
								<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
								<span class="sr-only">Previous</span>
							</a>
							<a v-if="controls" class="right carousel-control" href="#carousel-generic" role="button" data-slide="next">
								<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
								<span class="sr-only">Next</span>
							</a>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'carousel',
		data(){
			return {
				sliders: {},
				controls: true
			}
		},
		mounted: function () {
			this.$http.get('homepageslider.json').then(response => {
				this.sliders = response.body;
			}, response => {
				console.log(response);
			});
		}
	}
</script>
<style scoped>
	
</style>