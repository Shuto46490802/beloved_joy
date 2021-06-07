const withImages = require('next-images')
const withTM = require('next-transpile-modules')(['gsap']);
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withTM(withImages(withPWA({
  images: {
    domains: ['scontent.cdninstagram.com', 'cdn.shopify.com', 'images.ctfassets.net']
  },
  pwa: {
    dest: 'public',
    mode: "production"
  },

  webpack(config) {
    return config
  }
})))
