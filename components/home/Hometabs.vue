<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="tabs tabs-bottom tabs-center tabs-simple">
					<ul class="nav nav-tabs">
						<li class="active">
							<a href="#tabsNavigationSimpleIcons1" data-toggle="tab" aria-expanded="true">
								<span class="featured-boxes featured-boxes-style-6 p-none m-none">
									<span class="featured-box featured-box-primary featured-box-effect-6 p-none m-none" style="height: 100px;">
										<span class="box-content p-none m-none">
											<i class="icon-featured fa fa-product-hunt"></i>
										</span>
									</span>
								</span>									
								<p class="mb-none pb-none">Products</p>
							</a>
						</li>
						<li class="">
							<a href="#tabsNavigationSimpleIcons2" data-toggle="tab" aria-expanded="false">
								<span class="featured-boxes featured-boxes-style-6 p-none m-none">
									<span class="featured-box featured-box-primary featured-box-effect-6 p-none m-none" style="height: 100px;">
										<span class="box-content p-none m-none">
											<i class="icon-featured fa fa-list"></i>
										</span>
									</span>
								</span>									
								<p class="mb-none pb-none">Services</p>
							</a>
						</li>
						<li class="">
							<a href="#tabsNavigationSimpleIcons3" data-toggle="tab" aria-expanded="false">
								<span class="featured-boxes featured-boxes-style-6 p-none m-none">
									<span class="featured-box featured-box-primary featured-box-effect-6 p-none m-none" style="height: 100px;">
										<span class="box-content p-none m-none">
											<i class="icon-featured fa fa-commenting"></i>
										</span>
									</span>
								</span>									
								<p class="mb-none pb-none">News</p>
							</a>
						</li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane active" id="tabsNavigationSimpleIcons1" style="background-color: #F00; padding: 0px">
							<home-products></home-products>
						</div>
						<div class="tab-pane" id="tabsNavigationSimpleIcons2">
							<div class="center">
								<h4>Services</h4>
							</div>
						</div>
						<div class="tab-pane" id="tabsNavigationSimpleIcons3">
							<div class="center">
								<h4>News</h4>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import homeProducts from './HomeProducts.vue'
	export default {
		name: 'homeproducts',
		components: {
			homeProducts
		}
	}
</script>

<style scoped>
	.container
	{
		margin-bottom: 11px;
		margin-top: 5px;
	}
	.row
	{
		margin: 0px;
		padding-top: 15px;
		background-color: #fff;
		border-top: 1px solid #f5f5f5;
	}
	.tab-content .row
	{
		border-top: none !important;
	}
</style>