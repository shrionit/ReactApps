var fs = require('fs');
var path = require('path');
var obj = {};
function getFolders(dir, o) {
	let files = fs.readdirSync(dir);
	let cf = dir.slice(dir.lastIndexOf("/")+1, dir.length);
	o[cf] = {files: []};
	let fl = [];
	files.forEach(f => {
		let stat = fs.statSync(path.join(dir, f));
		if(stat && stat.isDirectory()){
			console.log("YES - " + f);
			getFolders(path.join(dir, f), o[cf]);
		}else{
			let fo = {
				name: f.slice(0, f.lastIndexOf(".")), 
				type: f.slice(f.lastIndexOf(".")+1, f.length),
				path: path.join(dir, f)
			};
			fl.push(fo);
		}
	});
	o[cf]['files'].push(...fl);
	fs.writeFile('./myjsonfile.json', JSON.stringify(o), 'utf8', function (err) {
 		if(err)throw err;
 	});
	console.log(o);
}
getFolders('Video', obj);