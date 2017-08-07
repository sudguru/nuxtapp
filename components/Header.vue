<template>
	<div class="container">
			<header id="header" data-plugin-options="{'stickyEnabled': false, 'stickyEnableOnBoxed': false, 'stickyEnableOnMobile': false, 'stickyStartAt': 147, 'stickySetTop': '-147px', 'stickyChangeLogo': false}">
				<div class="header-body">
					<wt-header-top></wt-header-top>
					<wt-header-regular></wt-header-regular>
					<wt-header-nav></wt-header-nav>
				</div>
			</header>
</div>
</template>

<script>
import HeaderTop from '~/components/header/Header-Top'
import HeaderRegular from './header/Header-Regular'
import HeaderNav from './header/Header-Nav.vue'
export default {
	name: 'header',
	components: {
		'wt-header-top' : HeaderTop,
		'wt-header-regular' : HeaderRegular,
		'wt-header-nav': HeaderNav
	}
}
</script>

<style>
	tbody tr td:last-child,
	tbody tr td:nth-child(4)
	{
		text-align: right;
	}
	tbody tr td {
		font-size: 90%;
		color: #333;
	}
</style>
