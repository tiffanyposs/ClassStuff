


app.get('/button_click', function(req, res){
	res.render('name.ejs', {name: req.query.name})
})

//for an express server
