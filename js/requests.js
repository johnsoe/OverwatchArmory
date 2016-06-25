(function() {

	var getAllHeroes = function(callback) {
		firebase.database().ref('/').once('value').then(function(snapshot) {
		 	callback(snapshot.val());
		});
	};

	var getImage = function(img, callback) {
		firebase.storage().child("portraits/" + img).getDownloadUrl().then(function(url) {
			callback(url);
		}).catch(function(error) {
			console.log(error);
		});
	};	

	var heroes = [];
	getAllHeroes(function(jsonHeroes) {
		jsonHeroes.forEach(function(jsonHero) {
			var hero = new Hero();
			hero.name = jsonHero.name;
			hero.portrait = hero.name + "_portrait.png";
			hero.type = jsonHero.type;
			heroes.push(hero);
		});
		console.log(heroes);
	});
})();
