<template>
<div class="header-container container">
						<div class="header-row">
							<div class="header-column">
								<div class="header-logo">
									<a href="/">
										<img :alt="this.$store.state.hptitle" src="/img/logo.png" class="img-responsive">
									</a>
								</div>
							</div>
							<div class="header-column">
								<div class="row">
									<div class="header-search">
										<a href="#" class="search-toggle"><i class="fa fa-search"></i></a>
										<form action="#" method="get">
											<div class="header-search-wrapper">
												<input type="text" class="form-control" name="q" id="q" placeholder="Search..." required>
												<button class="btn btn-default" type="submit"><i class="fa fa-search"></i></button>
											</div>
										</form>
									</div>
									<div class="cart-area">
										<div class="custom-block">
											<i class="fa fa-phone"></i>
											<span>Toll FREE Number</span>
											<span class="split"></span>
											<a :href="'/'+$store.state.currentlanguage+'/post/contact-us'">CONTACT US</a>
										</div>
									</div>
									
									
								</div>
							</div>
						</div>
</div>
</template>

<script>
	export default {
		name: 'headerregular'
	}
</script>
<style></style>