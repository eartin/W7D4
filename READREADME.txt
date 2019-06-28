
1. make sure the elephant is running


2. rails setup
  a. rails new (project_name) -G --database=postgresql --skip-turbolinks
  b. check and update gemfile
    * gem 'pry-rails'
    * gem 'jquery-rails'

    development & test
      * gem 'binding_of_caller'
      * gem 'better_errors'
      * gem 'annotate'
  c. bundle install
  d. add these commands to 'application.js'
    //= require jquery
    //= require jquery_ujs
  e. prepare seed file
  f. rails db:setup


3. frontend setup
  a. npm init -y to initialize the app's 'package.json'
  b. npm install --save webpack react react-dom react-router-dom redux react-redux redux-thunk redux-logger @babel/core @babel/preset-env @babel/preset-react babel-loader lodash
  c. npm install -D webpack-cli
  d. add following under "scripts" in 'package.json'
    "postinstall": "webpack",
    "start": "webpack --mode=development --watch"
  e. create 'webpack.config.js' in the root of the project
  f. add below to 'webpack.config.js' and make modification in entry file

        const path = require('path');

        module.exports = {
          context: __dirname,
          entry: './frontend/entry.jsx',
          output: {
            path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
            filename: 'bundle.js'
          },
          resolve: {
            extensions: ['.js', '.jsx', '*']
          },
          module: {
            rules: [
              {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader',
                  query: {
                    presets: ['@babel/env', '@babel/react']
                  }
                },
              }
            ]
          },
          devtool: 'inline-source-map'
        };


*** side tip
  snake_case to camelCase
  - add following in the 'enviornment.rb'
    Jbuilder.key_format camelize: :lower