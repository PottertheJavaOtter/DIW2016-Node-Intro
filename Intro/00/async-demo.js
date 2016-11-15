fs = require('fs');

fs.readdir('/Users/', function (err, data){
	console.log('data:', data);
});

console.log("this comes after");
