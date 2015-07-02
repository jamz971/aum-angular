'use strict';
var appControllers = angular.module('appControllers',[]);

appControllers.controller('MainController',['$scope', 'AdopiFactory','$filter',
	function($scope, AdopiFactory, $filter){
		$scope.currentPage = 1;
  		$scope.numberPerPage = 12;
  		$scope.numberpageShow = 5;
  		var i=0;

  		$scope.pageChangeHandler = function(num) {
		    console.log('going to page ' + num);
		};
			
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
		 				}
		 			);
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