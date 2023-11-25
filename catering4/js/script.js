var fnameId;


function getEl(id) {
var el = document.getElementById(id);
console.log(el);
return el;
}

		var fnameElement;
		fnameId = 'fname';
		fnameElement = document.getElementById(fnameId);
		//window.alert(fnameElement.value);
		console.log(fnameElement.value);
		console.log(fnameElement.value);
		console.log(fnameElement.value);
		console.log(fnameElement.value);
		console.log(fnameElement.value);
		console.log(fnameElement.value);
		console.log(fnameElement.value);
		console.log(fnameElement.value);
		console.log(fnameElement.value);

		var snameId = "sname";
		var snameElement = document.getElementById(snameId);
		//window.alert(snameElement.value);
		console.log(snameElement.value);

		var citiesId;
		var citiesElement;
		citiesId = 'cities';
		citiesElement = document.getElementById(citiesId);
		//window.alert(citiesElement.value);
		console.log(citiesElement.value);

		var hobbyId = "hobbies";
		var hobbyEllement = getEl(hobbyId);
		//window.alert(hobbyEllement.value);
		console.log(hobbyEllement.value);


		var wrapperId = "avatar-wrapper";
		var wrapperElement = getEl(wrapperId);
		//window.alert(wrapperElement.innerHTML);
		console.log(wrapperElement.innerHTML);

		var avatarId = "avatarka";
		var avatarElement = document.getElementById(avatarId);
		//window.alert(avatarElement.src);
		console.log(avatarElement.src);


		

		function consoleLog(params) {
			console.log(params.value);
		}


		// var alertAlarm = "МЕНЯЕМ";
		// window.alert(alertAlarm);
		hobbyEllement.value = "ХУЙ";
		consoleLog(hobbyEllement);

		fnameElement.className = "input-red";

		// window.alert(alertAlarm);
		hobbyEllement.value = "ХУЙ222222";
		consoleLog(hobbyEllement);

		



