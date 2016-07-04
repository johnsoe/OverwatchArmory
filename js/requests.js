(function() {
	var getImage = function(img, callback) {
		firebase.storage().ref().child("portraits/" + img).getDownloadURL().then(function(url) {
			callback(url);
		}).catch(function(error) {
			console.log(error);
		});
	};	

	var getAllHeroes = function(callback) {
		firebase.database().ref('/').once('value').then(function(snapshot) {
		 	callback(snapshot.val());
		});
	};

	window.requests = {
		getAllHeroes: getAllHeroes,
		getImage: getImage
	};
})();