'use strict';
var appServices = angular.module('appServices',['ngResource']);

appServices.service('AdopiService', ['$resource', 
  function($resource){
        return $resource('data/nantes/:userId.json', {}, {
          userDetail:{method:'GET', params:{userId:user}, isArray:true}
        });
}]);


/*app.service('AdopiService', ['$http', function($http){
        return {
            userList: function() {
                return $http.get('data/nantes/nantes_0.json')
                            .success(function(data) {
                              data;
                            }).
                            error(function(status, headers, config) {
                              status, headers, config
                            });
                } 
        };
}]);*/

