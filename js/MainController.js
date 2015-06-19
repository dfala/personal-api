angular.module('personalApi')

.controller('MainController', function ($scope, $http, $timeout) {

	//////////////////////////////////////////////////////
	// GET
	//////////////////////////////////////////////////////

	$http.get('http://localhost:2022/name')
		.success(function (response) {
			$scope.person = response;
		})
		.error(function (err) {
			throw new Error(err);
		})

	$http.get('http://localhost:2022/hobbies')
		.success(function (response) {
			$scope.hobbies = response;
		})
		.error(function (err) {
			throw new Error(err);
		})

	// $http.get('http://localhost:2022/occupations')
	// 	.success(function (response) {
	// 		$scope.occupations = response;
	// 	})

	$http.get('http://localhost:2022/occupations/latest')
		.success(function (response) {
			$scope.lastestOccupation = response;
		})

	$http({
	    url: 'http://localhost:2022/occupations', 
	    method: "GET",
	    params: {order: 'dsc'}
	 })
	.success(function (response) {
		$scope.occupations = response;
	})

	//
	$http.get('http://localhost:2022/skills')
		.success(function (response) {
			$scope.skills = response;
		})
		.error(function (err) {
			throw new Error(err);
		})

	//////////////////////////////////////////////////////
	// PUT
	//////////////////////////////////////////////////////

	$scope.changePerson = function () {
		var newName = {
			name: 'Jose Federico'
		};

		$http.put('http://localhost:2022/name', newName)
			.success(function (response) {
				$scope.person = response;
				// console.info(response);
			})
			.error(function (err) {
				throw new Error(err);
			})
	}

	$scope.changeLocation = function () {
		var location = {
			place: 'Guatemala'
		};

		$http.put('http://localhost:2022/location', location)
			.success(function (response) {
				$scope.location = response;
			})
			.error(function (err) {
				throw new Error(err);
			})
	}

	$scope.addHobby = function (newHobby) {
		var hobby = {
			hobby: newHobby
		};

		$http.put('http://localhost:2022/hobbies', hobby)
			.success(function (response) {
				$scope.hobbies.push(response);
			})
			.error(function (err) {
				throw new Error(err);
			})
	}

	//////////////////////////////////////////////////////
	// POST
	//////////////////////////////////////////////////////
	
	$scope.skills = [];

	$scope.addSkills = function (newSkill) {
		var skillObject = {
			skill: newSkill
		}

		$http.post('http://localhost:2022/skills', skillObject)
			.success(function (response) {
				$scope.skills.push(response);
			})
			.error(function (err) {
				throw new Error(err);
			})
	}

	//////////////////////////////////////////////////////
	// DELETE
	//////////////////////////////////////////////////////

	$scope.deletePerson = function () {
		$http.delete('http://localhost:2022/person')
			.success(function (response) {
				$scope.person = '';
				$timeout(function () {
					alert(response);
				})
			})
			.error(function (err) {
				throw new Error(err);
			})
	}

})