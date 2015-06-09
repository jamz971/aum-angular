'use strict';

var appFactories = angular.module('appFactories',['ngResource']);

appFactories.factory('AdopiFactory',['$http','$resource','wsConstants',function($http, $resource, wsConstants){
    return {

        account: function(){
            var url = 'http://www.adopteunmec.com/api/home/';
            return $http.get(url);
        },

        userList: function(){
           var url = wsConstants.webServiceURL+'users?count=50&offset=0';
           //delete $http.defaults.headers.common['X-Request-With'];
           $http.defaults.headers.common.Authorization = wsConstants.webServiceAUTH;
               return $http.get(url)
                    /*.success(function(data){
                        console.log('success', data);
                    }).
                    error(function(status, headers){
                        consloe.log('error', status, headers, config);
                    })*/;
        },

        searchUsers: function(requete, offset){
           var url = wsConstants.webServiceURL+'loop?count=50&q='+ requete +'&offset='+offset;
            return $http.get(url)
                    .success(function(data){
                        data;
                    }).
                    error(function(status, headers){
                        status, headers;
                    });
        },      
        
        userDetail: function($resource){
            var url = 'https://api.adopteunmec.com/api/users/'+$resource;
            $http.defaults.headers.common.Authorization = wsConstants.webServiceAUTH;
               return $http.get(url)
            /*return $resource('/profile/:userId', {}, {
              query: {method:'GET', params:{userId:'user'}, isArray:true}
            });
*/
            console.log($resource);

            /*var url = 'http://api.adopteunmec.com/api/users/'+$resource;
            return $http.get(url);*/
        }
    };
}]);
