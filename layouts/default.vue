<template>
  <div class="body">
    <wt-header></wt-header>
    <div role="main" class="main">
      <nuxt/>
      <wt-footer></wt-footer>
    </div>
  </div>
</template>
<script>
  import Header from '~/components/Header'
  // import Mobileheader from '~/components/Mobileheader'
  import Footer from '~/components/Footer'
  export default {
    components: {
      'wt-header' : Header,
      // 'wt-mobile-header': Mobileheader,
      'wt-footer' : Footer
    }
  }
</script>
<style>


</style>
