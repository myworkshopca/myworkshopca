/**
 * configuration for Nuxt.js
 */
export default {

    // set to Single Page Application mode.
    // mode option is deprecated. 
    // Please use ssr: true for universal mode or
    // ssr: false for spa mode and remove mode from nuxt.config
    //mode: 'spa',
    ssr: false,
    // For using nuxt generate, your have to set target: 'static' in your nuxt.config
    //        👉 Learn more about it on https://go.nuxtjs.dev/static-target    
    target: 'static',

    server: {
        //port: 80, // default is 3000
        port: 3003,
        host: '0.0.0.0' // default is localhost
    },

    build: {

        /**
         * configure raw-loader to load text file from file system.
         * TODO: raw-loader will be deprecated in Webpack version 5 (released on Oct, 2020).
         * It will be replaced by asset module:
         * - https://webpack.js.org/guides/asset-modules/
         */
        extend( config, ctx ) {

            config.module.rules.push( {
                enforce: 'pre',
                test: /\.(py|md)$/i,
                loader: 'raw-loader',
                exclude: /(node_modules)/
            } );
        }
    },

    buildModules: [
        // load the nuxtjs vutify-module
        // https://github.com/nuxt-community/vuetify-module
        '@nuxtjs/vuetify',
        // Axios module.
        '@nuxtjs/axios',
        // Auth module.
        '@nuxtjs/auth'
    ],

    /**
     * load plugins.
     * some global components.
     */
    plugins: [
        '~/plugins/index'
    ],

    /**
     * options for auth module.
     */
    auth: {
        strategies: {
            // disable local scheme.
            local: false,

            // config the auth0 scheme.
            auth0: {
                domain: 'babaofood.us.auth0.com',
                client_id: 'FZrMq9jj5LK8v2KXGbBZSAHMUfqL7Os8'
            }
        },

        redirect: {
            login: '/login',
            logout: '/',
            callback: '/login/',
            home: '/'
        }
    },

    /**
     * configuration for axios moudle.
     */
    axios: {
        // local development environment
        baseURL: 'http://192.168.0.19:3005'
        // lambda dev stage.
        //baseURL: 'https://5s3bof9lfe.execute-api.us-east-1.amazonaws.com/latest'
    },

    router: {
        // tweak the base, if we plan to deploy on a subfolder
        // /demo/nuxt
        base: '/',

        // enable the middleware
        middleware: ['auth']
    },
}
