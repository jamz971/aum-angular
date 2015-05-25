'use strict';
var appControllers = angular.module('appControllers',[]);

appControllers.controller('MainController',['$scope', 'AdopiFactory','$filter',
	function($scope, AdopiFactory, $filter){

		 AdopiFactory.userList().success(function(list){$scope.list = list.results;
		 	
		 		//console.log($filter('imgUrlFilter')($scope.list[i].cover));
		 	
		 });

}]);

appControllers.controller('UserController', ['$scope', 
	function($scope){
	
}]);

appControllers.controller('UserDetailController', ['$scope', 'AdopiFactory','$routeParams','$filter', 
	function($scope, AdopiFactory, $routeParams, $filter){

		AdopiFactory.userDetail($routeParams.userId).success(function(detail){$scope.detail = detail;
			$filter('imgUrlFilter')($scope.detail.cover);
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

/*app.controller('UserDetailController', ['$scope', 'AdopiFactory','$routeParams', 
	function($scope, AdopiFactory, $routeParams){
		$scope.routeParams = $routeParams;
		$scope.detail = AdopiFactory.userDetail($routeParams.userId);
		console.log($scope.detail);
		console.log($scope.routeParams);
}]);

app.controller('SearchController', ['$scope', 'AdopiFactory','$routeParams', 
	function($scope, AdopiFactory){

		$scope.search = AdopiFactory.searchUsers($routeParams);
		console.log($scope.search);
}]);*/