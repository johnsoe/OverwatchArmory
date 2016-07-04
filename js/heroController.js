var Heroes = angular.module('Heroes', []);

Heroes.controller('HeroesController', ['$scope', function($scope) {
	$scope.heroes = [];
	$scope.downloadUrls = {};

	requests.getAllHeroes(function(jsonHeroes) {
		jsonHeroes.forEach(function(jsonHero) {
			var hero = new Hero();
			hero.name = jsonHero.name;
			if(hero.name == "soldier-76")
					hero.name = "solider-76";
			hero.portrait = hero.name + "_portrait.png";
			hero.type = jsonHero.type;
			$scope.heroes.push(hero);
		});
		console.log($scope.heroes);
		$scope.$apply();
		getImagesForHeroes();
	});

	var getImagesForHeroes = function() {
		$scope.heroes.forEach(function(hero) {
			requests.getImage(hero.portrait, function(downloadUrl) {
				$scope.downloadUrls[hero.name] = downloadUrl;
			});
		});
		console.log($scope.downloadUrls);
		$scope.$apply();
	}
}]);