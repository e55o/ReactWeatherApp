var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ],
    externals:{
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output:{
        path: __dirname,
        filename: './public/bundle.js'
    }, // generating webpack bundle file and setting the entry point of the app to be app.jsx
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Weather: 'app/components/Weather.jsx',
            About: 'app/components/About',
            Examples: 'app/components/Examples',
            WeatherForm: 'app/components/WeatherForm.jsx',
            WeatherMessage: 'app/components/WeatherMessage',
            openWeatherMap:'app/api/openWeatherMap.jsx',
            ErrorModal:'app/components/ErrorModal.jsx',
            applicationStyle: 'app/styles/app.scss'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders:[
            {
                  loader: 'babel-loader',
                  query: {
                      presets:['react', 'es2015', 'stage-0']
                  } ,     //take the files, parse them to React and ES2015 Formats
                  test: /\.jsx?$/,
                  exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'eval-source-map'
};
 