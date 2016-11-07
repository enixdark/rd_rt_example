import express from 'express'
import bodyparser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
let browserify = require('browserify-middleware')
let babelify = require("babelify")
let browserSync = require('browser-sync')
let passport = require('passport')
let Strategy = require('passport-http-bearer').Strategy
let app = express()
let port = process.env.PORT || 5000
let token = process.env.TOKEN || 'test'
app.use(cors({credentials: true, origin: true}))


mongoose.connect('mongodb://localhost:27017/websearch/sites')
var siteSchema = new mongoose.Schema({
  title: String,
  link: String,
  desc: String
})

passport.use(new Strategy(
  (token, cb) =>{
    if(token == 'test'){
      return cb(null, true)
    }
    return cb(null, false)
  }
))


let searchDb = mongoose.model('sites', siteSchema)

browserify.settings({
  transform: [babelify.configure({})],
  presets: ["node6", "react"],
  extensions:['.js','.jsx'],
  grep: /\.jsx?$/
})


let routes = function(app){
  app.use(bodyparser.json())
  app.get('/bundle.js', browserify(`${__dirname}/source/app.jsx`))
  app.get(['*.png','*.jpg','*.css','*.map'], (req, res) => {
    res.sendFile(`${__dirname}/public/${req.path}`)
  })

  app.get('*.json', function (req, res) {
    res.sendFile(__dirname+"/public/"+req.path);
  });

  app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
  })

  app.get('/search/:title',
    passport.authenticate('bearer', { session: false}), 
    (req, res) => {
    searchDb.find(
      {title: { $regex: `${req.params.title}*` , $options: 'ix'} }, (err, data) => {
      if(err) return res.status(500).send({msg: 'couldn\'t find anything'})
      if(!data.length) return res.status(500).send({msg: 'No results'})
      res.json(data)
    })
  })
}

let router = express.Router()

routes(router)

// app.use('/v1', router)
app.use(router)
app.listen(port, () => {
  browserSync({
    proxy: `localhost:${port}`,
    files: ['source/**/*.{jsx}', 'public/**/*.{css}'],
    options: {
      ignored: ['node_modules','bower_componenst']
    }
  })
  console.log('server listening on port ' + (port))
})

