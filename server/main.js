var express = require("express");
var router = express.Router();
app=express();
var path = require('path');
//app.use('public', express.static('css'))
app.use(express.static(path.join(__dirname, 'public/stylesheets')));



var http = require("http");
var url = require("url");
var qs = require("querystring");

var fs = require('fs');
var htmlFile;


fs.readFile('./html_server.html', function(err, data) {
  if (err){
      throw err;
  }
  htmlFile = data;
});


var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end(htmlFile);
});

//Listen on port 8000, IP defaults to 127.0.0.1
//server.listen(8000);


//console.log("Server running at http://127.0.0.1:8000/");

var MongoClient = require("mongodb").MongoClient;
http
 .createServer(function(request, response) {
    if (request.method == "GET") {
      var myurl = url.parse(request.url);
      var query = myurl.query;
      var qobj = qs.parse(query);
      var url1 = "mongodb://localhost:27017";
      MongoClient.connect(url1, function(err, client) {
        if (err) throw err;
        const db = client.db("Smart_Health_db");
        db.collection("Doctors").find(qobj, {
            projection: {
              _id: 0,
              name: 1,
  specialization: 1,
  expreience: 1,
  address: 1,
  hospital: 1,
  consulation:1
            }
          })
          .sort({
           specialization: 1
          })
          .toArray(function(err, result) {
            if (err) throw err;
			//console.log(qobj);
			//console.log(result);
			response.writeHead(200,{'Content-type':'text/html'});
      for (var i=0;i<result.length;i++){
        var string = "";
        var obj=result[i];

        response.write("<table><tr>");

        for(var prop in obj){
          response.write("<td>");
        if (typeof obj[prop]=="string"){
        string += prop + ":" + obj[prop] + ";</br>";
        } 
        else {
        string += prop + ": { </br>" + obj [prop] + "}";
        }
        response.write("</td>");
        } 
        response.write("</br>");
        response.write("</br>");

        response.write(string + "</tr></table>");
        }
        response.write("</ul>");
      
			//response.write("result added"+result.values());
			client.close();
			response.end(htmlFile);
          });
      });
    }
  }).listen(8081);
console.log("Server is up and running");
