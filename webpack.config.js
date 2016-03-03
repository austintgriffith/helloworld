var webpack = require('webpack');

var config = {
    entry: [
      "bootstrap-webpack!./src/bootstrap.config.js",
      "font-awesome-webpack!./src/font-awesome.config.js",
    ],
    module: {
        loaders: [
            {test: /\.png$/,loader: "file?name=[name].[ext]"},
            // **IMPORTANT** This is needed so that each bootstrap js file required by
            // bootstrap-webpack has access to the jQuery object
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
            // loads bootstrap's css.
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ],
    },
    //proxy to the backend server so you can run the full build for backend with npn run build
    //but hot reload the frontent stuff using npn run dev
    devServer: {
        proxy: {
            '*': {
                target: 'http://localhost:21112',
                secure: false,
                ws: true
              /*  bypass: function(req, res, proxyOptions) {
                    if (req.headers.accept.indexOf('html') !== -1) {
                        console.log('Skipping proxy for browser request.');
                        return '/index.html';
                    }
                },*/
            },
        },
    },
};

module.exports = config;
