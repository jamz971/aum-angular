'use strict';
var appControllers = angular.module('appControllers',[]);

appControllers.controller('MainController',['$scope', 'AdopiFactory', 'AdopiLocalFactory','$filter',
	function($scope, AdopiFactory, AdopiLocalFactory, $filter){
		$scope.currentPage = 1;
  		$scope.numberPerPage = 12;
  		$scope.numberpageShow = 5;
  		var i=0;
			
  		var getLocal = AdopiLocalFactory.userLocalList().success(
			function(list){
				$scope.list = list.results;
				console.log('Local Factory numero 1 (0)', list.results[0]);
			}
		);


		AdopiFactory.userList(i).success(
	 		function(list){
	 		$scope.list = list.results;
	 		//console.log($filter('imgUrlFilter')($scope.list[i].cover));		 	
	 	}).
	 	error(function(){
	 			
	 			
	 	});		 

}]);

appControllers.controller('UserController', ['$scope', 
	function($scope){
	
}]);

appControllers.controller('UserDetailController', ['$scope', 'AdopiFactory', 'AdopiLocalFactory','$stateParams','$filter', 
	function($scope, AdopiFactory, AdopiLocalFactory, $stateParams, $filter){

		AdopiFactory.userDetail($stateParams.userId).success(
			function(details){
				$scope.details = details;
				$filter('imgUrlFilter')($scope.details.cover);
				console.log("Controller Details Profile", details.pseudo, details.pics, Details.cover);
		}).
		error(function(){
			AdopiLocalFactory.userLocalDetail($stateParams.userId).success(
				function(details){
					$scope.details = details;
					$filter('imgUrlFilter')($scope.details.pics);
					console.log('Local Factory detail', details.pseudo);
			});
		});
		
}]);