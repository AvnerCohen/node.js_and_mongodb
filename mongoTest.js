var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World it is jango!!');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

/*var sys = require('util');
var http = require('http');
var express = require('express');
var mongo = require('mongodb');
var Step = require('step');

var app = require('express').createServer();

//Pre requiests on mongo db:
// db.foo.insert({id:11,user_name:"moshe"});

//For testing:
//  db.foo.findOne({id:11})
//  db.foo.update({id:11},{$set : {user_name: "menashe"}});
var first_name="";

var Db = require('mongodb').Db,
    Server = require('mongodb').Server;

var db = new Db('test', 
	  new Server("127.0.0.1", 27017, {auto_reconnect: false}), {});
   
function setName(){


Step(
	function dbSetup(){
		new Db('test', 
	  new Server("127.0.0.1", 27017, {auto_reconnect: false}), {}).open(this);
	},
	function (err, client){
		client.collection('foo', this);
	},
	function (err, collection) {
		collection.findOne({id:11}, this);
	},
	function (err, document) {
		first_name = document.user_name;
	}
)

db.close();	

  }



app.get('/', function(req, res){
	setName();	
	res.send('hello world' + ' winner is:' + first_name);
});



app.listen(8000);
*/