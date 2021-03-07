import reactRefresh from '@vitejs/plugin-react-refresh'
const { resolve } = require('path')


// https://vitejs.dev/config
export default {

  plugins: [
    // reactRefresh(),
    // liveReload(__dirname+'/(app|config|views)/**/*.php')
    // edit according to your source code
  ],

  // config
  root: 'src',
  // base: process.env.APP_ENV === 'development'
  //   ? '/'
  //   : '/dist/',

  base: '/',

  build: {
    // output dir for production build
    outDir: resolve(__dirname, '../public/dist'),
    emptyOutDir: true,

    // emit manifest so PHP can find the hashed files
    manifest: true,

    // esbuild target
    target: 'es2018',

    // our entry
    rollupOptions: {
      input: '/main.js'
    }
  },

  server: {
    // required to load scripts from custom host
    cors: true,

    // we need a strict port to match on PHP side
    // change freely, but update on PHP to match the same port
    strictPort: true,
    port: 3000,
    hmr: {
      host: 'localhost',
    }
  }
}
