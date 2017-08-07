<template>

	<div class="home-products-carousel-container">
		<h2 class="slider-title">
		<span class="inline-title">FASHION SELECTION</span>
		</h2>
		<div class="owl-carousel owl-theme manual home-products-carousel">
			<div class="product" v-for="product in featuredProducts">
				<figure class="product-image-area">
					<router-link to="" title="Product Name" class="product-image">
					<img :src="'/static/temp/'+product.featuredimage" alt="Product Name">
					<img src="/static/temp/debit.jpg" alt="Product Name" class="product-hover-image">
					</router-link>
				</figure>
				<div class="product-details-area">
					<h2 class="product-name"><router-link :to="'/'+$store.state.currentlanguage+'/post/'+product.slug" :title="product.title">{{product.title}}</router-link></h2>
					<div class="product-ratings">
						<div class="ratings-box">
							<div class="rating" style="width:95%"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	let productcategories = ['deposit', 'loan-advances','remittance'];
	export default {
		name:'homeproduct',
		data() {
			return {
				posts: JSON.parse(this.$localStorage.get('posts'))
			}
		},
		computed: {
			featuredProducts() {
				 this.posts.filter(function(post) {
					console.log(post.featured == true); // && productcategories.indexOf(post.categoryslug) > -1
				})
			}
		}
	}
</script>
