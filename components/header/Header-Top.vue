<template>
	<div class="header-top">
		<div class="container">
			<div class="dropdowns-container">

				<div class="header-dropdown lang-dropdown">
					<a to="home"><img src="/img/en.png" alt="English">English <i class="fa fa-caret-down"></i></a>
					<ul class="header-dropdownmenu">
						<li v-for="language in $store.state.stopdata.languages">
							<a :href="language.link" @click="changeLanguage(language.shortcode)"><img :src="language.icon" alt="English">{{ language.name }}</a>
						</li>
					</ul>
				</div>

				<div class="compare-dropdown">

				</div>
			</div>		

			<div class="top-menu-area">
				<a href="#">Links <i class="fa fa-caret-down"></i></a>
				<ul class="top-menu">
					<li v-for="hotlink in $store.state.stopdata.links">
						<nuxt-link :to="hotlink.link">{{ hotlink.name }}</nuxt-link>
					</li>
				</ul>
			</div>
			<p class="welcome-msg">{{ $store.state.stopdata.welcome }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'headertop',
		methods: {
			changeLanguage(newlanguage) {
				console.log(newlanguage)
				this.$store.commit('changeLanguage', newlanguage)
				this.$router.push({ path: '/' })
				console.log(" ")
				console.log(this.$store.state.currentlanguage)
			}
		}
	}


</script>