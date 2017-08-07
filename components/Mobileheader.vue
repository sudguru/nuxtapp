<template>
<div>
<div class="mobile-nav">
				<div class="mobile-nav-wrapper">
					<ul class="mobile-side-menu">
						<li><a href="#">Home</a></li>
						<li v-for="parentnav in navdata" >
							<span class="mmenu-toggle" v-if="parentnav.children"></span>
							<a :href="parentnav.link">{{ parentnav.title }}</a>
							
							<ul v-if="parentnav.children">
								<li v-for="childnav in parentnav.children">
									<span class="mmenu-toggle"></span>
									<a :href="childnav.link">{{ childnav.title }}</a>
									<ul v-if="childnav.children">
										<li v-for="grandchildnav in childnav.children ">
											<a href="grandchildnav.link">{{ grandchildnav.title }}</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</div>
	</div>
	<div id="mobile-menu-overlay"></div>
</div>
</template>

<script>
export default {
	name: 'mobileheader',
		data() {
			return {
			navdata: {}
			}
		},
		mounted: function () {
	        var self = this;
	        this.$http.get('nav.json').then(response => {
				this.navdata = response.body;
			}, response => {
				console.log(response);
			});
	    }
}
</script>

<style>
	
</style>