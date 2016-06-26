var Heroes = angular.module('Heroes', []);

Heroes.controller('HeroesController', ['$scope', function($scope) {
	$scope.heroes = [];

	getAllHeroes(function(jsonHeroes) {
		jsonHeroes.forEach(function(jsonHero) {
			var hero = new Hero();
			hero.name = jsonHero.name;
			hero.portrait = hero.name + "_portrait.png";
			hero.type = jsonHero.type;
			$scope.heroes.push(hero);
		});
		console.log($scope.heroes);
		$scope.$apply();
	});
}]);