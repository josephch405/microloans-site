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
    maxAge: 600000000
  }
}))

app.use(express.static(path.join(__dirname, 'public')))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

var objid = "";

app.post('/api/project/join', function(req, res){
  var pCol = _db.collection('projects');
  var uCol = _db.collection('users');
  
  var uid = req.session.user;
  var pid = req.query.pid;
  var q = req.query.quant;
  
  uCol.update({_id: mongodb.ObjectId(uid)}, {$push:{projectIDs:[pid, parseInt(q)]}, $inc:{money:-parseInt(q)}}, function(){
    pCol.update({_id: mongodb.ObjectId(pid)}, {$inc: {current:parseInt(q)}}, function(){
      res.send("ok")
      
    });
  });
  
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
      objid = mongodb.ObjectId().toHexString();
      console.log("read this first")
      console.log(objid);
      col.insert({
        _id: mongodb.ObjectId(objid),
        name: req.query.name,
        userID: req.session.user,
        objective: req.query.objective,
        goal: req.query.goal,
        current: 0,
        isPaybackTime: false,
        interestDate: new Date().toISOString(),
      },
      function(err, result){
        if (err){
          res.send("Error")
        }
        else{
          console.log("READ THIS");
          console.log(objid);
          _db.collection('users').update({_id:mongodb.ObjectId(req.session.user)}, {$set:{ownProject:objid}})
          res.send("Project created")
          
        }
      });
      
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

app.post('/api/project/data', function(req, res) {
  var col = _db.collection('projects');
  var id = req.query.projID;
  console.log(id);
  col.find({
    _id:mongodb.ObjectId(id)
  }).toArray(function(err, result){
    console.log(result[0]);
    if(parseInt(result[0].goal) > parseInt(result[0].current) && !result[0].isPaybackTime){
      col.update({_id:mongodb.ObjectId(id)}, {$set:{isPaybackTime: true}})
    }
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