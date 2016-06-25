(function() {

	var getAllHeroes = function(callback) {
		firebase.database().ref('/').once('value').then(function(snapshot) {
		 	callback(snapshot.val());
		});
	};

	var getHeroPortrait = function(heroName, callback) {
		firebase.storage().child('portraits/' + heroName + ".png").getDownloadUrl().then(function(url) {
			callback(url);
		}).catch(function(error) {
			console.log(error);
		});
	};

	var heroes = [];
	getAllHeroes(function(jsonHeroes) {
		//TODO: parse jsonHeroes and populate Hero objects from data. 
	});
})();
