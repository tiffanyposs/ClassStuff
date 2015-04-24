var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get('/color/:css_color', function(req, res){
  color = req.params.css_color;
  res.render('color.ejs', {color: color})
})

app.get('/reverse/:word', function(req, res){
  word = req.params.word;
  res.render('reverse.ejs', {word: word})
})

app.get('/length/:word', function(req, res){
  num_word = req.params.word;
  res.render('length.ejs', {num_word: num_word})
})

app.get('/color/reverse/:css_color/:word', function(req, res){
  css_color = req.params.css_color;
  word_color = req.params.word
  res.render('rev_color.ejs', {css_color: css_color, word_color: word_color})
})


// //
// app.get('/books', function(req, res){
// 	res.render('index.ejs', { books: books });
// });


// app.post('/book', function(req, res){
// 	var new_book = {
// 	    id: counter,
// 	    title: req.body.title, //  
// 	    author: req.body.author,
// 	    isbn13: req.body.isbn,
// 	    description: req.body.description
// 	}
// 	books[counter] = new_book;
// 	counter++;
// 	res.redirect('/books');
// });

// app.get('/book/:id', function(req, res){
// 	thisbook = books[req.params.id];
// 	res.render('show.ejs', {thisbook: thisbook})
// })


// app.post('/book/:id', function(req, res){
// 	book = books[req.params.id];
// 	book.description = req.body.description
// 	res.redirect('/books')
// })


// app.delete('/book/:id', function(req, res){
// 	//NEED TO FIGURE OUT THE DELETE
// 	res.redirect('/books')
// })




app.listen(3000);

console.log('listening on port 3000!');





