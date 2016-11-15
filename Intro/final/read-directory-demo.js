var fs = require('fs');

fs.readdir('/Users/', function(err, data){
	console.log(data);
})
