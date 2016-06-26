var getAllHeroes = function(callback) {
		firebase.database().ref('/').once('value').then(function(snapshot) {
		 	callback(snapshot.val());
		});
	};

(function() {

	var getImage = function(img, callback) {
		firebase.storage().child("portraits/" + img).getDownloadUrl().then(function(url) {
			callback(url);
		}).catch(function(error) {
			console.log(error);
		});
	};	
})();
