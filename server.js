var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000	;

app.use(express.static(__dirname + '/'));

app.get('/:datestring', function(req, res){
	var date = req.params.datestring.match(/^[0-9]{1,}$/g);
	if(date == null){
		var d = new Date(req.params.datestring);
	}else{
		var d = new Date(parseInt(req.params.datestring));
	}	
		
	if(d != 'Invalid Date'){
		res.json({'Unix' : d.getTime(), 'Natural' : d.toDateString()});	   
	}
	else{
		res.json('Unix : null, Natural : null');	
	}	
});

app.listen(port, function(){
	console.log('listening to port '+ port);
});	