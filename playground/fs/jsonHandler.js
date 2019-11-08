
var fs = require('fs');

var tokenObj = {
	user: "secret",
	root: "supersecret",
	publ: "nopass"
};

var json = JSON.stringify(tokenObj);

fs.writeFile('myjsonfile.json', json, 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

fs.readFile('myjsonfile.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it is an object
	
	var userPass = obj.user;
	var suPass = obj.root;
	var publPass = obj.publ;
	
	console.log("user" + userPass);

//If you want to rewrite data like adding admin, do below steps

    obj.admin = "NeverBreaks"
    json = JSON.stringify(obj);
    fs.writeFile('myjsonfile.json', json, 'utf8', (err) => {
            if (err) throw err;
                console.log('The file has been saved!');
    });
}});
