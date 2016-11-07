const express = require("express")
const browserify = require('browserify-middleware')
const babelify = require("babelify")
const browserSync = require('browser-sync')
const port = process.env.PORT || 8080

const app = express()

browserify.settings({
  transform: [babelify.configure({})],
  presets: ["node6", "react"],
  extensions:['.js'],
  grep: /\.js?$/
})


app.get('/bundle.js', browserify(`${__dirname}/index.js`))

app.get(['*.png','*.jpg','*.css','*.map'], (req, res) => {
  res.sendFile(`${__dirname}/public/${req.path}`)
})

app.get('*.json', function (req, res) {
  res.sendFile(__dirname+"/public/"+req.path);
});

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

app.listen(port, () => {
  browserSync({
    proxy: `localhost:${port}`,
    files: ['source/**/*.{jsx}', 'public/**/*.{css}'],
    options: {
      ignored: ['node_modules','bower_componenst']
    }
  })
})

