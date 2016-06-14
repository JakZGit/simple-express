var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static("files"));
var image = ["http://nc3t.com/wp-content/uploads/2015/03/Inspiration-words.jpg", "http://www.altstudios.com/file/fa416088284a41c18e04a695d827708c"];
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

app.get("/",function(req,res){
	res.render('home');
})

app.get("/about",function(req,res){
	res.render('about');
})

app.get("/inspiration",function(req,res){
	var randomImage = image[Math.floor(Math.random()*image.length)];
	res.render('inspiration', { inspirational: randomImage });
})

app.listen(3000,function(){
	console.log("Inspiration on 3000!");
})

