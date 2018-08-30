internsApp = {};

(function(){

	function fnCreate(){
		var appName = document.getElementById("appName").value;
		var path = 'apps-in-myanmar/' + appName;
		var appName = firebase.database().ref().child("#appName").val();
		var updated = firebase.database().ref().child("#updated").val();
		var size = firebase.database().ref().child("#size").val();
		var installs = firebase.database().ref().child("#installs").val();
		var currentVersion = firebase.database().ref().child("#currentVersion").val();
		var requiresAndroid = firebase.database().ref().child("#requiresAndroid").val();
		var offeredBy = firebase.database().ref().child("#offeredBy").val();
		var developer = firebase.database().ref().child("#developer").val()
		var data = {
			appName : appName,
			updated : updated,
			size : size,
			installs : installs,
			currentVersion : currentVersion,
			requiresAndroid : requiresAndroid,
			offeredBy : offeredBy,
			developer : developer
		}
		fb.data.create(path, data, messageHandler);
	}

	function fnRead(){
		var key = document.getElementById("appName").value;
		var path = 'apps-in-myanmar/' + key;
		fb.data.read(path, successFn, messageHandler);
		function successFn(snapShot){
			if(!snapShot){
				console.log("No data found:");
			}else{
				console.log("Value :" + snapShot.val());
					var result = snapShot.val();
					var newElement = {}
					var appName = result.appName;
					var updated = result.updated;
					var size = result.size;
					var installs = result.installs;
					var currentVersion = result.currentVersion;
					var requiresAndroid = result.requiresAndroid;
					var offeredBy = result.offeredBy;
					var developer = result.developer;
					newElement['key'] = key;
					newElement['updated'] = updated;
					newElement['size'] = size;
					newElement['installs'] = installs;
					newElement['currentVersion'] = currentVersion;
					newElement['requiresAndroid'] = requiresAndroid;
					newElement['offeredBy'] = offeredBy;
					newElement['developer'] = developer;
					interns = [];
					interns.push(newElement);
					console.log(key, appName, updated, size, installs, currentVersion, requiresAndroid, offeredBy, developer);
			}
				internsObj = { internsBinding: interns}
				ko.applyBindings(internsObj);
		}
}

	function messageHandler(err){
		if(!!err){
			console.log(err)
		}else{
			console.log("success");
		}
	}
	internsApp.Create = fnCreate;
	internsApp.Read = fnRead;
})()

//internsApp.Read();
