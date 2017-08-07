module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Webtree',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ],
    script: [
      { src: '/vendor/modernizr/modernizr.min.js' },
      { src: '/vendor/jquery/jquery.min.js' },
      { src: '/vendor/jquery.appear/jquery.appear.min.js' },
      { src: '/vendor/jquery.easing/jquery.easing.min.js' },
      { src: '/vendor/bootstrap/js/bootstrap.min.js' },
      { src: '/vendor/common/common.min.js' },
      { src: '/vendor/jquery.lazyload/jquery.lazyload.min.js' },
      { src: '/vendor/owl.carousel/owl.carousel.min.js' },
      { src: '/vendor/magnific-popup/jquery.magnific-popup.min.js' },
      { src: '/vendor/vide/vide.min.js' },
      { src: '/js/theme.js' },
      { src: '/js/nb.js' },
      { src: '/js/custom.js' }
      // { src: '/js/theme.init.js' }
    ]
  },
  css: [
    '~/static/vendor/bootstrap/css/bootstrap.min.css',
    '~/static/vendor/font-awesome/css/font-awesome.min.css',
    '~/static/vendor/animate/animate.min.css',
    '~/static/vendor/simple-line-icons/css/simple-line-icons.min.css',
    '~/static/vendor/owl.carousel/assets/owl.carousel.min.css',
    '~/static/vendor/owl.carousel/assets/owl.theme.default.min.css',
    '~/static/vendor/magnific-popup/magnific-popup.min.css',
    '~/static/css/theme.css',
    '~/static/css/theme-elements.css',
    // '~/static/css/theme-blog.css',
    '~/static/css/theme-shop.css',
    '~/static/css/skin.css',
    '~/static/css/nb.css',
    '~/static/css/custom.css'
  ],

  // plugins: ['~plugins/vue-resource'],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  router: {
    middleware: 'gatherdata'
  }, 
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios']
    /*
    ** Run ESLINT on save
   

    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
     */
  }
}
