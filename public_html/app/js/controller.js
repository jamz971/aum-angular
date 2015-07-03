'use strict';
var appControllers = angular.module('appControllers',[]);

appControllers.controller('MainController',['$scope', 'AdopiFactory', 'AdopiLocalFactory','$filter',
	function($scope, AdopiFactory, AdopiLocalFactory, $filter){
		$scope.currentPage = 1;
  		$scope.numberPerPage = 12;
  		$scope.numberpageShow = 5;
  		var i=0;
			
			AdopiFactory.userList(i).success(
		 		function(list){
		 		$scope.list = list.results;
		 		//console.log($filter('imgUrlFilter')($scope.list[i].cover));		 	
		 	}).
		 	error(
		 		function(){
		 			AdopiLocalFactory.userLocalList().success(
		 				function(list){
		 					$scope.list = list.results;
		 					console.log('Local Factory numero 1 (0)', list.results[0]);
		 				});
		 			
		 	});		 

}]);

appControllers.controller('UserController', ['$scope', 
	function($scope){
	
}]);

appControllers.controller('UserDetailController', ['$scope', 'AdopiFactory', 'AdopiLocalFactory','$stateParams','$filter', 
	function($scope, AdopiFactory, AdopiLocalFactory, $stateParams, $filter){

		AdopiFactory.userDetail($stateParams.userId).success(function(details){$scope.details = details;
			$filter('imgUrlFilter')($scope.details.cover);
		}).
		error(function(){
			AdopiLocalFactory.userLocalDetail($stateParams.userId).success(
				function(details){
					$scope.details = details;
					$filter('imgUrlFilter')($scope.detail.pics);
					console.log('Local Factory detail', detail.pseudo);
			});
		});

		
}]);



/*app.controller('MainController',['$scope', 'AdopiService',
	function($scope, AdopiService){

		$scope.list = AdopiService.userList();
		console.log($scope.list);

}]);

app.controller('UserController', ['$scope', 
	function($scope){
	
}]);*/

/*app.controller('UserDetailController', ['$scope', 'AdopiFactory','$stateParams', 
	function($scope, AdopiFactory, $stateParams){
		$scope.routeParams = $stateParams;
		$scope.detail = AdopiFactory.userDetail($stateParams.userId);
		console.log($scope.detail);
		console.log($scope.routeParams);
}]);

app.controller('SearchController', ['$scope', 'AdopiFactory','$stateParams', 
	function($scope, AdopiFactory){

		$scope.search = AdopiFactory.searchUsers($stateParams);
		console.log($scope.search);
}]);*/