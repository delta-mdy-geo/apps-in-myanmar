fb = {};
fb = firebase;

function fnCreate(path, body, callBack){
		if(!path || !body) return;
		fb.database().ref(path).set(body, callBack);
}

function fnRead(path, successFunction, errorFunction){
		if(!path || !successFunction || !errorFunction) return;
		fb.database().ref(path).once('value').then(successFunction, errorFunction);
}

fb.data = {
		create: fnCreate,
		read: fnRead
}
