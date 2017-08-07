<template>
	<div>
		<wt-carousel></wt-carousel>
        <wt-quick-links></wt-quick-links>
        <wt-big-icon-tabs></wt-big-icon-tabs>
	</div>
</template>
<script>
	import Carousel from "./home/Carousel.vue";
	import Quicklinks from "./Quicklinks.vue";
	import Hometabs from "./home/Hometabs.vue";

	export default {
		components: {
			        'wt-carousel': Carousel,
			        'wt-quick-links': Quicklinks,
			        'wt-big-icon-tabs': Hometabs,
		}

	}
</script>