var express = require('express')
var session = require('express-session');
var path = require('path')
var compression = require('compression')
var app = express()
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var _db;

app.use(compression())

app.use(session({
  secret: 'such secret',
  cookie: {
    maxAge: 60000
  }
}))

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post('/api/project/create', function(req, res){
  var col =_db.collection('projects');
  col.find({
    name: req.query.name
  }).toArray(function(err, result){
    if (result[0]){
      res.send("project already exists")
    }
    else{
      col.insert({
        name: req.query.name,
        userID: req.query.userID,
        objective: req.query.objective,
        goal: req.query.goal,
        current: 0,
        isPaybackTime: false,
        interestDate: new Date().toISOString()
        
      },
      function(err, result){
        if (err){
          res.send("Error")
        }
        else{
          res.send("Project created")
        }
      })
    }
  })
})
app.post('/api/user/create', function(req, res) {
  var col = _db.collection('users');
  col.find({
    username: req.query.username
  }).toArray(function(err, result) {
    if (result[0]) {
      res.send("user already exists")
    }
    else {
      col.insert({
          username: req.query.username,
          password: req.query.password,
          name: req.query.name,
          money: 0,
          ownProject: "",
          email: req.query.email,
          creditcard: req.query.creditcard,
          projectIDs: []
        },
        function(err, result) {
          if (err) {
            res.send("Error")
          }
          else{
            res.send("user created")
          }
        })
    }
  })
})

app.post('/api/user/login', function(req, res) {
  var col = _db.collection('users');

  col.find({
    username: req.query.username,
    password: req.query.password
  }).toArray(function(err, result) {
    console.log(result)
    if(result[0]){
    req.session.user = result[0]._id;
    res.send("logged in");
    }
    else {res.send("no such account")}
  })
});

app.post('/api/user/session', function(req, res) {
  var result = req.session.user;
  res.send(result);
});

app.post('/api/user/data', function(req, res) {
  var col = _db.collection('users');
  var id = req.session.user;
  console.log(id);
  col.find({
    _id:mongodb.ObjectId(id)
  }).toArray(function(err, result){
    console.log(result);
    res.send(result[0]);
  });
});

var PORT = 8081
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})

MongoClient.connect("mongodb://user:password@aws-us-east-1-portal.19.dblayer.com:15895/maindb?ssl=true", function(err, db) {
  if (!err) {
    console.log("We are connected");
  }
  else {
    console.log("error!")
    console.log(err.errors)
  }
  _db = db;

});