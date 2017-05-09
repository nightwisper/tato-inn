

const webpack = require("webpack");
const path = require("path");

var jF = path.resolve(__dirname, "js");
var bF = path.resolve(__dirname, "build");

var config = {
    entry: {
         vendor: ['angular'],
        "order":jF+"/order.js",
        "owl":jF+"/owl.carousel.min.js"
        //"login":jF+"/login.js",
    },
    output:{
        filename:"[name]bundle.js",
        path:bF
    },
     plugins: [
         new webpack.optimize.CommonsChunkPlugin( {name: "vendor",  filename: "vendor.bundle.js"}), 
         
        new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
        })

    ]

};

module.exports = config;

