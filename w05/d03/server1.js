var fs = require('fs');

fs.sendFile('file.txt', function(err, data){
	//data will be contents of file
	//err error paramenter can do nothing but
	//you must inclue it in your parameters
	if(err){
		process.exit();
	}

})