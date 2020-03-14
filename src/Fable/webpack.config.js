var path = require("path");
//todo: use npm package 'path' to use relative paths. (see ChessReplay PR by Collin) 
module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "C:\\Users\\jaydp\\Documents\\Github\\NewGameOfLife\\src\\Fable\\UI\\UI.fsproj",
    output: {
        path: "C:\\Users\\jaydp\\Documents\\Github\\NewGameOfLife\\src\\Fable",
        filename: "fable-bundle.js",
    },
    devServer: {
        contentBase: "public",
        port: 8080,
    },
    module: {
        rules: [{
            test: /\.fs(x|proj)?$/,
            use: "fable-loader"
        }]
    }
}