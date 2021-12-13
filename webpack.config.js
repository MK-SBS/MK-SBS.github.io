module.exports = {
  entry: __dirname + "./main.js",
  output: {
    path: __dirname + "/dist/",
  },
   module: {
         rules: [
           {
             test: /\.js$/,
             exclude: ["/node_modules/"],
             use: [
               {
                 loader: "babel-loader",
                 options: {
                   presets: ["env"],
                 },
               },
             ],
           },
         ],
        },
 }