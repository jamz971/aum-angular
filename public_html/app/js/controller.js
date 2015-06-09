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

appControllers.controller('UserDetailController', ['$scope', 'AdopiFactory','$stateParams','$filter', 
	function($scope, AdopiFactory, $stateParams, $filter){

		AdopiFactory.userDetail($stateParams.userId).success(function(detail){$scope.detail = detail;
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