<template>
	<div>
		<h1>About Page</h1>
		<nuxt-link to="/">Home page</nuxt-link>
	</div>
</template>

<script>
	export default {
		head: {
    		title: 'Webtree - About',
    		script: [
    			{ src: '/vendor/jquery/jquery.min.js' }
    		],
    		link: [
    			{ rel: 'stylesheet', href: '/vendor/owl.carousel/assets/owl.carousel.min.css' }
    		]
    	}
	}
</script>