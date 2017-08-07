<template>
	<div class="header-container header-nav">
		<div class="container">
			<div id="mainddmenu" class="main-dropdown-menu shown">
				<a href="#" class="main-toggle-btn">
					<i class="fa fa-bars"></i>Menu
				</a>
				<div class="header-nav-main">
					<!-- <nav>
						<ul class="nav nav-pills" id="mainNav">
							<li class="active">
								<router-link to="/" @click="menuopen = !menuopen">
									Home 
								</router-link>
							</li>
							<li v-for="parentnav in navdata" :class="{ 'dropdown dropdown-full-color dropdown-primary' : parentnav.children }">
								
								<router-link :class="{ 'dropdown-toggle' : parentnav.children }" :to="parentnav.link">
									{{ parentnav.title }}
								</router-link>
								<ul class="dropdown-menu" v-if="parentnav.children">
									<li v-for="childnav in parentnav.children" :class="{ 'dropdown-submenu' : childnav.children }">
										<router-link :to="childnav.link">{{ childnav.title }}</router-link>
										<ul class="dropdown-menu"  v-if="childnav.children">
											<li v-for="grandchildnav in childnav.children ">
												<router-link :to="grandchildnav.link">{{ grandchildnav.title }}</router-link>
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</nav> -->
				</div>
			</div>

			<div class="custom-link-menu">
				<!-- <router-link v-for="customlink in customlinks" :to="customlink.link">{{ customlink.title }} <span class="tip tip-hot" v-show="customlink.hot">Hot!</span> </router-link> -->
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'headernav'
	}

</script>
<style>
	
</style>

