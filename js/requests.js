(function() {

	var heroes = [];

	var getAllHeroes = function() {
		firebase.database().ref('/').once('value').then(function(snapshot) {
		 	var value = snapshot.val();
		});
	};
})();
